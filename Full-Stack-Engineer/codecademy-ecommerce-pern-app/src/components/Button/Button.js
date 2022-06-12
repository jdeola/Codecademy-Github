import React from 'react';
import MUIButton from '@material-ui/core/Button';
import CircularProgess from '@material-ui/core/CircularProgress';

function Button(props) {

  const { children, isLoading, ...rest } = props;

  return (
    <MUIButton {...rest}>
      {!isLoading && children}
      {isLoading && <CircularProgess color="secondary"/>}
    </MUIButton>
  );
}

export default Button;