import {
	alpha,
	AppBar,
	Badge,
	IconButton,
	InputBase,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { Cancel, Search, ShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	logoLg: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	logoSm: {
		display: "block",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	search: {
		display: "flex",
		alignItems: "center",
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		borderRadius: theme.shape.borderRadius,
		width: "50%",
		[theme.breakpoints.down("sm")]: {
			display: (props) => (props.open ? "flex" : "none"),
			width: "70%",
		},
	},
	input: {
		color: "white",
		marginLeft: theme.spacing(1),
	},
	cancel: {
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	searchButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	icons: {
		alignItems: "center",
		display: (props) => (props.open ? "none" : "flex"),
	}
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles({ open });

	const cartProducts = useSelector((state) => state.cartProducts);
	// console.log(cartProducts);

	return (
		<AppBar position="fixed">
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" className={classes.logoLg}>
					E Commerce
				</Typography>
				<Typography variant="h6" className={classes.logoSm}>
					E Commerce
				</Typography>
				<div className={classes.search}>
					<Search />
					<InputBase placeholder="Search..." className={classes.input} />
					<Cancel className={classes.cancel} onClick={() => setOpen(false)} />
				</div>
				<div className={classes.icons}>
					<Search
						className={classes.searchButton}
						onClick={() => setOpen(true)}
					/>
					<IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
						<Badge badgeContent={cartProducts.length} color="secondary">
							<ShoppingCart />
						</Badge>
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
