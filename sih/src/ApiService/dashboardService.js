import axios from "axios";

const getPendingPhotosForApproval = async () => {
  try {
    const res = await axios.get();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
