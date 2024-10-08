import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Container, Grid, Box, Typography } from "@mui/material";
import theme from "../mui/theme";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Charts() {
  // Sample Chart Data
  const ChartData = {
    categories: [
      { categoryName: "Software Development", totalJobs: 150 },
      { categoryName: "Marketing", totalJobs: 80 },
      { categoryName: "Design", totalJobs: 60 },
      { categoryName: "Data Science", totalJobs: 90 },
    ],
    status: [
      { statusName: "Open", numberOfJobs: 300 },
      { statusName: "Closed", numberOfJobs: 160 },
    ],
    overview: { Users: 1500, Proposals: 2000, Contracts: 3000, Jobs: 2500 },
    contracts: [
      { status: "Pending", numberOfContracts: 150 },
      { status: "Approved", numberOfContracts: 200 },
      { status: "Rejected", numberOfContracts: 50 },
      { status: "Completed", numberOfContracts: 500 },
    ],
    userCounts: { freelancers: { count: 1200 }, clients: { count: 800 } },
    profit: 1000,
  };

  const { categories, status, overview, contracts, userCounts, profit } =
    ChartData;

  // Data for Charts
  const barData = {
    labels: ["Users", "Proposals", "Contracts", "Jobs"],
    datasets: [
      {
        label: "Blockwork Overview",
        data: [
          overview.Users,
          overview.Proposals,
          overview.Contracts,
          overview.Jobs,
        ],
        // backgroundColor: "rgba(75, 192, 192, 0.6)",
        // borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: contracts.map((obj) => obj.status),
    datasets: [
      {
        label: "Number Of Contracts For Each Status",
        data: contracts.map((obj) => obj.numberOfContracts),
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1,
      },
    ],
  };

  const pieData = {
    labels: categories.map((obj) => obj.categoryName),
    datasets: [
      {
        label: "Job Categories",
        data: categories.map((obj) => obj.totalJobs),
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(230, 230, 250, 1)",
        
          
         
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(230, 230, 250, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // const doughnutData = {
  //   labels: status.map((obj) => obj.statusName),
  //   datasets: [
  //     {
  //       label: "Job Status",
  //       data: status.map((obj) => obj.numberOfJobs),
  //       // backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
  //       // borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
  //       // backgroundColor: ["rgb(74, 144, 226 )","rgb(252, 169, 30)"],
  //       // borderColor: ["rgb(74, 144, 226 )","rgb(252, 169, 30)"],
  //       backgroundColor: ["#15d2eb","#fa26a0"],

  //       borderColor: ["#15d2eb","#fa26a0"],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  const doughnutData = {
    labels: status.map((obj) => obj.statusName),
    datasets: [
      {
        label: "Job Status",
        data: status.map((obj) => obj.numberOfJobs),
        backgroundColor: [
         "rgba(54, 162, 235, 1)", // Indigo
          "rgba(211, 211, 211, 1)", // Light Gray
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)", 
          "rgba(211, 211, 211, 1)", 
        ],
        borderWidth: 2,
      },
    ],
  };
  
  
  
  const horizontalBarData = {
    labels: ["Freelancers", "Clients"],
    datasets: [
      {
        label: "Users Distribution",
        data: [userCounts.freelancers.count, userCounts.clients.count],
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const profitData = {
    labels: ["Profit"],
    datasets: [
      {
        label: "Company Profit",
        data: [profit],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Chart Overview" },
    },
  };

  const horizontalOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Users Distribution Overview" },
    },
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        {/* First Row */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.dark,
              padding: "20px",
              borderRadius: "10px",
              boxShadow: 3,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effect
              '&:hover': {
                transform: 'scale(1.02)', // Slightly scale up on hover
                boxShadow: 8, // Increase shadow on hover for more depth
              },
            }}
          >
            <Bar data={barData} options={options} />
          </Box>
        </Grid>

     
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.dark, 
              padding: "20px",
              borderRadius: "10px",
              boxShadow: 6, 
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              transition: "transform 0.2s, box-shadow 0.2s", 
              "&:hover": {
                transform: "scale(1.02)", 
                boxShadow: 8, 
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.secondary.lightGray,
                // fontWeight: "bold",
              }}
            >
              Profit
            </Typography>
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.1)", 
                padding: 4,
                borderRadius: 4,
                border: `1px solid ${theme.palette.primary.main}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3, 
                transition: "box-shadow 0.2s", 
                "&:hover": {
                  boxShadow: 5, 
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: "bold", // Make the profit value bold
                }}
              >
                ${profit.toLocaleString()} {/* Format profit with commas */}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.dark,
              padding: "20px",
              borderRadius: "10px",
              boxShadow: 3,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: 'transform 0.2s, box-shadow 0.2s', 
              '&:hover': {
                transform: 'scale(1.02)', 
                boxShadow: 8, 
              },
            }}
          >
            <Doughnut data={doughnutData} options={options} />
          </Box>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.dark,
              padding: "20px",
              borderRadius: "10px",
              boxShadow: 3,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.02)', 
                boxShadow: 8, 
              },
            }}
          >
            <Pie data={pieData} options={options} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.dark,
              padding: "20px",
              borderRadius: "10px",
              boxShadow: 3,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: 'transform 0.2s, box-shadow 0.2s', 
              '&:hover': {
                transform: 'scale(1.02)', 
                boxShadow: 8, 
              },
            }}
          >
            <Bar data={horizontalBarData} options={horizontalOptions} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.dark,
              padding: "20px",
              borderRadius: "10px",
              boxShadow: 3,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: 'transform 0.2s, box-shadow 0.2s', 
              '&:hover': {
                transform: 'scale(1.02)', 
                boxShadow: 8, 
              },
            }}
          >
            <Line data={lineData} options={options} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Charts;
