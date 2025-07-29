'use client';

import {
   SidebarGroup,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { inboxItems } from '@/mock-data/sideBarNav';

export function NavInbox(): React.JSX.Element {
   return (
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
         <SidebarMenu>
            {inboxItems.map((item) => (
               <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                     <Link href={item.url}>
                        <item.icon />
                        <span>{item.name}</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            ))}
         </SidebarMenu>
      </SidebarGroup>
   );
}
