import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PendingImageCard = (props) => {
  return (
    <div className="pending__images__container">
      <div className="pending__image__card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={props.pendingPhoto.mediaURL}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              User Id:{props.pendingPhoto.mediaId} <br />
              Upload Date:{props.pendingPhoto.date} <br />
              Media Id:{props.pendingPhoto.mediaId} <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" type="success">Approve</Button>
            <Button size="small" type="danger">Reject</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default PendingImageCard;
