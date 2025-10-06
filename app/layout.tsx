import MyFooter from "@/app/components/footer";
import MyHeader from "@/app/components/header";
import { Inter, Poppins } from "next/font/google";

// 2. Cấu hình font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Tạo biến CSS cho font Inter
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-poppins", // Tạo biến CSS cho font Poppins
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="vi" className={`${inter.variable} ${poppins.variable}`}>
        <body>
          <MyHeader />
          {children}
          <MyFooter />
        </body>
      </html>
    </>
  );
}
