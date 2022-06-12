import React from 'react';
import { useField } from 'formik';
import MUITextField from '@material-ui/core/TextField';

function TextField(props) {
  const { name, ...rest } = props;
  const [ field, { error } ] = useField({ name, type: name });

  return (
    <MUITextField
      {...field}
      {...rest}
      error={!!error}
      helperText={error}
      variant="outlined"
    />
  );
}

export default TextField;