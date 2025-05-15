import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  category:string,
  image:string
};

export default function CategoryCard({category, image}:CategoryCardProps) {
  return (
    <>
      <div className=" flex flex-col transform transition duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
        {/* Category Image */}
        <div className="relative w-[336px] h-[195px] rounded-es-[20px] rounded-ee-[20px] rounded-tl-[40px] rounded-tr-[40px]  ">
          <img
            src= {image}
            alt="EventImage"
            className="object-cover"
          />
        </div>

        <Link to={`/events/${category}`} className=" w-[341px] h-[93px] bg-[#1D2134] text-white rounded-[20px] mt-[-10px] relative flex justify-between items-center">
          {/* data of the category */}
          <div className="  ms-8">
            <h3 className=" text-[20px] font-medium ">{category}</h3>
          </div>

          <div className=" me-8">
            <MoveRight size={35} />
          </div>
        </Link>
      </div>
    </>
  );
}
