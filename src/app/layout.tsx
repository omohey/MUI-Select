import type { Metadata } from "next";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';


export const metadata: Metadata = {
  title: "MUI Select",
  description: "Using MUI library for select component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
