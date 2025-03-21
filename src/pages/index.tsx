import React, { useEffect, useState } from "react";
import PageContainer from "@/containers/page.container";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import Pagination from "@/components/atomic/pagination";
import CatalogCardPage from "@/components/catalog/catalog-card-page.component";
import { Checkbox, Typography } from "@material-tailwind/react";
import SearchCatalog from "@/components/atomic/search-catalog";
import { FaArrowDownAZ, FaArrowUpAZ } from "react-icons/fa6";
import { toast } from "react-toastify";
import { listProductFilter } from "@/api/catalog.api";
import { categoryList } from "@/api/category.api";
import {
  CatalogParamsI,
  FilterCatalogResI,
} from "@/interfaces/catalog-card.interface";
import { CategoryListI } from "@/interfaces/category.interface";
import Loading from "@/components/atomic/loading";
import Banner from "../assets/images/verata-room.jpg";
import Image from "next/image";
import Head from "next/head";
import FilterPopup from "@/components/atomic/filter-popup";
import { IoFilter } from "react-icons/io5";

const CatalogPage: React.FC = () => {
  const [openFilterCategory, setOpenFilterCategory] = useState<boolean>(true);
  const [openFilterPopup, setOpenFilterPopup] = useState<boolean>(false);
  const [openFilterList, setOpenFilterList] = useState<boolean>(false);
  const [filterOrderList, setFilterOrderList] = useState<boolean>(false);
  const [params, setParams] = useState<CatalogParamsI>({
    limit: 12,
    page: 1,
    search: "",
    searchby: "product",
    sortby: "created_at",
    sort: filterOrderList ? "ASC" : "DESC",
  });
  const [products, setProducts] = useState<FilterCatalogResI | undefined>(
    undefined
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const [category, setCategory] = useState<CategoryListI[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchDataProduct = async () => {
    try {
      const response = await listProductFilter(params);
      setProducts(response?.data);
      const category = await categoryList();
      setCategory(category?.data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, [params]);

  const handlePageChange = (newPage: number) => {
    setParams((prev) => ({ ...prev, page: newPage }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setParams((prev) => ({ ...prev, search: searchInput, page: 1 })); // reset to first page
    }
  };
  const handleSortToggle = () => {
    setFilterOrderList((prev) => !prev);
    setParams((prev) => ({
      ...prev,
      sort: openFilterList ? "ASC" : "DESC",
    }));
  };

  const handleCategoryChange = (categoryName: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategory(categoryName);
      setParams((prev) => ({
        ...prev,
        searchby: "category",
        search: categoryName,
        page: 1,
      }));
    } else {
      setSelectedCategory(null);
      setParams((prev) => ({
        ...prev,
        searchby: "product",
        search: "",
        page: 1,
      }));
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading className="py-10" color="border-t-premium" />
        </div>
      ) : (
        <>
          <Head>
            <title>Girls Beauty Store</title>
          </Head>
          <PageContainer>
            <div className="px-3 container mx-auto mb-5">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={Banner}
                  width={10000}
                  height={10000}
                  alt="banner"
                  className="w-full object-cover sm:h-60"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-5 container mx-auto relative px-3">
              <div className="hidden md:flex flex-col col-span-1 lg:col-span-2 w-full gap-5">
                <div
                  className="w-full flex justify-between items-center text-premium bg-dark p-5 rounded-xl cursor-pointer"
                  onClick={() => {
                    setOpenFilterCategory(!openFilterCategory);
                  }}
                >
                  <div className="text-lg font-bold font-philosopher bg-gradient-to-r from-premium  to-white bg-clip-text text-transparent">
                    Filter
                  </div>
                  {openFilterCategory ? (
                    <IoIosArrowDropup size={30} className="text-premium" />
                  ) : (
                    <IoIosArrowDropdown size={30} className="text-premium" />
                  )}
                </div>
                <div
                  className={`w-full flex flex-row flex-wrap gap-2 rounded-xl transition-transform duration-1000 ease-in-out ${
                    openFilterCategory
                      ? "h-auto opacity-100 translate-y-0"
                      : "h-0 opacity-0 translate-y-[-30px]"
                  } overflow-hidden bg-dark p-5`}
                >
                  {category?.map((item, i) => {
                    return (
                      <div
                        className="pe-3 font-philosopher bg-gradient-to-r from-premium to-second rounded-2xl flex-grow md:w-full"
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
                            handleCategoryChange(item.name, e.target.checked)
                          }
                          className="border-white h-4 w-4 p-0 m-0"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-5 flex flex-col w-full gap-5">
                <div className=" w-full flex justify-between items-center text-premium relative p-5 bg-dark rounded-xl gap-3">
                  <div className="text-lg font-bold font-philosopher bg-gradient-to-r from-premium to-white bg-clip-text text-transparent">
                    Catalogs
                  </div>
                  <button
                    className="w-fit float-start py-1 px-3 rounded-xl bg-dark flex md:hidden items-center gap-1"
                    onClick={() => {
                      setOpenFilterPopup(!openFilterPopup);
                    }}
                  >
                    <IoFilter className="text-premium" size={20} />
                    <span className="text-lg font-bold font-philosopher bg-gradient-to-r from-premium to-white bg-clip-text text-transparent">
                      Filter
                    </span>
                  </button>
                  <div
                    onClick={() => {
                      setSelectedCategory(null);
                      setParams((prev) => ({
                        ...prev,
                        searchby: "product",
                        search: "",
                      }));
                    }}
                    className="w-1/2"
                  >
                    <SearchCatalog
                      onChange={handleSearchChange}
                      onKeyDown={handleSearchKeyDown}
                    />
                  </div>

                  <div
                    className="flex flex-row items-center text-premium cursor-pointer"
                    onClick={() => {
                      setOpenFilterList(!openFilterList);
                      handleSortToggle();
                    }}
                  >
                    {openFilterList ? (
                      <FaArrowUpAZ size={20} />
                    ) : (
                      <FaArrowDownAZ size={20} />
                    )}
                  </div>
                </div>
                {products && products?.list?.length > 0 ? (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-5 bg-dark rounded-xl">
                    {products?.list?.map((item, i) => {
                      return (
                        <CatalogCardPage
                          product={item.product}
                          key={i}
                          image={item.image}
                          disc={item.disc}
                          price={item.price}
                          stock={item.stock}
                          id={item.id}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-2xl text-premium flex justify-center items-center my-32 h-full font-semibold">
                    <div>Available soon...</div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 mb-20 flex justify-center items-center">
              <Pagination
                totalPage={products?.pagination?.totalPage || 1}
                pageNow={params.page}
                onPageChange={handlePageChange}
              />
            </div>
          </PageContainer>
          <FilterPopup
            category={category || []}
            openPopup={openFilterPopup}
            setOpenPopup={setOpenFilterPopup}
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </>
      )}
    </>
  );
};

export default CatalogPage;