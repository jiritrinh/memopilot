'use client';

import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="h-16 bg-[#0A0F1C] border-b border-gray-800 flex items-center justify-end px-6">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-3 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#1bd586] flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="text-gray-300">User Name</span>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#0A0F1C] border border-gray-800">
            <div className="py-1">
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                onClick={() => {/* Handle profile settings */}}
              >
                <User className="w-4 h-4 mr-2" />
                Profile Settings
              </button>
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                onClick={() => {/* Handle account preferences */}}
              >
                <Settings className="w-4 h-4 mr-2" />
                Account Preferences
              </button>
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-800"
                onClick={() => {/* Handle logout */}}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 