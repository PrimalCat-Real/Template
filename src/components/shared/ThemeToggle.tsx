"use client";

import { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Bold, Moon, Sun } from "lucide-react";
import { Toggle } from "../ui/toggle";

export interface ThemeSwitchProps {
  className?: string;
}


export const ThemeSwitch: FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isDark, setIsDark] = useState(false); // Начальное состояние устанавливается как false
  const [mounted, setMounted] = useState(false); // Для отслеживания монтажа компонента

  // Активировать рендеринг только после монтажа компонента
  useEffect(() => {
    setIsDark(theme === "dark" || (theme === "system" && systemTheme === "dark"));
    setMounted(true); // Помечаем, что компонент смонтирован
  }, [theme, systemTheme]);

  if (!mounted) {
    return null; // Или возвращайте плейсхолдер, если нужен предзагрузочный UI
  }

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
      <>
          <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
          </Toggle>
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                      <span className="sr-only">Toggle theme</span>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme('light')}>
                      Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>
                      Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>
                      System
                  </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
      </>
  )
};