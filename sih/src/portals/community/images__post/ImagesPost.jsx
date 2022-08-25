import React from "react";

import "./imagesPost.css";
import SearchPhotos from "./components/searchPhotos/searchPhotos";

const ImagesPost = ({ refresh, setRefresh }) => {
  return (
    <>
      <div className="images__posts">
        <div className="images__posts__container">
          <SearchPhotos refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
    </>
  );
};
export default ImagesPost;
