// FilterPopup.tsx
import React from "react";
import { CategoryListI } from "@/interfaces/category.interface";
import { Checkbox, Typography } from "@material-tailwind/react";
import { IoFilter } from "react-icons/io5";

interface FilterPopupProps {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  category: CategoryListI[];
  handleCategoryChange: (categoryName: string, isChecked: boolean) => void;
  selectedCategory: string | null;
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  openPopup,
  setOpenPopup,
  category,
  handleCategoryChange,
  selectedCategory,
}) => {
  const handleClick = () => {
    setOpenPopup(!openPopup);
  };

  if (!openPopup) {
    return null;
  }

  return (
    <>
      <div onClick={handleClick}>
        <div className="fixed inset-0 bg-black opacity-50 z-10 md:hidden" />
        <div className="fixed inset-0 flex items-end justify-center md:items-center z-20 md:hidden">
          <div className="bg-dark rounded-t-3xl md:rounded-2xl h-1/2 w-full md:w-3/4 lg:w-1/2 p-3">
            <div className="h-full">
              <div className="md:flex list-none flex-col font-poppins text-sm font-normal leading-5 text-premium">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                  <div className="col-span-1 lg:col-span-2 text-lg font-bold font-philosopher bg-gradient-to-r from-premium to-white bg-clip-text text-transparent text-center flex items-center justify-center gap-1">
                    <IoFilter className="text-premium" size={20} />
                    Filter
                  </div>
                  <div className="col-span-1 lg:col-span-2 lg:px-4 relative">
                    <div className="flex flex-row flex-wrap gap-3">
                      {category?.map((item, i) => {
                        return (
                          <div
                            className="pe-3 font-philosopher bg-gradient-to-r from-premium to-second rounded-2xl w-fit"
                            key={i}
                          >
                            <Checkbox
                              label={
                                <Typography className="text-white text-xs p-0 m-0 font-semibold">
                                  {item.name}
                                </Typography>
                              }
                              checked={selectedCategory === item.name}
                              onChange={(e) =>
                                handleCategoryChange(
                                  item.name,
                                  e.target.checked
                                )
                              }
                              className="border-white h-4 w-4 p-0 m-0"
                              key={i}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPopup;
