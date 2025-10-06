// app/(main)/layout.tsx

import MyHeader from "@/app/components/header";
import MyFooter from "@/app/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MyHeader />
      <main>{children}</main>
      <MyFooter />
    </>
  );
}
