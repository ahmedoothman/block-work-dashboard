import { Typography, Grid } from "@mui/material";
import theme from "../../mui/theme";
function HeaderContractsGrid() {
  return (
    <div>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.secondary.light,
          padding: 1.1,
          mx: "auto",
          maxWidth: "80%",
          borderRadius: 1,
          alignItems: "center",

          mb: 1.5,
        }}
      >
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: 19,
               fontWeight:"bold",
              textAlign: "center",
              
            }}
          >
            Client Name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: 19,
              fontWeight:"bold",
              textAlign: "center",
            }}
          >
            Freelancer Name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: 19,
              fontWeight:"bold",
              textAlign: "center",
            }}
          >
            Description
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: 19,
              fontWeight:"bold",
              textAlign: "center",
            }}
          >
            Details
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeaderContractsGrid;
