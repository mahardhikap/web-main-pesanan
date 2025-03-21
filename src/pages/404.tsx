import React from "react";
import PageContainer from "@/containers/page.container";
import { AiFillAlert } from "react-icons/ai";

const ErrorPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="flex flex-col justify-center items-center text-3xl text-premium font-bold h-screen">
        <AiFillAlert size={70}/>
        <p className="text-center w-full lg:w-2/3">Oops! The page you’re looking for could not be found.</p>
        <p className="text-base text-center w-full lg:w-4/5">It seems the URL may be incorrect, or the page has been moved. Please check the link or return to our homepage.</p>
      </div>
    </PageContainer>
  );
};

export default ErrorPage;
