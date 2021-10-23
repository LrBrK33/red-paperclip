import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

import ListItemIcon from '@mui/material/ListItemIcon';
import ForumIcon from '@mui/icons-material/Forum';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logout from '@mui/icons-material/Logout';
import AuthModal from './AuthModal';
import { ItemsContext } from '../ItemsContext';

const Hamburger = () => {
  const { isLoggedInState, currentUserState, showAuthModalState, activeItemState, menuOpenState } = useContext(ItemsContext);
  const [activeItem, setActiveItem] = activeItemState;
  const [isLoggedIn, setIsLoggedIn] = isLoggedInState;
  const [currentUser, setCurrentUser] = currentUserState;
  const [showAuthModal, setShowAuthModal] = showAuthModalState;
  const [menuOpen, setMenuOpen] = menuOpenState;
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignInClick = () => {
    setShowAuthModal(true);
    setIsReturningUser(true);
    setAnchorEl(null);
  };

  const handleCreateAcctClick = () => {
    setIsReturningUser(false);
    setShowAuthModal(true);
    setAnchorEl(null);
    setMenuOpen(true);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  // React Router Navigation
  const history = useHistory();

  const handleSignOut = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    setIsReturningUser(false);
    setShowAuthModal(false);
    setMenuOpen(false);
    setCurrentUser({
      userFirst: '',
      userLast: '',
      userPFP: '',
      userPhone: '',
      userEmail: '',
      userZIP: '',
      availableItem: '',
      tradeHistory: [],
      watchedItems: {},
    });
    setActiveItem({
      createdAt: '',
      itemOwner: '',
      active: false,
      itemOwnerPhoto: '',
      report: 0,
      itemDescription: '',
      itemOwnerUID: '',
      itemCategory: '',
      itemPhoto: '',
      itemName: '',
      itemLocation: '',
    });
    history.push('/');
  };

  const handleHomeClick = () => {
    history.push('/');
    setMenuOpen(false);
  };

  const handleMyProfileClick = () => {
    history.push('/profile');
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleChatsClick = () => {
    history.push('/chat');
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleAdminClick = () => {
    history.push('/admin');
    setMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isLoggedIn ? (
          <Box>
            <MenuItem onClick={handleHomeClick}>
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              Home
            </MenuItem>
            <MenuItem onClick={handleMyProfileClick}>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleChatsClick}>
              <ListItemIcon>
                <ForumIcon fontSize="small" />
              </ListItemIcon>
              My Chats
            </MenuItem>
            <Divider />
            {currentUser.permissions === "admin" && <MenuItem onClick={handleAdminClick}>
              <ListItemIcon>
                <AdminPanelSettingsIcon fontSize="small" />
              </ListItemIcon>
              Admin
            </MenuItem>}
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <MenuItem onClick={handleSignInClick}>Sign In</MenuItem>
            <MenuItem onClick={handleCreateAcctClick}>Create Account</MenuItem>
          </Box>
        )}
      </Menu>
      {showAuthModal && (
        <AuthModal
          setMenuOpen={setMenuOpen}
          anchorEl={anchorEl}
          menuOpen={menuOpen}
          handleMenuOpen={handleMenuOpen}
          isReturningUser={isReturningUser}
        />
      )}
    </Box>
  );
};

export default Hamburger;
