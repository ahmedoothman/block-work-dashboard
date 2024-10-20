import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Avatar,
  Container,
  Divider,
  Stack,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import theme from "../mui/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";

function ContractDetails() {
  const { contracts } = useSelector((state) => state.contracts);

  const { contractId } = useParams();

  const contract = contracts.find(
    (contract) => contract.contract._id === contractId
  );
 

  function convertDate(isoDateString) {
    const date = new Date(isoDateString);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleString("en-US", options);
  }

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
        padding: 3,
      }}
    >
      <Container
        sx={{
          width: "80%",
          maxWidth: 1000,
          backgroundColor: theme.palette.secondary.light,
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(240, 246, 247,0.2)",
          padding: 4,
          margin: "20px 0",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: 3,
                boxShadow: "0 4px 12px rgba(240, 246, 247,0.1)",
                backgroundColor: theme.palette.secondary.light,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.white,
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Client
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    boxShadow: "0 2px 8px rgba(240, 246, 247, 0.1)",
                  }}
                  src={contract.client.userPhotoUrl}
                />
                <Stack>
                  <Typography
                    variant="h5"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    {contract.client.name?.charAt(0).toUpperCase() +
                      contract.client.name?.slice(1)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={theme.palette.text.secondary}
                  >
                    {contract.client.role?.charAt(0).toUpperCase() +
                      contract.client.role?.slice(1)}
                  </Typography>
                </Stack>
              </Stack>
              <Stack mt={2} spacing={1}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.text.secondary,
                  }}
                >
                  <PhoneIcon
                    sx={{
                      marginRight: "8px",
                      color: theme.palette.text.primary,
                    }}
                  />
                  {contract.client.phone}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.text.secondary,
                  }}
                >
                  <BadgeIcon
                    sx={{
                      marginRight: "8px",
                      color: theme.palette.text.primary,
                    }}
                  />
                  {contract.client.nationalId}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.text.secondary,
                  }}
                >
                  <EmailIcon
                    sx={{
                      marginRight: "8px",
                      color: theme.palette.text.primary,
                    }}
                  />
                  {contract.client.email}
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: 3,
                boxShadow: "0 4px 12px rgba(240, 246, 247,0.1)",
                backgroundColor: theme.palette.secondary.light,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.white,
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Freelancer
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    boxShadow: "0 2px 8px rgba(240, 246, 247, 0.1)",
                  }}
                  src={contract.freelancer.userPhotoUrl}
                />
                <Stack>
                  <Typography
                    variant="h5"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    {contract.freelancer.name?.charAt(0).toUpperCase() +
                      contract.freelancer.name?.slice(1)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={theme.palette.text.secondary}
                  >
                    {contract.freelancer.role?.charAt(0).toUpperCase() +
                      contract.freelancer.role?.slice(1)}
                  </Typography>
                </Stack>
              </Stack>
              <Stack mt={2} spacing={1}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.text.secondary,
                  }}
                >
                  <PhoneIcon
                    sx={{
                      marginRight: "8px",
                      color: theme.palette.text.primary,
                    }}
                  />
                  {contract.freelancer.phone}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.text.secondary,
                  }}
                >
                  <BadgeIcon
                    sx={{
                      marginRight: "8px",
                      color: theme.palette.text.primary,
                    }}
                  />
                  {contract.freelancer.nationalId}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.text.secondary,
                  }}
                >
                  <EmailIcon
                    sx={{
                      marginRight: "8px",
                      color: theme.palette.text.primary,
                    }}
                  />
                  {contract.freelancer.email}
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Divider
              sx={{ backgroundColor: theme.palette.text.secondary, my: 4 }}
            />
            <Stack spacing={2}>
              <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.text.white }}
                >
                  Contract Details
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color:
                      contract.status === "completed"
                        ? theme.palette.success.main
                        : contract.status === "pending"
                        ? theme.palette.warning.main
                        : contract.status === "cancled"
                        ? theme.palette.error.main
                        : theme.palette.text.secondary,
                  }}
                >
                  {contract.status.charAt(0).toUpperCase() +
                    contract.status.slice(1)}
                </Typography>
              </Stack>

              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                <strong style={{ color: theme.palette.text.primary }}>
                  Title:
                </strong>{" "}
                {contract.job.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                <strong style={{ color: theme.palette.text.primary }}>
                  Category:
                </strong>{" "}
                {contract.job.category}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                <strong style={{ color: theme.palette.text.primary }}>
                  Description:
                </strong>{" "}
                {contract.job.description}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                <strong style={{ color: theme.palette.text.primary }}>
                  Amount:
                </strong>{" "}
                ${contract.amount}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                <strong style={{ color: theme.palette.text.primary }}>
                  Duration:
                </strong>{" "}
                {contract.duration} days
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                <strong style={{ color: theme.palette.text.primary }}>
                  Created at:
                </strong>{" "}
                {convertDate(contract.createdDate)}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default ContractDetails;
