import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

export const metadata = {
  title: "Product Card Demo",
  description: "Responsive product card built with Next.js App Router and Tailwind CSS"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col items-center justify-center px-4">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
