import React from "react"
import { makeStyles } from "tss-react/mui"
import { useTranslation } from 'react-i18next'



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",

			position: "relative",

			width: "100%",
            zIndex: 4,

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.3))",
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
		copyright: {
			color: "white",
		},
	}
})



const Footer = () => {
	const { classes } = useStyles()
	const { t } = useTranslation()


	return (
		<footer className={ classes.root }>
			<p className={ classes.copyright }>{t("copyright")}</p>
		</footer>
	)
}



export default Footer