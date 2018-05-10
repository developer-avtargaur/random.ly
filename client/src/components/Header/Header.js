import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Button,
	withStyles,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon
} from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";
import Favourite from "@material-ui/icons/Favorite";
import Lock from "@material-ui/icons/Lock";

const styles = {
	flex: {
		flex: 1
	},
	marginLeft: {
		marginLeft: ".2rem"
	}
};

class Header extends Component {
	state = {
		right: false
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { title, classes, isMobile } = this.props;

		let barBtn = (
			<Fragment>
				<Button
					className={classes.marginLeft}
					variant="flat"
					component={NavLink}
					to="/user/login"
				>
					Login
				</Button>
				<Button
					className={classes.marginLeft}
					variant="raised"
					component={NavLink}
					to="/user/signup"
					color="primary"
				>
					Signup
				</Button>
			</Fragment>
		);
		if (isMobile) {
			barBtn = (
				<Fragment>
					<IconButton
						onClick={this.toggleDrawer("right", true)}
						color="inherit"
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<AppBar position="static" color="default">
					<Toolbar>
						<Typography
							variant="title"
							color="inherit"
							className={classes.flex}
						>
							{title}
						</Typography>
						{barBtn}
					</Toolbar>
				</AppBar>
				<Drawer
					anchor="right"
					open={this.state.right}
					onClose={this.toggleDrawer("right", false)}
					transitionDuration={250}
				>
					<List component="nav">
						<ListItem button component={NavLink} to="/user/signup">
							<ListItemIcon>
								<Favourite color="primary" />
							</ListItemIcon>
							<ListItemText primary="Signup" />
						</ListItem>
						<ListItem button component={NavLink} to="/user/login">
							<ListItemIcon>
								<Lock color="primary" />
							</ListItemIcon>
							<ListItemText primary="Login" />
						</ListItem>
					</List>
				</Drawer>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		isMobile: state.common.isMobile
	};
};

export default withStyles(styles)(connect(mapStateToProps)(Header));