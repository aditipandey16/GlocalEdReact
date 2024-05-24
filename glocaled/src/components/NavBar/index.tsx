import { Box, IconButton, Link, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';

const NavLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Demo",
        link: "/demo",
    },
    {
        name: "Certifications",
        link: "/certifications",
    },
    {
        name: "Countries",
        link: "/countries",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Why Us",
        link: "/why-us",
    },
    {
        name: "Cofounders",
        link: "/cofounders",
    },
    {
        name: "Testimonials",
        link: "/testimonials",
    },
]

const Navbar = () => {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    };

    const handleContactOpen = () => {
        setContactOpen(!contactOpen);
    };

    const handleClose = () => {
        setMenuOpen(false);
        setContactOpen(false);
    };

    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/example_instagram", "_blank");
    };

    const handleEmailClick = () => {
        window.open("mailto:example@example.com");
    };

    const handlePhoneClick = () => {
        window.open("tel:+1234567890");
    };

    return (
        <AppBar sx={{ bgcolor: "white" }} position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }} >
                        <img src='/glocaled_logo.png' alt="Logo" height="50"/>
                    </a>
                </Box>

                <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 20px",
                    }}
                >
                </Box>
                <Box sx={{ display: { xs: "block", lg: "none" } }}>
                    <IconButton
                        aria-label="menu"
                        color="inherit"
                        onClick={handleMenuOpen}
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        aria-label="call"
                        color="inherit"
                        onClick={handleContactOpen}
                    >
                        <CallIcon />
                    </IconButton>
                </Box>

                {/* Navigation Links */}
                <Box
                    sx={{
                        display: { xs: "none", lg: "flex" },
                        justifyContent: "center",
                        flex: "1", // Fill remaining space
                    }}
                >
                    {NavLinks.map((link, index) => (
                        <Link
                            key={index}
                            component={RouterLink}
                            to={link.link}
                            underline="none"
                            color={pathname === link.link ? "primary" : "text.primary"}
                            sx={{ mx: 2, fontWeight: pathname === link.link ? "bold" : "normal" }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </Box>

                {/* Contact Button for large screens */}
                <IconButton
                    aria-label="contact"
                    color="inherit"
                    onClick={handleContactOpen}
                    sx={{ display: { xs: "none", lg: "block" } }}
                >
                    <CallIcon />
                </IconButton>

                {/* Contact Details Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {NavLinks.map((link, index) => (
                        <MenuItem key={index} onClick={handleClose} component={RouterLink} to={link.link}>
                            {link.name}
                        </MenuItem>
                    ))}
                </Menu>

                {/* Contact Details Menu */}
                <Menu
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    anchorEl={contactOpen ? document.body : null}
                    open={contactOpen}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleEmailClick}>
                        <EmailIcon sx={{ mr: 1 }} /> Email
                    </MenuItem>
                    <MenuItem onClick={handlePhoneClick}>
                        <PhoneIcon sx={{ mr: 1 }} /> Phone
                    </MenuItem>
                    <MenuItem onClick={handleInstagramClick}>
                        <InstagramIcon sx={{ mr: 1 }} /> Instagram
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
