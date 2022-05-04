import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { styled } from '@mui/material/styles';
// import { Tooltip } from '@material-ui/core';

// * Custom Tooltip Component
// const LightTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.white,
//     color: 'rgba(0, 0, 0, 0.87)',
//     boxShadow: theme.shadows[1],
//     fontSize: 11,
//   },
// }));



const theme = createTheme({
  palette: {
    primary: {
      main: '#143D59',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

const DataTable = ({ listing, responseMetadata }) => {


  const StyledGridOverlay = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }));

  function CustomNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        {responseMetadata === 'norecords' ? (
          'No results found'
        ) : (
          <CircularProgress disableShrink />
        )}
      </StyledGridOverlay>
    );
  }

  const columns = [
    {
      field: 'Name',
      headerClassName: 'super-app-theme--header',
      headerName: 'Name',
      width:120

    },
    {
      field: 'OwnerId',
      headerClassName: 'super-app-theme--header',
      headerName: 'Owner Id',
      width:140
    },
    {
      field: 'Inspection_Id_18_Digit__c',
      headerClassName: 'super-app-theme--header',
      headerName: 'Inspection Id',
      width:170
    },
    {
      field: 'RecordTypeId',
      headerClassName: 'super-app-theme--header',
      headerName: 'Record Type Id',
      width:170
    },
    {
      field: 'CreatedDate',
      headerClassName: 'super-app-theme--header',
      headerName: 'Created Date',
      width:170
    },

    {
      field: 'Property_Address__c',
      headerClassName: 'super-app-theme--header',
      headerName: 'Property Address',
      width:190
    },

    {
      field: 'Property_Zip_Code__c',
      headerClassName: 'super-app-theme--header',
      headerName: 'ZIP',
    },
    {
      field: 'Property_City__c',
      headerClassName: 'super-app-theme--header',
      headerName: 'Property City',
      width:170
    },

  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: '100%', height: 600 }}>
        <DataGrid
          sx={{

            '& .ellipsis-text': {
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            '& .super-app-theme--header': {
              color: '#FD7565',
              fontSize: '20px',
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
            '& .MuiDataGrid-columnHeaderTitleContainer': {
              padding: '0px',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 700,
            },
            '& .MuiCheckbox-root svg': {
              width: 18,
              height: 18,
              backgroundColor: 'transparent',
              borderRadius: 1,
            },
            '.MuiPagination-ul': {
              display: 'none',
            },
            '& .MuiPaginationItem-icon': {
              backgroundColor: '#FF7F50',
              borderRadius: 9,
              width: 24,
              height: 24,
            },
            '& .MuiPagination-root  MuiPaginationItem': {
              marginTop: '-70px',
            },
            '& .MuiDataGrid-cell': {
              fontSize: '14px',
              color: '#143D59',
              fontWeight: 100,
            },
            '& .super-app-theme--cell': {
              color: '#3090C7',
              fontSize: '14px',
              fontWeight: 100,
              textDecoration: 'underline',
              cursor: 'pointer',
            },
            '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
              outline: 'none',
            },
          }}
          getRowId={(r) => r.Id}
          rows={listing}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableColumnMenu
          disableSelectionOnClick
          pagination
          components={{
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default DataTable;
