import React from "react"
import { makeStyles } from "tss-react/mui"

import NavButton from "./NavButton"
import { useTranslation } from "react-i18next"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
            position: "relative",
            zIndex: 2,

            color: "white",
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