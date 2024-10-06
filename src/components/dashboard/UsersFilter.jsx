import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "../../mui/theme";
import React, { useState } from "react";

function UsersFilter({ showAllUsers ,showPendingUsers}) {
    const [clickedButton, setClickedButton] = useState("all");

    const handleButtonClick = (buttonType) => {
        setClickedButton(buttonType);
        if (buttonType === "all") {
            showAllUsers(); 
        }else if (buttonType==="pending"){
            showPendingUsers();
        }
      };
  return (

    <Stack
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        mt: 3,
        alignItems: { xs: "center", sm: "flex-start" },

      }}
    >
      <Button
        sx={{
        backgroundColor: clickedButton === "pending" ? theme.palette.primary.dark : "black",
          padding: { xs: "10px 20px", sm: 2 },
          height: { xs: 50, sm: 40 },
          width: { xs: "100%", sm: "auto" },
          borderRadius: 1,
        }}
        onClick={()=>handleButtonClick("pending")}
      >
        <Typography sx={{ color:  clickedButton === "pending"?"white": theme.palette.primary.dark, textTransform: "capitalize" }}>
          Pending
        </Typography>
      </Button>

      <Button
        sx={{
         backgroundColor: clickedButton === "all" ? theme.palette.primary.dark : "black",
          padding: { xs: "10px 20px", sm: 2 },
          height: { xs: 50, sm: 40 },
          width: { xs: "100%", sm: "auto" },
          borderRadius: 1,
        }}
        onClick={()=>handleButtonClick("all")}
      >
        <Typography
          sx={{
            color:clickedButton === "all"? "white": theme.palette.primary.dark,
            textTransform: "capitalize",
          }}
        >
          All Users
        </Typography>
      </Button>
    </Stack>
  );
}

export default UsersFilter;
