import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, FormControl } from '@mui/material';

export default function ComboBox({dados, label, campoId}) {

  return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <Autocomplete
              disablePortal
              id={campoId}
              options={dados}
              renderInput={(params) => <TextField {...params} label={label} />}
            />

        </FormControl>
    </Box>
  );
}
