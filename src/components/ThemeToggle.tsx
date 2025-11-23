import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-16 h-8 rounded-full flex items-center transition-colors duration-300
        ${isDark ? "bg-primary/80" : "bg-gray-300"}
      `}
    >
      {/* Sun icon - left side */}
      <Sun
        className={`
          absolute left-2 h-4 w-4 z-10 transition-opacity duration-300
          ${isDark ? "opacity-0 text-white" : "opacity-100 text-black"}
        `}
      />

      {/* Moon icon - right side */}
      <Moon
        className={`
          absolute right-2 h-4 w-4 z-10 transition-opacity duration-300
          ${isDark ? "opacity-100 text-black" : "opacity-0 text-black"}
        `}
      />

      {/* Knob */}
      <span
        className={`
          absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300
          ${isDark ? "left-9" : "left-1"}
        `}
      />
    </button>
  );
};

export default ThemeToggle;
