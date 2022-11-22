import React from "react";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar({ handleChange, value }) {
    return (
        <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
                sx={{
                    border: "none",
                    background: "rgba(242, 244, 247, 0.7)",
                    borderRadius: "8px",
                    width: "600px",
                }}
                id="outlined-adornment-weight"
                value={value}
                color="success"
                size="small"
                placeholder="Search for everything..."
                onChange={handleChange}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    "aria-label": "weight",
                }}
            />
        </FormControl>
    );
}
