// import React, { useEffect, useRef, useState } from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import TextField from '@material-ui/core/TextField';
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   root: {
//     'incrementer-input': {
//       width: '2em',
//       textAlign: 'center'
//     }
//   }
// }));

// const Incrementer = (props) => {
//   const classes = useStyles();
//   const { initialValue } = props;
//   const [ count, setCount ] = useState(initialValue || 1);
  
//   const ref = useRef(count);

//   useEffect(() => {
//     ref.current = count;
//   });

//   function decrement() {
//     setCount(count - 1);
//   }

//   function increment() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <IconButton aria-label="remove from shopping cart" onClick={decrement}>
//         <RemoveIcon />
//       </IconButton>
//       <TextField variant="outlined" className={classes['incrementer-input']} value={count} />
//       <IconButton aria-label="add to shopping cart" onClick={increment}>
//         <AddIcon />
//       </IconButton>
//     </div>
//   );
// }

// export default Incrementer;

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    'incrementer-input': {
      width: '2em',
      textAlign: 'center'
    }
  }
}));

const Incrementer = (props) => {
  const classes = useStyles();
  const { value, onDecrement, onIncrement } = props;

  return (
    <div>
      <IconButton aria-label="remove from shopping cart" onClick={onDecrement}>
        <RemoveIcon />
      </IconButton>
      <TextField variant="outlined" className={classes['incrementer-input']} value={value} />
      <IconButton aria-label="add to shopping cart" onClick={onIncrement}>
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default Incrementer;