import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PendingImageCard from "./pendingImageCard";
const pendingPhotos = [
  {
    userId: "1234",
    date: "24  August 2022",
    mediaId: "1",
    mediaURL: "https://vvgnli.gov.in/sites/default/files/01.JPG",
  },
  {
    userId: "1234",
    date: "24  August 2022",
    mediaId: "2",
    mediaURL: "https://vvgnli.gov.in/sites/default/files/01.JPG",
  },
  {
    userId: "1234",
    date: "24  August 2022",
    mediaId: "3",
    mediaURL: "https://vvgnli.gov.in/sites/default/files/01.JPG",
  },
  {
    userId: "1234",
    date: "24  August 2022",
    mediaId: "4",
    mediaURL: "https://vvgnli.gov.in/sites/default/files/01.JPG",
  },
];
const PendingPhotosForApproval = () => {
  const disapatch = useDispatch();
  const { pendingPhotosForApproval } = useSelector((state) => state.dashboard);
  disapatch({type:"pendingPhotosForApproval",payload:pendingPhotos})
  console.log(pendingPhotosForApproval);

  return (
    <div className="dashboard__pending__photos">
      <div className="dashboard__pending__photos__container">
        <div className="dashboard__pending__photos--heading">
          Hey this are Photos pending for approval
        </div>
        <div className="dashboard__pending__photos__card__container">
          <div className="dashboard__pending__photos__card__container--list">
            {pendingPhotosForApproval &&
              pendingPhotosForApproval.map((pendingPhoto) => (
                <PendingImageCard
                  key={pendingPhoto.mediaId}
                  pendingPhoto={pendingPhoto}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingPhotosForApproval;
