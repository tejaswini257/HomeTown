import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { WishlistProvider } from "./context/WishlistContext";

export const metadata = {
  title: "My Store",
  description: "Furniture shopping site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <WishlistProvider>
          <Navbar />       {/* 👈 Always on top */}
          {children}       {/* 👈 Page content goes here */}
          <Footer />       {/* 👈 Always at bottom */}
        </WishlistProvider>
      </body>
    </html>
  );
}
