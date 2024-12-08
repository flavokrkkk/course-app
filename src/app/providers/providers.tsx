"use client";

import { ComposeChildren } from "@/shared/lib/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ComposeChildren>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      />
      {children}
    </ComposeChildren>
  );
};

export default Providers;
