import React from "react"
import { makeStyles } from "tss-react/mui"
/* import { useNavigate } from "react-router" */



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			justifyContent: "center",
			alignContent: "center",

			width: "100%",
			padding: "5px 0",
            zIndex: 4,

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))",
            backdropFilter: "blur(20px)",

			[theme.breakpoints.down('sm')]: {
				height: theme.spacing(14),	
			},
			[theme.breakpoints.up('sm')]: {
				height: theme.spacing(12),	
			},
			[theme.breakpoints.up('md')]: {
				height: theme.spacing(16),	
			}
		},
		name: {
			alignSelf: "center",
			color: "white",

			fontSize: theme.typography.pxToRem(24)
		},
		nav: {

		},
	}
})



const Header = () => {
	const { classes } = useStyles()
    /* const navigate = useNavigate() */


	return (
		<header className={ classes.root }>
			<h1 className={ classes.name }>Florian DOUAY</h1>

			<nav className={ classes.nav }>
				<button className={ classes.navLink }>TEST</button>
				<button className={ classes.navLink }>TEST</button>
			</nav>
		</header>
	)
}



export default Header