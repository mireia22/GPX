import { parseTrack } from "../gpx/parseTrack";
import { postTrackData } from "../gpx/postTrackData";
import { SetGpxData } from "../types/Type";

interface FileInputProps {
  setGpxData: SetGpxData;
}

const FileInput: React.FC<FileInputProps> = ({ setGpxData }) => {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (fileInput?.files?.length) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          const gpxData = event.target.result;
          const newGpxData = parseTrack(gpxData);
          setGpxData(newGpxData);
          postTrackData(newGpxData);
        }
      };
      reader.readAsText(file);
    }
  };

  return <input type="file" onChange={handleFileChange} />;
};

export default FileInput;
