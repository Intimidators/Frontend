import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PendingImageCard from "./pendingImageCard";
import { Grid } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import "./pendingSection.css";
import { Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import axios from "axios";
// import config from "../../../../ApiConfig/Config";
import moment from "moment";
import "./pendingSection.css";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
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
const PendingVideosForApproval = () => {
  const disapatch = useDispatch();
  const { pendingPhotosForApproval } = useSelector((state) => state.dashboard);

  const [pendingVideos, setPendingVideos] = useState([]);

  disapatch({ type: "pendingPhotosForApproval", payload: pendingPhotos });
  console.log(pendingPhotosForApproval);

  const handleCancelClick = async (id) => {
    console.log("Cancel", id);
    const obj = {
      mediaId: id,
      postStatus: "2",
    };
    // try {
    //   const res = await axios.post(
    //     config.server.path +
    //     config.api.updatePostStatus,
    //     {
    //       ...obj,
    //     },
    //     { headers: { "User-Id": userId } }
    //   );
    //   getPendingResearchPapers();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleDoneClick = async (id) => {
    console.log("Done");
    const obj = {
      mediaId: id,
      postStatus: "1",
    };
    // const res = await axios.post(
    //   config.server.path +
    //   config.api.updatePostStatus,
    //   {
    //     ...obj,
    //   },
    //   { headers: { "User-Id": userId } }
    // );
    // getPendingResearchPapers();
  };

  return (
    <div className="dashboard__pending__photos">
      <div className="dashboard__pending__photos__container">
        <div className="dashboard__pending__photos--heading">
          Hey these are Videos pending for approval
        </div>
        <div className="dashboard__pending__photos__card__container">
          <div className="dashboard__research__table">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">User Id</StyledTableCell>
                    <StyledTableCell align="left">Date</StyledTableCell>
                    <StyledTableCell align="left">Media ID</StyledTableCell>
                    <StyledTableCell align="left">Video Link</StyledTableCell>
                    <StyledTableCell align="left">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pendingVideos &&
                    pendingVideos.map((pendingResearchPaper) => (
                      <StyledTableRow key={pendingResearchPaper.mediaId}>
                        <StyledTableCell align="left">
                          {pendingResearchPaper.userId}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {moment(pendingResearchPaper.currentTimeStamp).format(
                            "dddd DD MMMM YYYY"
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {pendingResearchPaper.mediaId}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <a
                            href={pendingResearchPaper.mediaURL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            See Paper
                          </a>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <CancelIcon
                            color="action"
                            onClick={() =>
                              handleCancelClick(pendingResearchPaper.mediaId)
                            }
                          />
                          <DoneIcon
                            color="primary"
                            onClick={() =>
                              handleDoneClick(pendingResearchPaper.mediaId)
                            }
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingVideosForApproval;
