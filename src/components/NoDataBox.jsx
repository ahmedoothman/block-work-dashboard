import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import theme from '../mui/theme';

const NoDataBox = ({ Title, Message, OnPress, btnTitle, show }) => {
  return (
    <Container>
      <Box sx={{ margin: 2 }}>
        <Box sx={styles.noDatacontentContainer}>
          <Typography variant='h5' sx={styles.noDataTitle}>
            {Title}
          </Typography>
          <Typography variant='subtitle1' sx={styles.noDataMessage}>
            {Message}
          </Typography>
          {show ? (
            <Button variant='contained' sx={styles.btn} onClick={OnPress}>
              {btnTitle}
            </Button>
          ) : (
            <Box></Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  noDatacontentContainer: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    margin: '50px 0',
  },
  noDataTitle: {
    color: theme.palette.primary.light,
  },
  noDataMessage: {
    color: 'white',
    textAlign: 'center',
    margin: '15px 0',
  },
  btn: {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
};

export default NoDataBox;
