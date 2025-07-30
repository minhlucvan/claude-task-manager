'use client';

import type { Issue } from '@/libs/client/types';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { format } from 'date-fns';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag, useDragLayer, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { AssigneeUser } from '../selectors/AssigneeUser';
import { LabelBadge } from '../badges/LabelBadge';
import { PrioritySelector } from '../selectors/PrioritySelector';
import { ProjectBadge } from '../badges/ProjectBadge';
import { StatusSelector } from '../selectors/StatusSelector';
import { ContextMenu, ContextMenuTrigger } from '@/components/ui/ContextMenu';
import { IssueContextMenu } from './IssueContextMenu';

export const IssueDragType = 'ISSUE';

interface IssueGridProps {
   issue: Issue;
}

// Custom DragLayer component to render the drag preview
function IssueDragPreview({ issue }: { issue: Issue }): React.JSX.Element {
   const { getUserById, getStatusById, getPriorityById } = useDataStore();
   const assignee = issue.assigneeId ? getUserById(issue.assigneeId) : null;
   const status = getStatusById(issue.statusId);
   const priority = issue.priorityId ? getPriorityById(issue.priorityId) : null;
   return (
      <div className="w-full p-3 bg-background rounded-md border border-border/50 overflow-hidden">
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
               <PrioritySelector priority={priority} issueId={issue.id} />
               <span className="text-xs text-muted-foreground font-medium">{issue.id}</span>
            </div>
            <StatusSelector status={status} issueId={issue.id} />
         </div>

         <h3 className="text-sm font-semibold mb-3 line-clamp-2">{issue.title}</h3>

         <div className="flex flex-wrap gap-1.5 mb-3 min-h-[1.5rem]">
            {/* Labels and project badges temporarily removed until GraphQL query includes them */}
         </div>

         <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-xs text-muted-foreground">
               {format(new Date(issue.createdAt), 'MMM dd')}
            </span>
            <AssigneeUser user={assignee as any} />
         </div>
      </div>
   );
}

// Custom DragLayer to show custom preview during drag
export function CustomDragLayer(): React.JSX.Element | null {
   const { itemType, isDragging, item, currentOffset } = useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
   }));

   if (!isDragging || itemType !== IssueDragType || !currentOffset) {
      return <></>;
   }

   return (
      <div
         className="fixed pointer-events-none z-50 left-0 top-0"
         style={{
            transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
            width: '348px', // Match the width of your cards
         }}
      >
         <IssueDragPreview issue={item} />
      </div>
   );
}

export function IssueGrid({ issue }: IssueGridProps): React.JSX.Element {
   const ref = useRef<HTMLDivElement>(null);
   const { getUserById, getStatusById, getPriorityById } = useDataStore();
   const assignee = issue.assigneeId ? getUserById(issue.assigneeId) : null;
   const status = getStatusById(issue.statusId);
   const priority = issue.priorityId ? getPriorityById(issue.priorityId) : null;

   // Set up drag functionality.
   const [{ isDragging }, drag, preview] = useDrag(() => ({
      type: IssueDragType,
      item: issue,
      collect: (monitor: DragSourceMonitor): { isDragging: boolean } => ({
         isDragging: monitor.isDragging(),
      }),
   }));

   // Use empty image as drag preview (we'll create a custom one with DragLayer)
   useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
   }, [preview]);

   // Set up drop functionality.
   const [, drop] = useDrop(() => ({
      accept: IssueDragType,
   }));

   // Connect drag and drop to the element.
   drag(drop(ref));

   return (
      <ContextMenu>
         <ContextMenuTrigger asChild>
            <motion.div
               ref={ref}
               className="w-full p-3 bg-background rounded-md shadow-xs border border-border/50 cursor-default"
               layoutId={`issue-grid-${issue.id}`}
               style={{
                  opacity: isDragging ? 0.5 : 1,
                  cursor: isDragging ? 'grabbing' : 'default',
               }}
            >
               <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                     <PrioritySelector priority={priority} issueId={issue.id} />
                     <span className="text-xs text-muted-foreground font-medium">{issue.id}</span>
                  </div>
                  <StatusSelector status={status} issueId={issue.id} />
               </div>
               <h3 className="text-sm font-semibold mb-3 line-clamp-2">{issue.title}</h3>
               <div className="flex flex-wrap gap-1.5 mb-3 min-h-[1.5rem]">
                  {/* Labels and project badges temporarily removed until GraphQL query includes them */}
               </div>
               <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-xs text-muted-foreground">
                     {format(new Date(issue.createdAt), 'MMM dd')}
                  </span>
                  <AssigneeUser user={assignee as any} />
               </div>
            </motion.div>
         </ContextMenuTrigger>
         <IssueContextMenu issueId={issue.id} issue={issue} />
      </ContextMenu>
   );
}

export default IssueGrid;
