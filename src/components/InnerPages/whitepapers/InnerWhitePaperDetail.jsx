import React from "react";
import { useParams } from "react-router-dom";
import { WhitepapperData } from "../.."; // Assuming your whitepaper data is imported here
import Markdown from "./Markdown"
function InnerWhitePaperDetail() {
  const { category } = useParams(); // Retrieve the category from the URL params

  // Filter the data based on the category from the URL
  const whitepaper = WhitepapperData.find(
    (service) => service.category === category
  );

  // If the whitepaper data is not found for the given category, return an error message
  if (!whitepaper) {
    return <p>Whitepaper not found!</p>;
  }

  return (
    <div className="text-justify">
      {/* Whitepaper Title */}
      <div className="mt-10 text-center">
       
          <Markdown data={whitepaper.title} />
     
      </div>

      {/* Whitepaper Video */}
      {whitepaper.vid && (
        <div className="mb-10">
          <video
            src={whitepaper.vid}
            preload="auto"
            autoPlay
            muted
            playsInline
            className="w-full h-auto object-cover"
          ></video>
        </div>
      )}

      {/* Whitepaper Details */}
    
        <Markdown data={whitepaper.detail} />
     
    </div>
  );
}
export default InnerWhitePaperDetail;