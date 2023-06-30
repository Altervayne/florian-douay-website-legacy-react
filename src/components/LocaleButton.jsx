import React, { useState } from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "relative",

			display: "flex",
			justifyContent: "space-around",

			borderRadius: theme.spacing(2),

			width: theme.spacing(8),
			padding: theme.spacing(0.5),

			border: "none",
			ouline: "none",
		},
		buttonText: {
			padding: theme.spacing(0.4),
			margin: 0,
		},
		selector: {
			position: "absolute",
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