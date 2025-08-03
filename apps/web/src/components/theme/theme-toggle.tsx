'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') {
      return <Sun className="h-5 w-5 text-yellow-500" />;
    }
    if (theme === 'dark') {
      return <Moon className="h-5 w-5 text-gray-300" />;
    }
    return <Monitor className="h-5 w-5 text-gray-500" />;
  };

  return (
    <button
      aria-label="Toggle theme"
      className="fixed right-8 bottom-8 rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      onClick={cycleTheme}
      type="button"
    >
      {getIcon()}
    </button>
  );
}
