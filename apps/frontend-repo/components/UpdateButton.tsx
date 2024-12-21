import React from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const UpdateButton = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

  const handleUpdate = async () => {
    // Logic for update user...
  };

  return (
    <div>
      <Button onClick={handleUpdate}>Update User</Button>
      {state.loading && <Typography>Loading...</Typography>}
    </div>
  );
};

export default UpdateButton;
