'use client';

import { SidebarTrigger } from '@/components/ui/SidebarProvider';

export default function HeaderNav(): React.JSX.Element {
   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <div className="flex items-center gap-2">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-1">
               <span className="text-sm font-medium">Settings</span>
            </div>
         </div>
      </div>
   );
}
