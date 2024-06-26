import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const CompanyAnalytic = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex w-full  justify-center items-center align-middle z-10">
      <div className="absolute top-0 right-0 z-40 w-16 h-16  flex flex-col justify-center items-center overflow-hidden ">
        <RxCross2
          className="text-blue text-3xl cursor-pointer"
          color="#FFF"
          onClick={() => navigate(-1)}
        />
      </div>
      <iframe
        title="Yearly_exports"
        height="100%"
        className=" fixed  left-0 bottom-0 right-0 "
        width="100%"
        src="https://app.powerbi.com/view?r=eyJrIjoiYjRjMDhiMjYtMzhmNy00MTZiLWJiMmYtNzcxOTYxZGE5NmUyIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default CompanyAnalytic;
