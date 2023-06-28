import React, { useState } from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'



const useStyles = makeStyles()((theme) => {
	return {
		root: {
		},
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
		<button className={ classes.root } onClick={changeLanguage}>
			{currentLanguage}
		</button>
	)
}



export default LocaleButton