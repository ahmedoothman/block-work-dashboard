import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { contractsActions } from '../store/contracts-slice';
import { getAllContractsService } from '../services/contractService';

import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { Box, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';

import ContractBox from '../components/contracts/ContractBox';
import SearchBarContract from '../components/contracts/SearchBarContract';
import HeaderContractsGrid from  "../components/contracts/HeaderContractsGrid"
import NoDataBox from '../components/NoDataBox';
import theme from '../mui/theme';

function Contracts() {
  const [contracts, setContracts] = useState([]);
  const [filteredContracts, setFilteredContracts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const contractsPerPage = 3; 

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContracts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllContractsService();
        if (response.status === 'success') {
          setContracts(response.data);
          setFilteredContracts(response.data); 
          dispatch(contractsActions.setContracts(response.data));
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
        setContracts([]);
        setFilteredContracts([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContracts();
  }, [dispatch]);

  // console.log(contracts);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastContract = currentPage * contractsPerPage;
  const indexOfFirstContract = indexOfLastContract - contractsPerPage;
  const currentContracts = filteredContracts.slice(indexOfFirstContract, indexOfLastContract);

  return (
    <Container
      component='main'
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: 'black',
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
          <CircularProgress sx={{ color: theme.palette.primary.main }} size={80} />
        </Box>
      ) : error ? (
        <Alert severity='error' sx={{ marginBottom: '5px' }}>
          {errorMessage}
        </Alert>
      ) : (
        <>
        <HeaderContractsGrid/>
        {/* contract.contract.job?._id  */}
          {currentContracts.length > 0 ? (
            currentContracts.map((contract) => (
              <ContractBox
                key={contract.contract._id} // Ensure a unique key
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

      {/* Pagination */}
      {filteredContracts.length > contractsPerPage && (
        <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', mt: 3 }}>
          <Pagination
            count={Math.ceil(filteredContracts.length / contractsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
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
