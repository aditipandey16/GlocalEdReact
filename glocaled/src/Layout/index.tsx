import { ReactNode } from "react";
import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/NavBar";

interface LayoutProps{
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps ) => {
    return <Box sx={{
        backgroundColor: "hsl(215, 52%, 82%)",
        display: "flex",
        flexDirection:"column",
        paddingTop:1,
        gap: 3,
        // overflowY: "hidden"
        

    }}>
        <Navbar />
        <Box sx = {{width: "100%"}}></Box>
    </Box>;
};

export default Layout;