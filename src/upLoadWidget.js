import React, { useEffect, useRef } from "react";

const UploadWidget = (props) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const cloudinary = window.cloudinary;

    widgetRef.current = cloudinary.createUploadWidget(
      {
        cloudName: "dthsowsft",
        uploadPreset: "fq7ajegr"
      },
      (error, result) => {
        if (result.event === "success") {
          console.log("Upload successful:", result.info);
        const upLoadTemp  ={
          resource_type:"image",
          url:result.info.url}
          props.addData(upLoadTemp)

        } else if (result.event === "close") {
          console.log("Widget closed without any file selected.");
        } else if (result.event === "error") {
          console.log("Error:", error);
        }
      }
    );
  }, []);

  const handleUploadButtonClick = () => {
    if (widgetRef.current) {
      widgetRef.current.open();
    }
  };

  

  return (
    <button onClick={handleUploadButtonClick}>UPLOAD</button>
  );
};

export default UploadWidget;