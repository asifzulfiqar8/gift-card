import React from "react";
import blogImage1 from "../../assets/blog-1.png";
import blogImage2 from "../../assets/blog-2.png";

const FeaturedPost = () => {
  return (
    <div className="px-4">
      <div className="container mx-auto rounded-[25px] md:rounded-[35px] px-4 bg-[#fbf0ee] pt-8 pb-16 md:pt-[50px] md:pb-[120px]">
        <h3 className="text-[28px] lg:text-[41px] text-[#000] text-center">
          Featured Posts
        </h3>
        <div
          className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6 w-full md:w-[85%] mx-auto"
          style={{ rowGap: "6rem" }}
        >
          <BlogItem
            img={blogImage1}
            title="The Difference Between Gel Nails and Acrylic Nail Extensions"
            userName="NAILS"
            date="Jul 12, 2020"
          />
          <BlogItem
            img={blogImage2}
            title="The Difference Between Gel Nails and Acrylic Nail Extensions"
            userName="NAILS"
            date="Jul 12, 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;

const BlogItem = ({ img, title, userName, date }) => {
  return (
    <div className="relative h-[261px] w-full">
      <img
        src={img}
        alt="blog-image"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute bottom-[-60px] right-0 bg-[#b07876] rounded-2xl p-4 md:p-6 lg:p-8 w-[94%]">
        <h6 className="text-base md:text-xl text-white md:leading-[23px]">
          {title}
        </h6>
        <div className="flex items-center gap-4 md:gap-8 mt-2">
          <p className="text-sm text-white">{userName}</p>
          <p className="text-[10px] text-white">{date}</p>
        </div>
      </div>
    </div>
  );
};
