import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <Sun
        className={cn(
          "size-4 rotate-0 scale-100 transition-all",
          isDark && "rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "absolute size-4 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all",
          "left-1/2 top-1/2",
          isDark && "rotate-0 scale-100"
        )}
      />
      <span className="sr-only">
        {isDark ? "Switch to light theme" : "Switch to dark theme"}
      </span>
    </Button>
  )
}
