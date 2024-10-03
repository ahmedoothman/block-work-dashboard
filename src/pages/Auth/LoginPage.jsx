import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import Logo from '../../components/logo';
import theme from "../../mui/theme";


export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginPending, setLoginPending] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginPending(true);
    const response = await loginService({ email, password });
    if (response.status === 'success') {
      dispatch(authActions.login(response.data));
     
      navigate('dashboard');
    } else {
      setError(response.message);
    }
    setLoginPending(false);
  };
  // console.log("-----email----",email);
  // console.log("------Password-----", password);

  return (
    <Container 
      component='main'
      maxWidth={false} 
      disableGutters
      sx={{ 
        backgroundColor: "black",
        height: "100vh", 
        width: "100%",
      }}
    >
      <CssBaseline />
     
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', 
          height: '100%', 
          padding: 3, 
      
        }}
      >
        <Typography component='h1' variant='h5'>
           <Logo />  
        </Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>

          <TextField
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2,backgroundColor:theme.palette.secondary.light,borderRadius:1}}
          />
          <TextField
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2,backgroundColor:theme.palette.secondary.light,borderRadius:1 }}
          />
          {error && (
            <Alert severity='error' sx={{ marginBottom: '5px' }}>
              {error}
            </Alert>
          )}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {loginPending ? (
              <CircularProgress color='inherit' size={25} />
            ) : (
              'Login'
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
