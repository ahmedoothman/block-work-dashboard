import React, { useEffect, useState } from "react";
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
import {
  Container,
  Grid,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import theme from "../mui/theme";
import { getStatsService } from "../services/statsService";
import { color } from "chart.js/helpers";

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
  const [ChartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStatsService();
      if (response.status === "success") {
        setChartData(response.data);
      } else {
        console.log(response.message);
      }
    };
    fetchData();
  }, []);

  // Check if ChartData is available before destructuring
  if (!ChartData) {
    return (
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: theme.palette.primary.light }}>
          <CircularProgress
            sx={{
              color: theme.palette.primary.main,
            }}
            size={80}
          />
        </Typography>
      </Container>
    );
  }

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
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
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
        // borderColor: '#00BFFF', // Light Blue
        borderColor: theme.palette.primary.light,
        tension: 0.1,
      },
    ],
  };

  const pieData = {
    labels: ["Freelancers", "Clients"],
    datasets: [
      {
        label: "Users Distribution",
        data: [userCounts.freelancers.count, userCounts.clients.count],
        backgroundColor: [
          // '#FF8C00',
          // '#66BB6A',
          // '#FFEB3B',
          // '#EC407A',
          "#1FD91F",
          "#D9D9D9",
          //  '#00BFFF',
          //  '#42A5F5',
          // '#39d3fa',
          // '#4CAF50',

          // '#26A69A',
          // '#66BB6A',

          "#FF4500",
          "#008080",
        ],
        borderColor: [
          // '#FF8C00',
          // '#00BFFF',
          // '#FF4500',
          // '#008080',
          "#1FD91F",
          "#D9D9D9",
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(230, 230, 250, 1)',
          // 'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: status.map((obj) => obj.statusName),
    datasets: [
      {
        label: "Job Status",
        data: status.map((obj) => obj.numberOfJobs),
        backgroundColor: ["#D9D9D9", "#00BFFF", "#1FD91F"],
        borderColor: ["#D9D9D9", "#00BFFF", "#1FD91F"],
        borderWidth: 2,
      },
    ],
  };

  const horizontalBarData = {
    labels: categories.map((obj) => obj.categoryName),
    datasets: [
      {
        label: "Job Categories",
        data: categories.map((obj) => obj.totalJobs),
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Chart Overview",
        font: {
          size: 24, // Bigger font size
        },
        color: "#FFFFFF", // Ensure this is white
      },
    },
  };

  const horizontalOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Job Categories Overview",
        font: {
          size: 24, // Bigger font size
        },
        color: "#FFFFFF",
      },
    },
    barPercentage: 0.5, // Decrease this to increase space between individual bars (bars from the same dataset)
    categoryPercentage: 0.1,
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
      <Container sx={{ width: "90%" }}>
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
                flexGrow: 1,
                width: "100%", // Ensure it takes full width
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 8,
                },
              }}
            >
              <Bar
                data={barData}
                options={{
                  ...options,
                  plugins: {
                    ...options.plugins, // Spread existing plugins to keep legend settings
                    title: {
                      ...options.plugins.title, // Spread the title options to keep the font size
                      text: "Blockwork Overview", // Title text specific to this chart
                      color: "#FFFFFF", // Explicitly set to white
                    },
                  },
                }}
              />
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
                flexGrow: 1,
                width: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 8,
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                Profit
              </Typography>
              <Box
                sx={{
                  padding: 4,
                  borderRadius: 4,
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
                  sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
                >
                  ${profit.toLocaleString()}
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
                flexGrow: 1,
                width: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 8,
                },
              }}
            >
              <Doughnut
                data={doughnutData}
                options={{
                  ...options,
                  plugins: {
                    ...options.plugins,
                    title: {
                      ...options.plugins.title,
                      text: "Job Status Overview",
                      font: { size: 24, color: "#FFFFFF" },
                    },
                  },
                }}
              />
            </Box>
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} sm={6}>
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
                flexGrow: 1,
                width: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 8,
                },
              }}
            >
              <Pie
                data={pieData}
                options={{
                  ...options,
                  plugins: {
                    ...options.plugins,
                    title: {
                      ...options.plugins.title,
                      text: "Users Distribution Overview",
                      font: { size: 24, color: "#FFFFFF" },
                    },
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
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
                flexGrow: 1,
                width: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 8,
                },
              }}
            >
              <Line
                data={lineData}
                options={{
                  ...options,
                  plugins: {
                    ...options.plugins,
                    title: {
                      ...options.plugins.title,
                      text: "No. Contracts For Each Status",
                      font: { size: 24, color: "#FFFFFF" },
                    },
                  },
                }}
              />
            </Box>
          </Grid>

          {/* Third Row */}
          <Grid item xs={12}>
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
                flexGrow: 1,
                width: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 8,
                },
              }}
            >
              <Bar data={horizontalBarData} options={horizontalOptions} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Charts;
