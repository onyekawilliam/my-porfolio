import React from "react";

export default function Featuredsection() {
  return (
    <div>
      <h1 className="mx-44 py-6">Featured Works</h1>
      {/*per work container */}
      <div className="flex mx-44">
        <div>
          <img
            src="/public/images/Rectangle 30.jpg"
            alt="work image"
            className="w-[400px] h-[160px]"
          />
        </div>
        <div>
          <h1 className="font-bold text-[20px] px-6">Designing Dashboards</h1>
          <button className="bg-blue-950 rounded-lg mx-6 my-4 text-white font-bold px-1">
            2020
          </button>
          <span className="my-0 text-gray-400">Dashboard</span>
          <p className="mx-6 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className=" my-4 border-t border-gray-300 mx-44" />
      {/*per work container */}
      <div className="flex mx-44 my-6">
        <div>
          <img
            src="/public/images/Rectangle 32.jpg"
            alt="work image"
            className="w-[400px] h-[160px]"
          />
        </div>
        <div>
          <h1 className="font-bold text-[20px] px-6">
            Vibrant Portraits of 2020
          </h1>
          <button className="bg-blue-950 rounded-lg mx-6 my-4 text-white font-bold px-1">
            2018
          </button>
          <span className="my-0 text-gray-400">Illustration</span>
          <p className="mx-6 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className=" my-4 border-t border-gray-300 mx-44" />
      {/*per work container */}
      <div className="flex mx-44 my-6">
        <div>
          <img
            src="/public/images/Rectangle 34.jpg"
            alt="work image"
            className="w-[400px] h-[160px]"
          />
        </div>
        <div>
          <h1 className="font-bold text-[20px] px-6">
            36 Days of Malayalam type
          </h1>
          <button className="bg-blue-950 rounded-lg mx-6 my-4 text-white font-bold px-1">
            2018
          </button>
          <span className="my-0 text-gray-400">Illustration</span>
          <p className="mx-6 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officia unde beatae quae, facere consequuntur vel, a vitae corporis
            provident esse accusantium! Modi harum laudantium in perspiciatis
            nihil maiores quibusdam!
          </p>
        </div>
      </div>
      <hr className=" my-4 border-t border-gray-300 mx-44" />
    </div>
  );
}
