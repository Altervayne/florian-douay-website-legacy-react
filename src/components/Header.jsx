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
		titleAndLocale: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			width: "100%",
		},
		name: {
			alignSelf: "center",
			color: "white",

			fontSize: theme.typography.pxToRem(24)
		},
		nav: {
			display: "flex",
			alignItems: "center",
		},
	}
})



const HeaderContentPhone = ({ languageChangeKey, changeKey }) => {
	const { classes } = useStyles()



	return (
		<>
			<div className={ classes.titleAndLocale }>
				<h1 className={ classes.name }>Florian DOUAY</h1>
				<LocaleButton languageChangeKey={ languageChangeKey } changeKey={ changeKey }/>
			</div>
			

			<ContactButton />
		</>
	)
}

const HeaderContentNormal = ({ languageChangeKey, changeKey }) => {
	const { classes } = useStyles()



	return (
		<>
			<h1 className={ classes.name }>Florian DOUAY</h1>

			<nav className={ classes.nav }>
				<NavButton label="navHome" link="/" />
				<NavButton label="navRésumé" link="/cv" />
				<NavButton label="navPortfolio" link="/portfolio" />

				<ContactButton />

				<LocaleButton languageChangeKey={ languageChangeKey } changeKey={ changeKey }/>
			</nav>
		</>
	)
}



const Header = ({ languageChangeKey, changeKey }) => {
	const { classes } = useStyles()
	const theme = useTheme()
	

	const isPhoneScreen = useMediaQuery(theme.breakpoints.down('sm'))


	return (
		<header className={ classes.root }>
			{ isPhoneScreen	? <HeaderContentPhone languageChangeKey={ languageChangeKey } changeKey={ changeKey }/>
							: <HeaderContentNormal languageChangeKey={ languageChangeKey } changeKey={ changeKey }/>
			}
		</header>
	)
}



export default Header