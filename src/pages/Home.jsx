import React from "react";

import { Grid } from "@material-ui/core";
import { Navbar, Sidebar, Footer } from '../components';

import { ProductListing } from './'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item sm={10} xs={10}>
                    <ProductListing />
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Home;