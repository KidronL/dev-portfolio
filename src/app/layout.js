import "./globals.css";

export const metadata = {
  title: "Kidron Lightfoot",
  description: "Kidron Lightfoot Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
