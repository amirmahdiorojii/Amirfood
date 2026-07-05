import "./globals.css";

import MainLayout from "@/components/layout/MainLayout"

export const metadata = {
  title: "Project Car",
  description: "Car Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="ltr">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
