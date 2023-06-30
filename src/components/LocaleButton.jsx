import React, { useState } from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "relative",

			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",

			borderRadius: theme.spacing(2),

			width: theme.spacing(8),
			padding: theme.spacing(1.1),
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1),

			backgroundColor: "rgba(0, 0, 0, 0.2)",
			border: "none",
			ouline: "none",
		},
		buttonText: {
			padding: 0,
			margin: 0,

			fontSize: theme.typography.pxToRem(14),
			fontWeight: "600",

			color: "white",
		},
		selector: {
			position: "absolute",
			left: theme.spacing(0.5),

			width: theme.spacing(3.5),
			height: theme.spacing(3.5),
			borderRadius: theme.spacing(1.75),

			backgroundColor: "rgba(255, 255, 255, 0.4)"
		}
	}
})



const LocaleButton = ({ languageChangeKey, changeKey }) => {
	const { classes } = useStyles()
	const { i18n, t } = useTranslation()

	const [currentLanguage, changeCurrentLanguage] = useState(i18n.language)
	function changeLanguage(event) {
		event.preventDefault()

		if(currentLanguage === "en") {
			i18n.changeLanguage("fr")
		} else {
			i18n.changeLanguage("en")
		}

		changeCurrentLanguage(i18n.language)
		changeKey(languageChangeKey + 1)
	}


	return (
		<button className={ classes.root } onClick={ changeLanguage }>
			<p className={ classes.buttonText }>EN</p>
			<p className={ classes.buttonText }>FR</p>
			<div className={ classes.selector }></div>
		</button>
	)
}



export default LocaleButton