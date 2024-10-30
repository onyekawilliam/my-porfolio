import React from "react";
import Herosection from "../components/Herosection";
import Recentsection from "../components/Recentsection";
import Featuredsection from "../components/Featuredsection";

export default function Home() {
  return (
    <div>
      <Herosection />
      <Recentsection />
      <Featuredsection />
    </div>
  );
}
