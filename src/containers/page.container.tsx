import React, { ReactNode } from "react";
import FooterPage from "@/components/footer.component";
import Head from "next/head";
import { useRouter } from "next/router";
import { TbLogin2 } from "react-icons/tb";

interface PageContainerProps {
  children: ReactNode;
}

// px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28  2xl:px-40

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className="font-poppins">
        {/* <HeaderPage /> */}
        <div className="flex justify-between items-center px-3 container mx-auto">
          <p className="text-3xl my-5 font-bold font-philosopher bg-gradient-to-r from-premium to-white bg-clip-text text-transparent">
            Girls Beauty Store
          </p>
          <div>
            <a href="https://girls-beauty-admin.vercel.app" target="_blank">
              <TbLogin2 size={32} className="text-premium" />
            </a>
          </div>
        </div>
        <div className="min-h-screen text-white">{children}</div>
        <FooterPage />
      </div>
    </>
  );
};

export default PageContainer;
