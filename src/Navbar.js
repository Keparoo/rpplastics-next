import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { Box, Menu, MenuItem, Stack, Tooltip } from '@mui/material';
import Image from 'next/image';
import Link from './Link';

const Navbar = () => {
  const [ anchorElNav, setAnchorElNav ] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navLinks = [
    {
      name: 'About',
      href: '#about',
      target: false
    },
    {
      name: 'Products',
      href: '#products',
      target: false
    },
    {
      name: 'Contact',
      href: '#contact',
      target: false
    },
    {
      name: 'Dial: 978-297-1115',
      href: 'tel:978-297-1115',
      target: false
    }
  ];
  /*
    fontFamily: 'asap',
    fontWeight: 700,
    <CodeIcon sx={{ display: { md: 'flex' }, mr: 1 }} />


  */

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            href="#home"
            size="large"
            edge="start"
            color="inherit"
            aria-label="code icon"
          >
            <Image
              src="/images/rp_logo_a_1600x510.svg"
              alt="R&P Logo"
              layout="fixed"
              width={200}
              height={64}
            />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            {' '}
          </Typography>

          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="headings of website"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { sm: 'block', md: 'none' }
              }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.name} onClick={handleCloseNavMenu}>
                  <Button
                    color="inherit"
                    href={link.href}
                    target={link.target ? '_blank' : ''}
                  >
                    {link.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, mr: 1 }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                color="inherit"
                href={link.href}
                target={link.target ? '_blank' : ''}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
