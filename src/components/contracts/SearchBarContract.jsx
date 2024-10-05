import React, { useState } from "react";
import { TextField, InputAdornment, Stack, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import theme from "../../mui/theme";

function SearchBarContract({ contracts, setFilteredContracts }) {
  const [seacrhText, setSearchText] = useState("");
  //   console.log("Search", seacrhText);

  function handleSearch(e) {
    const searchValue = e.target.value;
    console.log("searchhhhhhhhhhhh", searchValue);
    setSearchText(searchValue);

    if (searchValue.trim() === "") {
      setFilteredContracts(contracts);
    } else {
      const filteredContracts = contracts.filter(
        (contract) =>
          contract.client._id === searchValue ||
          contract.client.nationalId === searchValue ||
          contract.client.phone === searchValue ||
          (contract.client.country &&
            contract.client.country
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          (contract.client.email &&
            contract.client.email
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          (contract.client.name &&
            contract.client.name
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          (contract.client.role &&
            contract.client.role
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          (contract.client.jobTitle &&
            contract.client.jobTitle
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          contract.freelancer._id === searchValue ||
          contract.freelancer.nationalId === searchValue ||
          contract.freelancer.phone === searchValue ||
          (contract.freelancer.country &&
            contract.freelancer.country
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          (contract.freelancer.email &&
            contract.freelancer.email
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          (contract.freelancer.name &&
            contract.freelancer.name
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          (contract.freelancer.role &&
            contract.freelancer.role
              .toLowerCase()
              .includes(searchValue.toLowerCase())) ||
          (contract.freelancer.jobTitle &&
            contract.freelancer.jobTitle
              .toLowerCase()
              .includes(searchValue.toLowerCase()))
      );

      setFilteredContracts(filteredContracts);
      // console.log("filtereddd", filteredContracts);
    }
  }
  //console.log("constracts", contracts);

  return (
    <Stack
      flexDirection={{ xs: "column", sm: "row" }}
      alignSelf={{ xs: "center", sm: "flex-end" }}
      gap={1}
      mt={{ xs: 1, sm: 5 }}
      width={{ xs: "100%", sm: "auto" }}
    >
      <TextField
        placeholder="Search for contract"
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

export default SearchBarContract;
