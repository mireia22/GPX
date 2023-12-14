import React from "react";
import InputFileReader from "../components/InputFileReader";
import { parseAndPostGpx } from "../gpx/parseAndPostGpx";
import { useGpxDataContext } from "../context/gpxDataContext";

const PostTrackForm = () => {
  const { gpxData, setGpxData } = useGpxDataContext();

  const handleFileChange = (formData: string) => {
    setGpxData(formData);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (gpxData) {
      parseAndPostGpx(gpxData, setGpxData);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-2 p-2 border-lg bg-slate-300"
    >
      <InputFileReader onFileRead={handleFileChange} />
      <button className=" px-2 bg-purple-800 rounded-lg text-white">
        POST
      </button>
    </form>
  );
};

export default PostTrackForm;
