import ImageViewer from "react-simple-image-viewer";
import * as React from "react";
import { Title } from "../Styles";
import styled, { css, keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Image = styled.img`
  animation: ${(props) =>
    //@ts-ignore
    props.spins
      ? css`
          ${spin} 10s linear infinite
        `
      : "none"};
`;

export default function Gallery({ imagePaths, title, activeWidth, icon }) {
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
    <div style={{ margin: "4vh" }}>
      {title && (
        <Title
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            // @ts-ignore
            spins={icon !== "angular"}
            width={50}
            src={`../images/${icon}.png`}
          />
          <div style={{ marginLeft: "10px" }}>{title}</div>
        </Title>
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
            width={activeWidth / imagePaths.length || "300px"}
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
    </div>
  );
}
