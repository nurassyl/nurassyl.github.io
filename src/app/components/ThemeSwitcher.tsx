// Theme switcher component with light/dark modes
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch and set initial theme based on system preference
  useEffect(() => {
    setMounted(true);

    // On first load, if no theme is set, use system preference
    if (!theme) {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  );
}