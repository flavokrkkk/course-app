"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/shared/ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown";

export function ToggleTheme() {
  const { setTheme } = useTheme();
  const handleLightTheme = () => setTheme("light");
  const handleDarkTheme = () => setTheme("dark");
  const handleSystemTheme = () => setTheme("system");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Переключатель темы</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleLightTheme}>Светлая</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDarkTheme}>Тёмная</DropdownMenuItem>
        <DropdownMenuItem onClick={handleSystemTheme}>
          Системная
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
