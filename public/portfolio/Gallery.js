import ImageViewer from "react-simple-image-viewer";
import * as React from "react";

export default function Gallery({ imagePaths, title, width }) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      {title && (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          {title}
        </h1>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(imagePaths ?? []).map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width={width || "300px"}
            key={index}
            style={{ margin: "2px" }}
            alt=""
          />
        ))}
        <br />

        <br />
        {isViewerOpen && (
          <ImageViewer
            src={imagePaths ?? []}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
