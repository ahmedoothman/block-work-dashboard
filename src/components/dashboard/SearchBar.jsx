import React, { useState } from "react";

import { TextField, InputAdornment, Stack, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import theme from "../../mui/theme";

function SearchBar({ users, setFilteredUsers }) {
  const [seacrhText, setSearchText] = useState("");
  //console.log("Search", seacrhText);

  function handleSearch(e) {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    if (searchValue.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filteredUsers = users.filter(
        (user) =>
          user._id === searchValue ||
          user.nationalId === searchValue ||
          user.phone === searchValue ||
          user.country.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.role.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredUsers(filteredUsers);
      // console.log("filtereddd", filteredUsers);
    }
  }
  // console.log("usersss", users);

  return (
    <Stack
      flexDirection={{ xs: "column", sm: "row" }}
      alignSelf={{ xs: "center", sm: "flex-end" }}
      gap={1}
      margin={{ xs: 1, sm: 3 }}
      width={{ xs: "100%", sm: "auto" }}
    >
      <TextField
        placeholder="Search for user"
        value={seacrhText}
        onChange={(e) => handleSearch(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "black" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: theme.palette.secondary.lightGray,
          borderRadius: 1,
          mb: { xs: 1, sm: 3 },
          width: { xs: "100%", sm: 266 },
          height: { xs: 40, sm: 38 },
          "& .MuiInputBase-root": {
            height: "100%",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#49454F",
            opacity: 1,
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.dark,
          minWidth: { xs: "100%", sm: 38 },
          height: { xs: 40, sm: 38 },
        }}
      >
        <SearchIcon />
      </Button>
    </Stack>
  );
}

export default SearchBar;
