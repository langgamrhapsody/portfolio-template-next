import "../globals.css";
import { montserrat, raleway } from "../fonts";
import Sidebar from "@/components/navigations/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${montserrat.variable} `}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
