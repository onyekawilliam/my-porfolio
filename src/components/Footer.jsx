import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex mt-16 mb-3 justify-center">
        <a href="" className="mx-4">
          <img src="/public/images/fb.png" alt="Facebook logo" />
        </a>
        <a href="" className="mx-4">
          <img src="/public/images/insta.png" alt="Instagram logo" />
        </a>
        <a href="" className="mx-4">
          <img src="/public/images/Group.png" alt="Group logo" />
        </a>
        <a href="" className="mx-4">
          <img src="/public/images/Linkedin.png" alt="Linkedin logo" />
        </a>
      </div>
      <img
        src="/public/images/copyright.png"
        alt="copyright"
        className="mx-auto mb-12 w-44"
      />
    </div>
  );
}
