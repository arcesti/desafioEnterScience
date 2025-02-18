import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from "@/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
