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



	return (
		<div>
		</div>
	)
}



export default LocaleButton