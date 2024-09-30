import React from "react";
import girlImage from "../../assets/girl-img.png";

const WeOffer = () => {
  return (
    <div className="container mx-auto px-4 py-[30px] md:py-[60px] grid grid-cols-21 md:grid-cols-12 gap-4 md:gap-8">
      <div className="col-span-12 md:col-span-5">
        <img
          src={girlImage}
          alt=""
          className="w-full max-h-[580px] h-full object-cover rounded-[25px]"
        />
      </div>
      <div className="col-span-12 md:col-span-7">
        <p className="text-[28px] lg:text-[41px] text-[#000]">
          We offer the <span className="text-[#c07858]">finest nails</span> spa
          home service finest nails
        </p>
        <p className="mt-4 md:mt-6 text-sm text-[#363636B2]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          repudiandae expedita facere voluptas, quis omnis assumenda placeat
          odio impedit reiciendis, aspernatur cumque fugit quibusdam eum! Quas,
          asperiores. Mollitia, temporibus ullam illo ad sapiente iste sunt
          porro dolorem dolor vel quo quasi suscipit repellat laboriosam aperiam
          eaque, culpa molestiae eum ducimus velit quibusdam voluptate
          blanditiis dicta. Illo adipisci tempore esse deserunt perferendis,
          odit dolor, sit aspernatur quae autem doloremque porro fugit.
        </p>
        <p className="text-[28px] lg:text-[41px] text-[#000]">
          Nail Spa home services Duba
        </p>
        <p className="mt-4 md:mt-6 text-sm text-[#363636B2]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          repudiandae expedita facere voluptas, quis omnis assumenda placeat
          odio impedit reiciendis, aspernatur cumque fugit quibusdam eum! Quas,
          asperiores. Mollitia, temporibus ullam illo ad sapiente iste sunt
          porro dolorem dolor vel quo quasi suscipit repellat laboriosam aperiam
          eaque, culpa molestiae eum ducimus velit quibusdam voluptate
          blanditiis dicta. Illo adipisci tempore esse deserunt perferendis,
          odit dolor, sit aspernatur quae autem doloremque porro fugit. <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad
          quia obcaecati culpa. Enim ut quia doloremque possimus veniam
          nesciunt. <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          excepturi et molestiae earum quos soluta.
        </p>
      </div>
    </div>
  );
};

export default WeOffer;
