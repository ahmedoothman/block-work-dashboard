import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { verifyUser } from "../services/userService";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import theme from "../mui/theme";




function UserDetails() {
  const { users } = useSelector((state) => state.users);
  const { userId } = useParams();
  const user = users.find((user) => user._id === userId);

  // console.log("Userssssssssss",users);
  // console.log("userrrrrrIddd",userId);
  // console.log("targettttttt userrrr",user);

  const [Isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [errormessage, setErrorMessage] = useState("");

  const handelApprove = async () => {
    const response = await verifyUser(userId);
    if ((response.status = "success")) {
      setDone(true);
      console.log(response.data);
    } else {
      setError(true);
      setErrorMessage(response.message);
      setDone(false);
    }
    setIsloading(false);
  };
  const handleBtn = () => {
    setIsloading(true);
    handelApprove();
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.secondary.light,
          width: 800,
          borderRadius: 3,
          mb:3
        }}
      >
        {/* //Avtar& name */}
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          p={2}
          sx={{ padding: "20px" }}
        >
          <Stack flexDirection={"row"}>
            <Avatar
              alt="profile photo"
              src={user.userPhotoUrl}
              sx={{ width: 130, height: 130, margin: "10px" }}
            />
            <Stack margin={"22px 0"}>
              <Typography
                variant="h5"
                component={"p"}
                color={theme.palette.text.primary}
              >
                {user.name?.charAt(0).toUpperCase() + user.name?.slice(1)}
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.secondary}
              >
                &nbsp;{user.role?.charAt(0).toUpperCase() + user.role?.slice(1)}
              </Typography>
              <Typography
                variant="body2"
                color={
                  user.verified
                    ? theme.palette.success.main
                    : theme.palette.error.main
                }
              >
                &nbsp; {user.verified ? "Verified" : "Not verified"}
              </Typography>
            </Stack>
          </Stack>
          <Stack margin={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              component={"p"}
              color={theme.palette.text.secondary}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <PhoneIcon
                sx={{ marginRight: "8px", color: theme.palette.text.primary }}
              />
              {user.phone}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component={"p"}
              color={theme.palette.text.secondary}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <BadgeIcon
                sx={{ marginRight: "8px", color: theme.palette.text.primary }}
              />
              {user.nationalId}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component={"p"}
              color={theme.palette.text.secondary}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <EmailIcon
                sx={{ marginRight: "8px", color: theme.palette.text.primary }}
              />
              {user.email}
            </Typography>
          </Stack>
        </Stack>
        <Stack margin={"10px 40px"}>
          <Typography
            variant="subtitle1"
            gutterBottom
            component={"p"}
            sx={{ display: "flex", alignItems: "center" }}
            color={theme.palette.text.white}
          >
            <LocationOnIcon
              sx={{ marginRight: "3px", color: theme.palette.text.secondary }}
            />{" "}
            {user.country?.charAt(0).toUpperCase() + user.country?.slice(1)}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component={"p"}
            color={theme.palette.text.white}
          >
            <span style={{ color: theme.palette.text.secondary }}>
              {" "}
              &nbsp; Title :
            </span>{" "}
            {user.jobTitle || "Frontend Developer"}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component={"p"}
            color={theme.palette.text.white}
          >
            <span style={{ color: theme.palette.text.secondary }}>
              {" "}
              &nbsp; Bio :{" "}
            </span>
            {user.bio?.charAt(0).toUpperCase() + user.bio?.slice(1) ||
                 "Iam a freelancer"}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component={"p"}
            color={theme.palette.text.white}
          >
            <span style={{ color: theme.palette.text.secondary }}>
              {" "}
              &nbsp; Skills :{" "}
            </span>{" "}
            {user.skills?.join(", ")||"js, css, html"}
          </Typography>
        </Stack>

        {/* // Id images */}
        <Stack flexDirection={"row"} m={2}>
          <Container>
            <img
              src={user.frontIdPhotoUrl}
              alt="User Front ID"
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="subtitle1"
              align="center"
              color={theme.palette.text.secondary}
            >
              Front ID
            </Typography>
          </Container>
          <Container>
            <img
              src={user.backIdPhotoUrl}
              alt="back Id Photo"
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="subtitle1"
              align="center"
              color={theme.palette.text.secondary}
            >
              Back ID
            </Typography>
          </Container>
        </Stack>
        {/* //btn */}
        <Stack alignSelf={"center"} m={2}>
          <Button
            variant="contained"
            onClick={handleBtn}
            disabled={Isloading}
            sx={{
              fontSize: 22,
              textTransform: "none",
              backgroundColor: theme.palette.primary.dark,
            }}
          >
            {Isloading ? (
        <CircularProgress size={24} sx={{ color: 'white' }} />
       ) : (
        'Approve'
       )}
          </Button>
        </Stack>
      </Container>

      <Snackbar open={error} autoHideDuration={6000} message={errormessage} />
    </Container>
  );
}

export default UserDetails;
