import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  return (
    <Link href={`http://localhost:3000/instrument/${result.id}`}>
      <div
        ref={ref}
        className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      >
        <Image
          src={`${result.pictureURL}`}
          layout="responsive"
          height={1080}
          width={1920}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{result.overview}</p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {result.name}
          </h2>
          <p className="flex items-center opacity-0  group-hover:opacity-100">
            {result.description}
          </p>
        </div>
      </div>
    </Link>
  );
});

export default Thumbnail;
