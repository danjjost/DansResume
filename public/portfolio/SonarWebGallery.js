import ImageViewer from "react-simple-image-viewer";
import * as React from "react";

export default function SonarWebGallery() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const sonarWebImages = [
    "../images/SonarWeb-Login.png",
    "../images/SonarWeb-Home.png",
    "../images/SonarWeb-Breeder.png",
  ];

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <title>SonarWeb</title>

      {sonarWebImages.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      <br />

      {isViewerOpen && (
        <ImageViewer
          src={sonarWebImages}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}
