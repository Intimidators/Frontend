import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PendingImageCard from "./pendingImageCard";
import { Grid } from "@mui/material";
import './pendingSection.css'
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
  {
    userId: "1234",
    date: "24  August 2022",
    mediaId: "5",
    mediaURL: "https://vvgnli.gov.in/sites/default/files/01.JPG",
  },
  {
    userId: "1234",
    date: "24  August 2022",
    mediaId: "6",
    mediaURL: "https://vvgnli.gov.in/sites/default/files/01.JPG",
  },
  {
    userId: "1234",
    date: "24  August 2022",
    mediaId: "7",
    mediaURL: "https://vvgnli.gov.in/sites/default/files/01.JPG",
  },
  {
    userId: "1234",
    date: "24  August 2022",
    mediaId: "8",
    mediaURL: "https://vvgnli.gov.in/sites/default/files/01.JPG",
  },
];
const PendingPhotosForApproval = () => {
  const disapatch = useDispatch();
  const { pendingPhotosForApproval } = useSelector((state) => state.dashboard);
  disapatch({ type: "pendingPhotosForApproval", payload: pendingPhotos });
  console.log(pendingPhotosForApproval);

  return (
    <div className="dashboard__pending__photos">
      <div className="dashboard__pending__photos__container">
        <div className="dashboard__pending__photos--heading">
          Hey these are Photos pending for approval
        </div>
        <div className="dashboard__pending__photos__card__container">
          <div className="dashboard__pending__photos__card__container--list">
            <Grid container spacing={2}>
              {pendingPhotosForApproval &&
                pendingPhotosForApproval.map((pendingPhoto) => (
                  <Grid item xs={8} lg={3} md={4} key={pendingPhoto.mediaId}>
                    <PendingImageCard pendingPhoto={pendingPhoto} />
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingPhotosForApproval;
