import React from "react"
import { makeStyles } from "tss-react/mui"

import { useTranslation } from "react-i18next"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
            position: "relative",
            alignSelf: "flex-start",
            zIndex: 2,

            color: "white",
            fontSize: theme.typography.pxToRem(44),

            [theme.breakpoints.down('sm')]: {
				marginLeft: "10vw",	
			},
			[theme.breakpoints.up('sm')]: {
				marginLeft: "5vw",
			},
			[theme.breakpoints.up('md')]: {
				marginLeft: "13vw",
                marginTop: "20vh",
			}
        },
        name: {
            color: "#F5B041"
        }
	}
})



const HomeTitle = () => {
	const { classes } = useStyles()
    const { t } = useTranslation()


	return (
		<h2 className={ classes.root }>
            {t("welcomeTitle")}
            <span className={ classes.name }> Florian Douay</span>
        </h2>
	)
}



export default HomeTitle