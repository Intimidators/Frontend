import React from "react";

const PendingImageCard = (props) => {
  return (
    <div className="pending__images__container">
      <div className="pending__image__card">
          User Id: {props.pendingPhoto.userId}
          User Id: {props.pendingPhoto.date}
          User Id: {props.pendingPhoto.mediaId}
      </div>
    </div>
  );
};

export default PendingImageCard;
