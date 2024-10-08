import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Container, Divider, Stack, Typography,Grid,Card } from '@mui/material';
import theme from '../mui/theme';
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ContractDetails() {
     const { contracts} = useSelector((state) => state.contracts);
    // console.log("All contractsssssss",contracts);
    const { contractId } = useParams();
    const contract = contracts.find((contract) => contract.job._id === contractId);
    // const contract = {
    //     amount: "10000",
    //     client: {
    //       __v: 0,
    //       _id: "66f9b0e6a7d7a6329c4876b7",
    //       accountCreatedAt: "2024-09-29T19:23:28.406Z",
    //       backIdPhotoUrl: "https://firebasestorage.googleapis.com/v0/b/blockworkcloud.appspot.com/o/users%2F1727639770736_backIdPhoto.jpg?alt=media&token=9c705537-767a-4a4f-aa51-155280c1ec8e",
    //       bio: "iam a freelancer",
    //       country: "egypt",
    //       email: "noranmohammed2310@gmail.com",
    //       frontIdPhotoUrl: "https://firebasestorage.googleapis.com/v0/b/blockworkcloud.appspot.com/o/users%2F1727639770736_frontIdPhoto.jpg?alt=media&token=179fffe7-c5fa-41c2-9e1b-845d31d5bca2",
    //       jobTitle: "Full stack web dev",
    //       name: "Noran",
    //       nationalId: "30103141401645",
    //       phone: "01001548671",
    //       role: "Client",
    //       skills: [],
    //       socketId: null,
    //       userPhotoUrl: "https://firebasestorage.googleapis.com/v0/b/blockworkcloud.appspot.com/o/users%2F1727639770736_userPhoto.jpg?alt=media&token=7bb6a0cb-d60d-4992-b406-18723c8849ca",
    //       verified: false
    //     },
    //     createdDate: "2024-09-30T18:19:24.000Z",
    //     duration: "20",
    //     freelancer: {
    //       __v: 0,
    //       _id: "66f9b0e6a7d7a6329c4876b7",
    //       accountCreatedAt: "2024-09-29T19:23:28.406Z",
    //       backIdPhotoUrl: "https://firebasestorage.googleapis.com/v0/b/blockworkcloud.appspot.com/o/users%2F1727639770736_backIdPhoto.jpg?alt=media&token=9c705537-767a-4a4f-aa51-155280c1ec8e",
    //       bio: "iam a freelancer",
    //       country: "egypt",
    //       email: "Othman12@gmail.com",
    //       frontIdPhotoUrl: "https://firebasestorage.googleapis.com/v0/b/blockworkcloud.appspot.com/o/users%2F1727639770736_frontIdPhoto.jpg?alt=media&token=179fffe7-c5fa-41c2-9e1b-845d31d5bca2",
    //       jobTitle: "Full stack web dev",
    //       name: "AhmedOthman",
    //       nationalId: "30003110104659",
    //       phone: "01064568074",
    //       role: "freelancer",
    //       skills: [],
    //       socketId: null,
    //       userPhotoUrl: "https://firebasestorage.googleapis.com/v0/b/blockworkcloud.appspot.com/o/users%2F1727639770736_userPhoto.jpg?alt=media&token=7bb6a0cb-d60d-4992-b406-18723c8849ca",
    //       verified: false
    //     },
    //     job: {
    //       __v: 0,
    //       _id: "66f9740580822a876ce539e5",
    //       budget: 2000,
    //       category: "Web Development",
    //       client: "66f8837ef3d43d1de8fd4976",
    //       createdAt: "2024-09-29T15:36:37.275Z",
    //       description: "We need a React developer",
    //       duration: 10,
    //       isActive: true,
    //       skillsRequired: [],
    //       title: "Frontend Developer Needed"
    //     },
    //     status: "0"
    //   };

      function convertDate(isoDateString) {
        const date = new Date(isoDateString);
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true, 
          day: 'numeric',
          month: 'short', 
          year: 'numeric'
        };
        return date.toLocaleString('en-US', options);
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
            {/* Client Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{ padding: 3, boxShadow: "0 4px 12px rgba(240, 246, 247,0.1)",backgroundColor:theme.palette.secondary.light }}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.text.white, textAlign: "center", mb: 2 }}
                >
                  Client
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    sx={{ width: 100, height: 100, boxShadow: "0 2px 8px rgba(240, 246, 247, 0.1)" }}
                    src={contract.client.userPhotoUrl}
                  />
                  <Stack>
                    <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
                      {contract.client.name?.charAt(0).toUpperCase() + contract.client.name?.slice(1)}
                    </Typography>
                    <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                      {contract.client.role?.charAt(0).toUpperCase() + contract.client.role?.slice(1)}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack mt={2} spacing={1}>
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", alignItems: "center", color: theme.palette.text.secondary }}
                  >
                    <PhoneIcon sx={{ marginRight: "8px", color: theme.palette.text.primary }} />
                    {contract.client.phone}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", alignItems: "center", color: theme.palette.text.secondary }}
                  >
                    <BadgeIcon sx={{ marginRight: "8px", color: theme.palette.text.primary }} />
                    {contract.client.nationalId}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", alignItems: "center", color: theme.palette.text.secondary }}
                  >
                    <EmailIcon sx={{ marginRight: "8px", color: theme.palette.text.primary }} />
                    {contract.client.email}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
      
            {/* Freelancer Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{ padding: 3, boxShadow: "0 4px 12px rgba(240, 246, 247,0.1)" ,backgroundColor:theme.palette.secondary.light}}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.text.white, textAlign: "center", mb: 2 }}
                >
                  Freelancer
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    sx={{ width: 100, height: 100, boxShadow: "0 2px 8px rgba(240, 246, 247, 0.1)" }}
                    src={contract.freelancer.userPhotoUrl}
                  />
                  <Stack>
                    <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
                      {contract.freelancer.name?.charAt(0).toUpperCase() + contract.freelancer.name?.slice(1)}
                    </Typography>
                    <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                      {contract.freelancer.role?.charAt(0).toUpperCase() + contract.freelancer.role?.slice(1)}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack mt={2} spacing={1}>
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", alignItems: "center", color: theme.palette.text.secondary }}
                  >
                    <PhoneIcon sx={{ marginRight: "8px", color: theme.palette.text.primary }} />
                    {contract.freelancer.phone}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", alignItems: "center", color: theme.palette.text.secondary }}
                  >
                    <BadgeIcon sx={{ marginRight: "8px", color: theme.palette.text.primary }} />
                    {contract.freelancer.nationalId}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", alignItems: "center", color: theme.palette.text.secondary }}
                  >
                    <EmailIcon sx={{ marginRight: "8px", color: theme.palette.text.primary }} />
                    {contract.freelancer.email}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
      
            {/* Contract Details */}
            <Grid item xs={12}>
              <Divider sx={{ backgroundColor: theme.palette.text.secondary, my: 4 }} />
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ color: theme.palette.text.white }}>
                  Contract Details
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  <strong  style={{color:theme.palette.text.primary}}>Title:</strong> {contract.job.title}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  <strong  style={{color:theme.palette.text.primary}}>Category:</strong> {contract.job.category}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  <strong  style={{color:theme.palette.text.primary}}>Description:</strong> {contract.job.description}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  <strong  style={{color:theme.palette.text.primary}}>Amount:</strong> ${contract.amount}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  <strong style={{color:theme.palette.text.primary}}>Duration:</strong> {contract.duration} days
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  <strong style={{color:theme.palette.text.primary}}>Created at:</strong> {convertDate(contract.createdDate)}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary}}>
                  <strong  style={{color:theme.palette.text.primary}}>Status:</strong> {contract.status === "0" ? "Pending" : contract.status === "1" ?"Completed":contract.status === "2" ? "Canceled":"Unknown"}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Container>
      
      
      
      
    )
}

export default ContractDetails




