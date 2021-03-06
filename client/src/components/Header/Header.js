import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Button,
	withStyles,
	withWidth,
	Hidden
} from "@material-ui/core";
import compose from "recompose/compose";
import MenuIcon from "@material-ui/icons/Menu";

import Logo from "../Images/Logo/RandomLyFull";
import ThemeChooser from "../ThemeChooser/ThemeChooser";

const styles = ({ palette: { primary }, breakpoints }) => ({
	headerLogo: {
		flex: 1,
		textAlign: "center",
		[breakpoints.up("md")]: {
			textAlign: "left"
		}
	},
	white: {
		background: "#fff"
	},
	headerBtns: {
		marginLeft: ".75rem"
	},
	toolbar: {
		padding: "0 5px",
		[breakpoints.up("md")]: {
			padding: "0 24px"
		}
	},
	svgFill: {
		fill: primary.main
	}
});

const header = ({
	classes: { white, headerLogo, headerBtns, toolbar, svgFill },
	isAuth,
	toggleDrawer,
	location: { pathname, search }
}) => {
	return (
		<Fragment>
			<AppBar
				position="static"
				color="default"
				classes={{
					root: white
				}}
			>
				<Toolbar classes={{ gutters: toolbar }}>
					<Hidden implementation="css" mdUp>
						<IconButton
							onClick={toggleDrawer("left", true)}
							color="inherit"
							aria-label="Menu"
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Typography
						variant="title"
						color="inherit"
						className={headerLogo}
					>
						<NavLink
							to={{
								pathname,
								search
							}}
							style={{
								lineHeight: 0
							}}
						>
							<Logo width={105} color={svgFill} />
						</NavLink>
					</Typography>
					<ThemeChooser />
					<Hidden implementation="css" smDown>
						{!isAuth && (
							<Fragment>
								<Button
									classes={{
										root: headerBtns
									}}
									variant="flat"
									component={NavLink}
									to="/user/login"
								>
									Login
								</Button>
								<Button
									classes={{
										root: headerBtns
									}}
									variant="raised"
									component={NavLink}
									to="/user/signup"
									color="primary"
								>
									Signup
								</Button>
							</Fragment>
						)}
					</Hidden>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
};

export default compose(
	withStyles(styles),
	withWidth()
)(header);
