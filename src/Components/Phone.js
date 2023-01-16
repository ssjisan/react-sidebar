import { Box, Button, Chip, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Phone() {
  const [phone, setPhone] = useState();
  const [number, setNumber] = useState([]);
  const handleSubmit = () => {
    setPhone("");
    setNumber((current) => [...current, phone]);
  };
  const handleDelete = (id) => {
    const xyz = [...number];
    const index = id;
    if (index !== -1);
    xyz.splice(index, 1);
    setNumber(xyz);
  };
  console.log("01675,05451,064321");
  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          gap: 4,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Button
          variant="contained"
          sx={{ width: "120px" }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Box>
      {number?.map((data, index) => (
        <Chip
          label={data}
          sx={{ mr: 1, mt: 2 }}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </>
  );
}
