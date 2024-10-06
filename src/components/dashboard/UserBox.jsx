import theme from "../../mui/theme";
import { Container, Avatar, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserBox({ userData }) {
  const navigate = useNavigate();

  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "black",
        mt: 2,
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.secondary.light,
          padding: 0.4,
          mx: "auto",
          maxWidth: "80%",
          borderRadius: 1,
          alignItems: "center",
        }}
        // spacing={0}
      >
        {/* Avatar */}
        <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
          <Avatar
            // alt={userData.name}
            alt={`${userData.name[0].toUpperCase()}`}
            // src="/static/images/avatar/2.jpg"
            src={userData.userPhotoUrl}
            sx={{
              backgroundColor: theme.palette.primary.dark,
              width: { xs: 60, sm: 55 },
              height: { xs: 60, sm: 55 },
              mx: "auto",
            }}
          />
        </Grid>

        {/* User Name */}
        <Grid item xs={12} sm={2}>
          <Typography
            sx={{ color: "white", fontSize: 19, textAlign: "center" }}
          >
            {userData.name}
          </Typography>
        </Grid>

        {/* User Role */}
        <Grid item xs={12} sm={2}>
          <Typography
            sx={{ color: "white", fontSize: 19, textAlign: "center" }}
          >
            {userData.role}
          </Typography>
        </Grid>

        {/* User Country */}
        <Grid item xs={12} sm={2}>
          <Typography
            sx={{ color: "white", fontSize: 19, textAlign: "center" }}
          >
            {userData.country}
          </Typography>
        </Grid>

        {/* Verification Status */}
        <Grid item xs={12} sm={2}>
          <Typography
            sx={{
              color: userData.verified
                ? theme.palette.success.main
                : theme.palette.error.main,
              fontSize: 19,
              textAlign: "center",
            }}
          >
            {userData.verified ? "Verified" : "Not Verified"}
          </Typography>
        </Grid>

        {/* View Button */}
        <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.dark,
              padding: { xs: "8px 16px", sm: "5px 20px" },
              borderRadius: 1,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
            onClick={() => navigate(`/user-details/${userData._id}`)}
          >
            <Typography sx={{ color: "white", textTransform: "capitalize" }}>
              View
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserBox;
