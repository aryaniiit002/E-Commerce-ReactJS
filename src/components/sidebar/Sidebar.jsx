import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { selectedCategory } from "../../redux/actions/productsActions";

import {
    Link,
    Container,
    makeStyles,
    Typography,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title: {
        fontSize: 35,
        fontWeight: 500,
        color: "#555",
    },
    link: {
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16,
        cursor: "pointer",
    },
    subtitle: {
        fontSize: 25,

    },
}));

const Sidebar = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch();

    const fetchCategories = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products/categories")
            .catch((err) => {
                console.log("Err: ", err);
            });
        setCategories(response.data);
    };

    const categoryClickHandler = (category) => {
        console.log(category)
        dispatch(selectedCategory(category));
    }

    const renderCategories = categories.map((category) => {
        return (
            <Typography className={classes.subtitle} gutterBottom onClick={() => { categoryClickHandler(category) }}>
                <Link className={classes.link} variant="body2">
                    {category.toUpperCase()} <br />
                </Link>
            </Typography>
        )
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>
                Categories
            </Typography>
            <Typography className={classes.subtitle} gutterBottom onClick={() => { categoryClickHandler("") }}>
                <Link className={classes.link} variant="body2">
                    HOME <br />
                </Link>
            </Typography>
            <br />
            <>{categories && renderCategories}</>
        </Container>
    );
};

export default Sidebar;