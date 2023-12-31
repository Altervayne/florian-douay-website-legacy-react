import React from "react"
import { makeStyles } from "tss-react/mui"
import { useMediaQuery, useTheme } from "@mui/material"

import NavButton from "./NavButton"
import ContactButton from "./ContactButton"
import LocaleButton from "./LocaleButton"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",

			position: "relative",

			width: "100%",
            zIndex: 4,

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))",
            backdropFilter: "blur(2px)",

			[theme.breakpoints.down('sm')]: {
				padding: "0 5vw",

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
		name: {
			alignSelf: "center",
			color: "white",


			[theme.breakpoints.down('sm')]: {
				flexGrow: "1",
				width: "15%",

				fontSize: theme.typography.pxToRem(20),
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: theme.typography.pxToRem(24),
			},
		},
		nav: {
			display: "flex",
			alignItems: "center",
		},
	}
})



const Header = ({ languageChangeKey, changeKey }) => {
	const { classes } = useStyles()
	const theme = useTheme()
	

	const isPhoneScreen = useMediaQuery(theme.breakpoints.down('sm'))


	return (
		<header className={ classes.root }>
			<h1 className={ classes.name }>Florian DOUAY</h1>

			<nav className={ classes.nav }>
				{ !isPhoneScreen && <>
										<NavButton label="navHome" link="/" />
										<NavButton label="navRésumé" link="/cv" />
										<NavButton label="navPortfolio" link="/portfolio" />
									</> }

				<ContactButton />

				<LocaleButton languageChangeKey={ languageChangeKey } changeKey={ changeKey }/>
			</nav>
		</header>
	)
}



export default Header