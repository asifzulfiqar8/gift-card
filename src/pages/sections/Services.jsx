import React, { useState } from "react";
import sideImg from "../../assets/services-aside.png";
import NailSpaIcon from "../../assets/svgs/NailSpaIcon";
import NailExtension from "../../assets/svgs/NailExtension";
import NailTreatmentIcon from "../../assets/svgs/NailTreatmentIcon";
import productImg from "../../assets/manicure.png";

const tabs = [
  { id: 1, name: "Eyelash" },
  { id: 2, name: "Nails" },
  { id: 3, name: "Massage" },
  { id: 4, name: "Body" },
  { id: 5, name: "Face Treatment" },
  { id: 6, name: "Hair" },
  { id: 7, name: "Makeup Artist" },
];

const categories = {
  Nails: [
    {
      id: 1,
      categoryName: "Nails",
      name: "Nail Spa",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Manicure" },
        { id: 2, name: "Pedicure" },
        { id: 3, name: "Mani Pedi" },
      ],
    },
    {
      id: 2,
      categoryName: "Nail Extension",
      name: "Nail Extension",
      icon: <NailExtension />,
      subcategories: [
        { id: 1, name: "Acrylic" },
        { id: 2, name: "Hard Gel" },
        { id: 3, name: "Blab" },
        { id: 4, name: "Soft Gel Nails" },
      ],
    },
    {
      id: 3,
      categoryName: "Nail Treatment",
      name: "Nail Treatment",
      icon: <NailTreatmentIcon />,
      subcategories: [
        { id: 1, name: "Callus" },
        { id: 2, name: "Paraffin" },
        { id: 3, name: "Spa" },
      ],
    },
  ],
  Massage: [
    {
      id: 1,
      categoryName: "Body Massage",
      name: "Body Massage",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Swedish Massage" },
        { id: 2, name: "Deep Tissue" },
        { id: 3, name: "Aromatherapy" },
      ],
    },
    {
      id: 2,
      categoryName: "Foot Massage",
      name: "Foot Massage",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Reflexology" },
        { id: 2, name: "Foot Rub" },
      ],
    },
  ],
  Eyelash: [
    {
      id: 1,
      categoryName: "Lash Extensions",
      name: "Lash Extensions",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Classic Lashes" },
        { id: 2, name: "Volume Lashes" },
      ],
    },
    {
      id: 2,
      categoryName: "Lash Lifting",
      name: "Lash Lifting",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Keratin Lift" },
        { id: 2, name: "Silk Lift" },
      ],
    },
  ],
  Body: [
    {
      id: 1,
      categoryName: "Body Scrub",
      name: "Body Scrub",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Salt Scrub" },
        { id: 2, name: "Sugar Scrub" },
      ],
    },
  ],
  "Face Treatment": [
    {
      id: 1,
      categoryName: "Facial",
      name: "Facial",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Basic Facial" },
        { id: 2, name: "Anti-Aging Facial" },
      ],
    },
  ],
  Hair: [
    {
      id: 1,
      categoryName: "Haircut",
      name: "Haircut",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Men's Haircut" },
        { id: 2, name: "Women's Haircut" },
      ],
    },
    {
      id: 2,
      categoryName: "Hair Styling",
      name: "Hair Styling",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Blowout" },
        { id: 2, name: "Curling" },
      ],
    },
  ],
  "Makeup Artist": [
    {
      id: 1,
      categoryName: "Makeup Application",
      name: "Makeup Application",
      icon: <NailSpaIcon />,
      subcategories: [
        { id: 1, name: "Bridal Makeup" },
        { id: 2, name: "Evening Makeup" },
      ],
    },
  ],
};

// Products Data
const products = [
  {
    id: 1,
    category: "Nails",
    subcategory: "Manicure",
    name: "Manicure",
    price: "AED 80",
    duration: "60 Minutes",
    rating: "4.8 Stars",
    img: productImg,
    description: ["4.5+ Rated Beauticians", "Luxury Salon Experience"],
    tag: "Most Purchased",
  },
  {
    id: 2,
    category: "Nails",
    subcategory: "Pedicure",
    name: "Pedicure",
    price: "AED 85",
    duration: "45 Minutes",
    rating: "4.7 Stars",
    img: productImg,
    description: ["Premium Branded Products", "Urban Company Trust Marker"],
  },
  {
    id: 3,
    category: "Massage",
    subcategory: "Swedish Massage",
    name: "Swedish Massage",
    price: "AED 150",
    duration: "90 Minutes",
    rating: "4.9 Stars",
    img: productImg,
    description: ["Relaxing Experience", "Experienced Therapists"],
  },
  {
    id: 4,
    category: "Eyelash",
    subcategory: "Classic Lashes",
    name: "Classic Lash Extensions",
    price: "AED 200",
    duration: "120 Minutes",
    rating: "5.0 Stars",
    img: productImg,
    description: ["Long-Lasting", "Natural Look"],
  },
  {
    id: 5,
    category: "Body",
    subcategory: "Salt Scrub",
    name: "Salt Scrub",
    price: "AED 180",
    duration: "75 Minutes",
    rating: "4.8 Stars",
    img: productImg,
    description: ["Exfoliating Treatment", "Soft & Smooth Skin"],
  },
  {
    id: 6,
    category: "Face Treatment",
    subcategory: "Anti-Aging Facial",
    name: "Anti-Aging Facial",
    price: "AED 250",
    duration: "90 Minutes",
    rating: "5.0 Stars",
    img: productImg,
    description: ["Youthful Skin", "Premium Products"],
  },
  {
    id: 7,
    category: "Hair",
    subcategory: "Men's Haircut",
    name: "Men's Haircut",
    price: "AED 100",
    duration: "30 Minutes",
    rating: "4.7 Stars",
    img: productImg,
    description: ["Stylish Haircut", "Experienced Barber"],
  },
  {
    id: 8,
    category: "Makeup Artist",
    subcategory: "Bridal Makeup",
    name: "Bridal Makeup",
    price: "AED 500",
    duration: "120 Minutes",
    rating: "5.0 Stars",
    img: productImg,
    description: ["Professional Makeup", "Long-Lasting"],
  },
  // Add more products similarly for other categories and subcategories
];

const Services = () => {
  const [selectedTab, setSelectedTab] = useState("Nails");
  const [selectedCategory, setSelectedCategory] = useState("Nails");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const filteredProducts = products.filter(
    (product) =>
      product.category === selectedTab &&
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedSubcategory || product.subcategory === selectedSubcategory)
  );

  return (
    <div className="px-4 w-full">
      <div className="container mx-auto mt-4">
        <div className="bg-[#f8f9fb] py-6 md:py-8 px-8 rounded-2xl bg-[url('/src/assets/services-aside.png')] bg-no-repeat bg-contain bg-right">
          <p className="text-sm text-[#c78176]">Services</p>
          <h2 className="text-lg md:text-[34px] my-2">Nails Spa</h2>
          <p className="text-sm text-[#686868]">
            Home/Services/Nails/<span className="text-[#c78176]">Nail SPA</span>
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="py-4 md:py-6 flex flex-wrap items-center gap-2 sm:gap-4">
          {tabs.map((tab, id) => (
            <button
              key={tab.id}
              className={`relative py-2 sm:py-3 px-3 sm:px-6 md:px-8 rounded-full bg-[#f8f9fb] text-xs sm:text-sm ${
                selectedTab === tab.name
                  ? "text-[#000] before:absolute before:w-[40px] before:h-[2px] before:bg-[#d29ea2] before:left-1/2 before:-translate-x-1/2 before:bottom-0"
                  : "text-[#6c6c6c]"
              }`}
              onClick={() => {
                setSelectedTab(tab.name);
                setSelectedCategory(tab.name);
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 border-t border-[#f6e1dd]">
          <div className="col-span-12 lg:col-span-3 pt-4 md:pt-6">
            <div className="flex flex-col gap-4">
              {categories[selectedTab]?.map((category) => (
                <div key={category.id}>
                  <div
                    className={`flex items-center justify-between px-4 py-2 cursor-pointer transition-all duration-200 ${
                      selectedCategory === category.categoryName
                        ? "bg-[#fbf4f3] border-l-[6px] border-[#efd2ce]"
                        : "bg-transparent"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category.categoryName);
                      setSelectedSubcategory(null);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div>{category.icon}</div>
                      <p className="text-[#000] text-sm md:text-base">
                        {category.name}
                      </p>
                    </div>
                    <div className="mr-4">
                      <ChevronRightIcon />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-[3.7rem] mt-2">
                    {category.subcategories.map((subcategorie) => (
                      <p
                        key={subcategorie.id}
                        className={`text-sm md:text-[15px] cursor-pointer ${
                          selectedSubcategory === subcategorie.name
                            ? "text-[#000]"
                            : "text-[#00000080]"
                        }`}
                        onClick={() => {
                          setSelectedSubcategory(subcategorie.name);
                          setSelectedCategory(category.categoryName);
                        }}
                      >
                        {subcategorie.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 pl-4 md:pl-6 pt-4 md:pt-6 border-l border-[#f6e1dd]">
            <div className="flex flex-col gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-wrap justify-between gap-4 border-b border-[#f6e1dd] pb-4"
                  >
                    <div className="flex flex-wrap justify-between gap-4">
                      <div>
                        <div className="relative">
                          <img
                            src={product.img}
                            alt="product image"
                            className="w-[150px] h-[150px] rounded-lg object-cover"
                          />
                          <div className="w-[80px] h-[28px] rounded-md flex items-center justify-center gap-1 absolute bottom-[6px] left-[6px] bg-white">
                            <ReviewStar />
                            <p className="text-xs text-[#363636]">
                              {product.rating}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[9px] font-medium text-[#088e21] uppercase">
                          Most Purchased
                        </p>
                        <p className="py-1 text-sm md:text-base">
                          {product.name}
                        </p>
                        <div className="flex items-center gap-2 border-b border-dashed border-[#e5e5e5] pb-2">
                          <p className="text-xs text-[#000]">
                            Starts at{" "}
                            <span className="font-semibold">
                              {product.price}
                            </span>
                          </p>
                          <div className="h-[14] w-[2px] bg-[#cccccc]"></div>
                          <p className="text-xs text-[#000] flex items-center gap-1">
                            <TimeIcon />
                            <span className="font-semibold">
                              {product.duration}
                            </span>
                            Minutes
                          </p>
                        </div>
                        {product.description.map((duration, i) => (
                          <div key={i} className="my-2 flex items-center gap-2">
                            <ArrowIcon />
                            <p className="text-xs">{duration}</p>
                          </div>
                        ))}
                        <a href="/" className="text-[#aa6e6c] text-[13px]">
                          View Details
                        </a>
                      </div>
                    </div>
                    <div>
                      <button className="text-sm bg-[#f6e1dd] hover:bg-gradient-to-r hover:from-[#df988d] hover:to-[#a15d59] py-[10px] px-5 rounded-full text-[#a66460] hover:text-white transition-all duration-200">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-sm text-[#707979]">
                  No Products available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const ChevronRightIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0688 8.50431L7.02905 1.46462L8.49465 -0.000976562L17 8.50431L8.49465 17.0096L7.02905 15.544L14.0688 8.50431Z"
          fill="#e5c1bc"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.33268 8.50431L0.292969 1.46462L1.75857 -0.000976562L10.2639 8.50431L1.75857 17.0096L0.292969 15.544L7.33268 8.50431Z"
          fill="#f4e3e1"
          fillOpacity="0.298039"
        />
      </g>
    </svg>
  );
};

const ReviewStar = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.134 3.13401 0 7 0C10.866 0 14 3.134 14 7Z"
        fill="#e29a8f"
      />
      <path
        d="M7 3L7.94427 6.05573H11L8.52786 7.94427L9.47214 11L7 9.11146L4.52786 11L5.47214 7.94427L3 6.05573H6.05573L7 3Z"
        fill="white"
      />
    </svg>
  );
};

const TimeIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 7.5C13 10.5358 10.5358 13 7.5 13V14.5C11.3642 14.5 14.5 11.3642 14.5 7.5H13ZM7.5 13C4.46421 13 2 10.5358 2 7.5H0.5C0.5 11.3642 3.63579 14.5 7.5 14.5V13ZM2 7.5C2 4.4642 4.46421 2 7.5 2V0.5C3.63579 0.5 0.5 3.6358 0.5 7.5H2ZM7.5 2C10.5358 2 13 4.4642 13 7.5H14.5C14.5 3.6358 11.3642 0.5 7.5 0.5V2Z"
        fill="#0A0A0A"
      />
      <path
        d="M9.4347 10.1277C9.79039 10.34 10.2508 10.2237 10.4631 9.86803C10.6753 9.51234 10.5591 9.05192 10.2034 8.83965L9.4347 10.1277ZM7.88154 8.32744L8.26589 7.6834L8.26389 7.68222L7.88154 8.32744ZM8.01904 4.68994C8.01904 4.27572 7.68326 3.93994 7.26904 3.93994C6.85483 3.93994 6.51904 4.27572 6.51904 4.68994H8.01904ZM10.2034 8.83965L8.26589 7.6834L7.4972 8.97147L9.4347 10.1277L10.2034 8.83965ZM8.26389 7.68222C8.23379 7.66438 8.16407 7.60299 8.10023 7.49105C8.03643 7.37916 8.01904 7.28786 8.01904 7.25243H6.51904C6.51904 7.61076 6.63916 7.95696 6.79723 8.23413C6.95526 8.51126 7.19179 8.79049 7.49919 8.97265L8.26389 7.68222ZM8.01904 7.25243V4.68994H6.51904V7.25243H8.01904Z"
        fill="#0A0A0A"
      />
    </svg>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.77699 8.99991L5.01136 8.24423L8.16335 5.09224H0V3.99849H8.16335L5.01136 0.85645L5.77699 0.0908203L10.2315 4.54537L5.77699 8.99991Z"
        fill="#363636"
      />
    </svg>
  );
};
