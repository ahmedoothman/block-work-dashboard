import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { Box, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import UserBox from '../components/dashboard/UserBox';
import NoDataBox from '../components/NoDataBox';
import SearchBar from '../components/dashboard/SearchBar';
import UsersFilter from '../components/dashboard/UsersFilter';

import { getAllUsers } from '../services/userService';
import { userActions } from '../store/users-slice';
import { useDispatch } from 'react-redux';
import theme from '../mui/theme';
function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await getAllUsers();
      if (response.status === 'success') {
        // remove user with name System
        const filteredUsers = response.data.filter(
          (user) => user.name !== 'System'
        );
        setUsers(filteredUsers);
        setFilteredUsers(filteredUsers);
        dispatch(userActions.setUsers(response.data));
      } else {
        setError(true);
        setErrorMessage(response.message);
        setUsers([]);
        setFilteredUsers([]);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, []);
  // console.log("userrrrs",users);

  function showAllUsers() {
    // console.log("All users shooownn")
    setFilteredUsers(users);
  }

  function showPendingUsers() {
    // console.log(" Pending userss shooownn")
    const notVerfiedUsers = users.filter((user) => !user.verified);
    setFilteredUsers(notVerfiedUsers);
  }

  return (
    <Container
      component='main'
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: 'black',
        width: '100%',
        minHeight: '100vh',
        paddingBlock: '20px',
      }}
    >
      {/*  Search and filter  Section in Page*/}
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'space-around',
        }}
      >
        <UsersFilter
          showAllUsers={showAllUsers}
          showPendingUsers={showPendingUsers}
        />
        <SearchBar users={users} setFilteredUsers={setFilteredUsers} />
      </Stack>

      {isLoading ? (
        <Box style={styles.loadingIndicator}>
          <CircularProgress
            sx={{
              color: theme.palette.primary.main,
            }}
            size={80}
          />
        </Box>
      ) : error ? (
        <Alert severity='error' sx={{ marginBottom: '5px' }}>
          {errorMessage}
        </Alert>
      ) : filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <UserBox key={user._id} userData={user} />)
      ) : (
        <NoDataBox
          Title={'No Users Found'}
          Message={'Users will appear here once available.'}
          show={false}
        />
      )}
    </Container>
  );
}

const styles = {
  loadingIndicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
  },
};

export default Users;
