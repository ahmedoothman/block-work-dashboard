import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { contractsActions } from '../store/contracts-slice';
import { getAllContractsService } from '../services/contractService';

import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { Box, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import ContractBox from '../components/contracts/ContractBox';
import SearchBarContract from '../components/contracts/SearchBarContract';
import HeaderContractsGrid from '../components/contracts/HeaderContractsGrid';
import NoDataBox from '../components/NoDataBox';
import { color } from 'chart.js/helpers';

function Contracts() {
  const [contracts, setContracts] = useState([]);
  const [filteredContracts, setFilteredContracts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContracts = async () => {
      setIsLoading(true);
      const response = await getAllContractsService();
      if (response.status === 'success') {
        setContracts(response.data);
        setFilteredContracts(response.data);
        dispatch(contractsActions.setContracts(response.data));
      } else {
        setError(true);
        setErrorMessage(response.message);
        setContracts([]);
        setFilteredContracts([]);
      }
      setIsLoading(false);
    };
    fetchContracts();
  }, [dispatch]);

  console.log('contractsssss', contracts[0]);

  return (
    <Container
      component='main'
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: 'black',
        // height: "100vh",
        minHeight: '100vh',
        width: '100%',
        overflowY: 'auto',
      }}
    >
      {/* Search and Filter Section */}
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <SearchBarContract
          contracts={contracts}
          setFilteredContracts={setFilteredContracts}
        />
      </Stack>

      {/* Loading Indicator */}
      {isLoading ? (
        <Box style={styles.loadingIndicator}>
          <CircularProgress color='inherit' size={80} />
        </Box>
      ) : error ? (
        <Alert severity='error' sx={{ marginBottom: '5px' }}>
          {errorMessage}
        </Alert>
      ) : (
        <>
          {filteredContracts.length > 0 && <HeaderContractsGrid />}
          {/* Contracts List */}
          {filteredContracts.length > 0 ? (
            filteredContracts.map((contract, index) => (
              <ContractBox
                key={contract.job?._id || index}
                contractData={contract}
              />
            ))
          ) : (
            <NoDataBox
              Title={'No Contracts Found'}
              Message={'Contracts will appear here once available.'}
              show={false}
            />
          )}
        </>
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
    color: 'white',
  },
};

export default Contracts;
