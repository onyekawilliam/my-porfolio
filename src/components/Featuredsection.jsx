import React from "react";

export default function Featuredsection() {
  return (
    <div>
      <h1 className="text-center md:mx-44 py-6">Featured Works</h1>

      {/* Per work container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mx-6 md:mx-44 my-6">
        <div>
          <img
            src="/public/images/Rectangle 30.jpg"
            alt="work image"
            className="w-[400px] h-[160px]"
          />
        </div>
        <div>
          <h1 className="font-bold text-[20px] px-0 md:px-6">
            Designing Dashboards
          </h1>
          <button className="bg-blue-950 rounded-lg px-2 py-1 text-white font-bold mx-0 md:mx-6 my-4">
            2020
          </button>
          <span className="block md:inline text-gray-400">Dashboard</span>
          <p className="px-0 md:px-6 py-2 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-6 md:mx-44" />

      {/* Per work container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mx-6 md:mx-44 my-6">
        <div>
          <img
            src="/public/images/Rectangle 32.jpg"
            alt="work image"
            className="w-[400px] h-[160px]"
          />
        </div>
        <div>
          <h1 className="font-bold text-[20px] px-0 md:px-6">
            Vibrant Portraits of 2020
          </h1>
          <button className="bg-blue-950 rounded-lg px-2 py-1 text-white font-bold mx-0 md:mx-6 my-4">
            2018
          </button>
          <span className="block md:inline text-gray-400">Illustration</span>
          <p className="px-0 md:px-6 py-2 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-6 md:mx-44" />

      {/* Per work container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mx-6 md:mx-44 my-6">
        <div>
          <img
            src="/public/images/Rectangle 34.jpg"
            alt="work image"
            className="w-[400px] h-[160px]"
          />
        </div>
        <div>
          <h1 className="font-bold text-[20px] px-0 md:px-6">
            36 Days of Malayalam type
          </h1>
          <button className="bg-blue-950 rounded-lg px-2 py-1 text-white font-bold mx-0 md:mx-6 my-4">
            2018
          </button>
          <span className="block md:inline text-gray-400">Illustration</span>
          <p className="px-0 md:px-6 py-2 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300 mx-6 md:mx-44" />
    </div>
  );
}
