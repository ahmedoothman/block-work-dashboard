import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { verifyUser } from '../services/userService';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import theme from '../mui/theme';

function UserDetails() {
  const { users } = useSelector((state) => state.users);
  const { userId } = useParams();
  const user = users.find((user) => user._id === userId);
  const [userData, setuserData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    country: user.country || '',
    jobTitle: user.jobTitle || '',
    bio: user.bio || '',
    skills: user.skills || [],
    role: user.role || '',
    userPhotoUrl: user.userPhotoUrl || 'https://via.placeholder.com/150',
    frontIdPhotoUrl: user.frontIdPhotoUrl || 'https://via.placeholder.com/150',
    backIdPhotoUrl: user.backIdPhotoUrl || 'https://via.placeholder.com/150',
    nationalId: user.nationalId || 'https://via.placeholder.com/150',
    verified: user.verified || false,
  });
  const [Isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [errormessage, setErrorMessage] = useState('');

  const handelApprove = async () => {
    const response = await verifyUser(userId);
    if ((response.status = 'success')) {
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
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container
        sx={{
          marginTop: '40px', // Added larger margin for spacing
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.secondary.light,
          width: 700, // Slightly narrower for a cleaner look
          borderRadius: 3,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
          padding: '24px', // Added padding inside container
          mb: 3,
        }}
      >
        {/* Avatar & Name Section */}
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems='center'
          sx={{
            paddingBottom: '24px',
            borderBottom: `1px solid ${theme.palette.divider}`,
          }} // Added border for section separation
        >
          <Stack flexDirection={'row'} alignItems='center'>
            <Avatar
              alt='profile photo'
              src={userData.userPhotoUrl}
              sx={{ width: 120, height: 120, marginRight: '16px' }}
            />
            <Stack>
              <Typography
                variant='h5'
                color={theme.palette.text.primary}
                sx={{ fontWeight: 'bold' }} // Make the name bold for emphasis
              >
                {userData.name?.charAt(0).toUpperCase() +
                  userData.name?.slice(1)}
              </Typography>
              <Typography
                variant='subtitle1'
                color={theme.palette.text.secondary}
              >
                {userData.role?.charAt(0).toUpperCase() +
                  userData.role?.slice(1)}
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: user.verified
                    ? theme.palette.success.main
                    : theme.palette.error.main,
                  fontWeight: 'bold',
                }}
              >
                {userData.verified ? 'Verified' : 'Not Verified'}
              </Typography>
            </Stack>
          </Stack>
          {/* Contact Info Section */}
          <Stack>
            <Typography
              variant='subtitle1'
              component='p'
              color={theme.palette.text.secondary}
              sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
            >
              <PhoneIcon
                sx={{ marginRight: '8px', color: theme.palette.text.primary }}
              />
              {userData.phone}
            </Typography>
            <Typography
              variant='subtitle1'
              component='p'
              color={theme.palette.text.secondary}
              sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
            >
              <BadgeIcon
                sx={{ marginRight: '8px', color: theme.palette.text.primary }}
              />
              {userData.nationalId}
            </Typography>
            <Typography
              variant='subtitle1'
              component='p'
              color={theme.palette.text.secondary}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <EmailIcon
                sx={{ marginRight: '8px', color: theme.palette.text.primary }}
              />
              {userData.email}
            </Typography>
          </Stack>
        </Stack>

        {/* Additional Information Section */}
        <Stack
          sx={{
            padding: '24px 0',
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant='subtitle1'
            color={theme.palette.text.secondary}
            gutterBottom
          >
            <LocationOnIcon
              sx={{ marginRight: '4px', verticalAlign: 'middle' }}
            />
            {userData.country?.charAt(0).toUpperCase() + user.country?.slice(1)}
          </Typography>
          <Typography
            variant='subtitle1'
            color={theme.palette.text.primary}
            gutterBottom
          >
            <span
              style={{
                fontWeight: 'bold',
                color: theme.palette.text.secondary,
              }}
            >
              Title:
            </span>{' '}
            {userData.jobTitle || 'Frontend Developer'}
          </Typography>
          <Typography
            variant='subtitle1'
            color={theme.palette.text.primary}
            gutterBottom
          >
            <span
              style={{
                fontWeight: 'bold',
                color: theme.palette.text.secondary,
              }}
            >
              Bio:
            </span>{' '}
            {userData.bio?.charAt(0).toUpperCase() + userData.bio?.slice(1) ||
              'I am a freelancer'}
          </Typography>
          <Typography variant='subtitle1' color={theme.palette.text.primary}>
            <span
              style={{
                fontWeight: 'bold',
                color: theme.palette.text.secondary,
              }}
            >
              Skills:
            </span>{' '}
            {userData.skills?.join(', ') || 'JavaScript, CSS, HTML'}
          </Typography>
        </Stack>

        {/* ID Images Section */}
        <Stack flexDirection={'row'} justifyContent='space-between' mt={2}>
          <Container>
            <img
              src={userData.frontIdPhotoUrl}
              alt='User Front ID'
              style={{
                objectFit: 'cover',
                borderRadius: '8px',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <Typography
              variant='subtitle2'
              align='center'
              color={theme.palette.text.secondary}
              mt={1}
            >
              Front ID
            </Typography>
          </Container>
          <Container>
            <img
              src={userData.backIdPhotoUrl}
              alt='User Back ID'
              style={{
                objectFit: 'cover',
                borderRadius: '8px',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <Typography
              variant='subtitle2'
              align='center'
              color={theme.palette.text.secondary}
              mt={1}
            >
              Back ID
            </Typography>
          </Container>
        </Stack>

        {/* Approve Button */}
        <Stack alignSelf={'center'} mt={3}>
          <Button
            variant='contained'
            onClick={handleBtn}
            disabled={Isloading}
            sx={{
              fontSize: '18px',
              textTransform: 'none',
              backgroundColor: theme.palette.primary.dark,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
              padding: '12px 24px',
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
