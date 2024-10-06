"use client";

import { Menu, useMantineColorScheme } from "@mantine/core";
import { SunMoon, Moon } from "lucide-react";

export function ColorSchemesSwitcher() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        {colorScheme === "dark" ? (
          <Moon
            size={30}
            className="cursor-pointer p-1 dark:text-white text-zinc-600 dark:bg-neutral-500 bg-neutral-100  rounded-full"
          />
        ) : (
          <SunMoon
            className="dark:text-white p-1 text-zinc-600 dark:bg-neutral-500 bg-neutral-100  rounded-full"
            size={30}
          />
        )}
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Tema</Menu.Label>
        <Menu.Item
          onClick={() => setColorScheme("light")}
          leftSection={<SunMoon size={14} />}
        >
          Claro
        </Menu.Item>
        <Menu.Item
          onClick={() => setColorScheme("dark")}
          leftSection={<Moon size={14} />}
        >
          Escuro
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
