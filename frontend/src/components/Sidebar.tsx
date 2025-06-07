'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, Upload, Calendar } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: 'Meetings', href: '/meetings', icon: Calendar },
    { name: 'Upload', href: '/upload', icon: Upload },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-[#0A0F1C] border-r border-gray-800">
      <div className="flex h-16 items-center justify-center border-b border-gray-800">
        <img src="/logomemepilot.png" alt="memopilot-logo" className="h-12 w-auto" />
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full
                ${isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0
                  ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                aria-hidden="true"
              />
              {item.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
