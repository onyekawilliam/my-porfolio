import React from "react";

export default function Featuredsection() {
  return (
    <div>
      <h1 className="text-center md:mx-44 py-6">Featured Works</h1>

      {/* Per work container */}
      <div className="flex flex-col md:flex-row items-center mx-4 md:mx-44 my-6">
        {/* Image */}
        <div>
          <img
            src="/public/images/Rectangle 30.jpg"
            alt="work image"
            className="w-full md:w-[400px] h-auto"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-6">
          <h1 className="font-bold text-[20px]">Designing Dashboards</h1>
          <button className="bg-blue-950 rounded-lg mt-2 mb-2 text-white font-bold px-4 py-1">
            2020
          </button>
          <span className="text-gray-400">Dashboard</span>
          <p className="mx-4 md:mx-0 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-4 md:mx-44" />

      {/* Per work container */}
      <div className="flex flex-col md:flex-row items-center mx-4 md:mx-44 my-6">
        {/* Image */}
        <div>
          <img
            src="/public/images/Rectangle 32.jpg"
            alt="work image"
            className="w-full md:w-[400px] h-auto"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-6">
          <h1 className="font-bold text-[20px]">Vibrant Portraits of 2020</h1>
          <button className="bg-blue-950 rounded-lg mt-2 mb-2 text-white font-bold px-4 py-1">
            2018
          </button>
          <span className="text-gray-400">Illustration</span>
          <p className="mx-4 md:mx-0 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-4 md:mx-44" />

      {/* Per work container */}
      <div className="flex flex-col md:flex-row items-center mx-4 md:mx-44 my-6">
        {/* Image */}
        <div>
          <img
            src="/public/images/Rectangle 34.jpg"
            alt="work image"
            className="w-full md:w-[400px] h-auto"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-6">
          <h1 className="font-bold text-[20px]">36 Days of Malayalam Type</h1>
          <button className="bg-blue-950 rounded-lg mt-2 mb-2 text-white font-bold px-4 py-1">
            2018
          </button>
          <span className="text-gray-400">Illustration</span>
          <p className="mx-4 md:mx-0 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-4 md:mx-44" />
    </div>
  );
}
