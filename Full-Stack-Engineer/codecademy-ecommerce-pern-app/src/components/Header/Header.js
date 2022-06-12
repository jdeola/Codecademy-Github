import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    header: {
      justifyContent: 'space-between'
    }
  }));

  const classes = useStyles();

  const { isAuthenticated } = useSelector(state => state.auth);
  const { items } = useSelector(state => state.cart);

  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          Codecademy Shop
        </Typography>
        <div>
          { !isAuthenticated &&
            <Button color="inherit" component={Link} to={`/login`}>Login</Button>
          }
          { isAuthenticated &&
            <Button color="inherit" component={Link} to={`/orders`}>My Orders</Button>
          }
          <IconButton aria-label="access shopping cart" color="inherit" component={Link} to="/cart">
            <Badge badgeContent={items?.length || 0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;