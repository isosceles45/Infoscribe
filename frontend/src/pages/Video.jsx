import React from "react";
import Sentiment from "../components/sentiment";
import axios from "axios";
import { useEffect, useState } from "react";

const Video = () => {
  return (
    <div className="w-full h-screen">
      <VideoDetails />
      <Sentiment />
    </div>
  );
};

const VideoDetails = () => {

    const location = window.location.href;
    const id = location.split("/")[4];
    const st_time = location.split("/")[5];
    console.log(id, st_time);
      return (
        <div >
          <div className=" flex justify-center h-screen w-screen">
            <iframe
              src={`https://www.youtube.com/embed/${id}?start=${st_time}`}
              frameBorder="0"
              width="75%"
              height="90%"
              allowFullScreen
            ></iframe>
            {}
          </div>
        </div>
      );
    };

export default Video;