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



const LocaleButton = () => {
	const { classes } = useStyles()
	const { t } = useTranslation()

	const [currentLanguage, changeCurrentLanguage] = useState(t.language)
	function changeLanguage() {
		if(currentLanguage === "en") {
			t.changeLanguage("fr")
		} else {
			t.changeLanguage("en")
		}

		changeCurrentLanguage(t.language)
	}


	return (
		<div>
		</div>
	)
}



export default LocaleButton