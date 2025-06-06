'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, Upload, Calendar } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: 'Notes', href: '/meetings', icon: Calendar },
    { name: 'Upload', href: '/upload', icon: Upload },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r">
      <div className="flex h-16 items-center justify-center border-b">
        <img src="/memopilot-bg.png" alt="memopilot-logo" className="h-10 w-auto" />
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
                  ? 'bg-rose-50 text-rose-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0
                  ${isActive ? 'text-rose-500' : 'text-gray-400 group-hover:text-gray-500'}`}
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
