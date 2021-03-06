import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Typography, Button, withStyles, Paper } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Images/Hero/Hero";

const styles = ({ palette: { primary }, breakpoints }) => ({
	heroText: {
		background: "none",
		padding: "2rem 2rem 0",
		[breakpoints.up("md")]: {
			marginTop: "8.5rem",
			padding: "2.8rem 3.5rem 0"
		}
	},
	heroImage: {
		marginTop: "1.5rem",
		width: "16rem",
		[breakpoints.up("md")]: {
			marginTop: "3rem",
			width: "80%"
		}
	},
	svgFill: {
		fill: primary.main
	},
	headline: {
		fontSize: "1.5rem",
		[breakpoints.up("md")]: {
			fontSize: "2.125rem"
		}
	},
	subHeadline: {
		fontSize: "0.875rem",
		[breakpoints.up("md")]: {
			fontSize: "1rem"
		}
	}
});

class Home extends Component {
	render() {
		const {
			classes: { heroText, heroImage, svgFill, headline, subHeadline }
		} = this.props;

		return (
			<Fragment>
				<Layout>
					<Grid container>
						<Grid item xs={12} md={6}>
							<Paper
								elevation={0}
								classes={{
									root: heroText
								}}
							>
								<Typography
									paragraph
									classes={{
										root: headline
									}}
									color="primary"
								>
									Chat with random People
								</Typography>
								<Typography
									paragraph
									classes={{
										root: subHeadline
									}}
									color="textSecondary"
								>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Aspernatur blanditiis
									eaque nobis vitae facere voluptatum!
									Repudiandae, officia porro aliquid alias
									quis possimus architecto nesciunt.
								</Typography>
								<Button
									variant="raised"
									component={NavLink}
									to="/user/signup"
									color="primary"
									style={{
										marginTop: ".8rem"
									}}
								>
									Get Started
								</Button>
							</Paper>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography align="center">
								<Hero className={heroImage} primary={svgFill} />
							</Typography>
						</Grid>
					</Grid>
				</Layout>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
