import React from "react";
import { Grid } from "@material-ui/core";
import { Navbar, Sidebar, Products, Footer } from '../components';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item sm={10} xs={10}>
                    <Products />
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Home;