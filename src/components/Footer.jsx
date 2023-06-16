import React from "react"
import { makeStyles } from "tss-react/mui"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			justifyContent: "space-between",
			alignContent: "center",

			position: "relative",

			width: "100%",
            zIndex: 4,

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(50, 50, 50, 0.1), rgba(50, 50, 50, 0.03))",
            backdropFilter: "blur(2px)",

			[theme.breakpoints.down('sm')]: {
				padding: "0 10vw",

				height: theme.spacing(14),	
			},
			[theme.breakpoints.up('sm')]: {
				padding: "0 5vw",

				height: theme.spacing(12),	
			},
			[theme.breakpoints.up('md')]: {
				padding: "0 13vw",

				height: theme.spacing(16),
			}
		},
	}
})



const Footer = () => {
	const { classes } = useStyles()


	return (
		<footer className={ classes.root }>
		</footer>
	)
}



export default Footer