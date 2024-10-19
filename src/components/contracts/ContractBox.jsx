import { Button, Typography, Grid } from "@mui/material";
import Container from "@mui/material/Container";

import theme from "../../mui/theme";
import { useNavigate } from "react-router-dom";

function ContractBox({ contractData }) {
  const navigate = useNavigate();
  const { client, freelancer, job, contract } = contractData;

  return (
    <>
      <Container
        component="main"
        maxWidth={false}
        disableGutters
        sx={{
          mt: 1,
        }}
      >
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
          // spacing={0}
        >
          <Grid item xs={12} sm={3}>
            <Typography
              sx={{ color: "white", fontSize: 19, textAlign: "center" }}
            >
              {client?.name}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography
              sx={{ color: "white", fontSize: 19, textAlign: "center" }}
            >
              {freelancer?.name}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography
              sx={{ color: "white", fontSize: 19, textAlign: "center" }}
            >
              {job?.description}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
            <Button
              sx={{
                backgroundColor: theme.palette.primary.dark,
                alignSelf: "center",
                padding: { xs: "8px 16px", sm: "5px 20px" },
                borderRadius: 1,
              }}
              onClick={() => navigate(`/contract-details/${contract?._id}`)}
            >
              <Typography sx={{ color: "white", textTransform: "capitalize" }}>
                View
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContractBox;
