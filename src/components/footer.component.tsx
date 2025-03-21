import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const FooterPage: React.FC = () => {
  return (
    <div className="bg-premium px-5 rounded-t-3xl relative">
      <div className="text-main grid grid-cols-2 md:grid-cols-4 gap-5 pt-14 pb-20 container mx-auto">
        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
          <div className="text-lg md:text-base font-bold">ABOUT</div>
          <div className="text-sm">Girls Beauty Store adalah Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis dicta sit doloribus velit dignissimos repellat amet repudiandae repellendus dolor. Voluptas optio quod quam facilis vero itaque nisi perspiciatis provident dolores!</div>
          <div className="font-bold text-lg md:text-base">SHOWROOM</div>
          <div>
            <div className="text-sm break-words">Indonesia, Asia Tenggara</div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="font-bold text-lg md:text-base">INFORMATION</div>
          <div>
            <div className="text-sm">Products</div>
            <div className="text-sm">Careers</div>
            <div className="text-sm">FAQs</div>
            <div className="text-sm">Licensing Law</div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="font-bold text-lg md:text-base">BUSINESS</div>
          <div className="text-sm">
            <p className="break-words">081xxx</p>
            <p className="break-words">gmail.com</p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="font-bold text-lg md:text-base">FOLLOW US</div>
            <div className="flex flex-row gap-5">
              <FaSquareInstagram size={25} />
              <FaSquareFacebook size={25} />
              <FaSquareXTwitter size={25} />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2 col-span-2 md:col-span-1">
          {/* <!-- Additional external resources --> */}
          <div className="font-bold text-lg md:text-base">USEFUL RESOURCES</div>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit eaque reprehenderit doloremque ea dicta recusandae enim distinctio, quisquam, odio illo iure atque placeat quaerat iusto ullam? Asperiores, quam enim!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptate quae quibusdam molestias illo eveniet, quis asperiores. Aperiam harum nobis quidem voluptatem sunt consequuntur, atque nemo! Beatae nesciunt sed provident.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-sm items-center py-5 font-medium">
        <span>
          &#169; 2025 by <strong>Girls Beauty Store</strong>. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default FooterPage;
