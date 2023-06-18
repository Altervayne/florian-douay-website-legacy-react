import React from "react"
import { makeStyles } from "tss-react/mui"

import { useTranslation } from "react-i18next"



const useStyles = makeStyles()((theme) => {
	return {
        root: {
            display: "flex",
            flexDirection: "column",

            position: "relative",
            zIndex: 2,

            width: "100%",
        },
		nameTitle: {
            alignSelf: "flex-start",

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
			}
        },
        name: {
            color: "#F5B041"
        },
        jobTitle: {
            alignSelf: "flex-end",

            display: "flex",
            alignItems: "center",

            color: "white",
            fontSize: theme.typography.pxToRem(44),

            [theme.breakpoints.down('sm')]: {
				marginRight: "10vw",	
			},
			[theme.breakpoints.up('sm')]: {
				marginRight: "5vw",
			},
			[theme.breakpoints.up('md')]: {
				marginRight: "13vw",
                marginTop: "3vh",
			}
        },
        jobSpecializationRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            color: "#F5B041",

            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        jobSpecializationMain: {
            padding: 0,
            margin: 0,
        },
        jobSpecializationSecondary: {
            padding: 0,
            margin: 0,

            opacity: ".5",
        }
	}
})



const HomeTitle = () => {
	const { classes } = useStyles()
    const { t } = useTranslation()


	return (
		<div className={ classes.root }>
            <h2 className={ classes.nameTitle }>
                {t("welcomeNameTitle")}
                <span className={ classes.name }> Florian Douay</span>
            </h2>
            <h2 className={ classes.jobTitle }>
                {t("welcomeJobTitleStart")}

                <div className={ classes.jobSpecializationRoot }>
                    <p className={ classes.jobSpecializationSecondary }>Front-end</p>
                    <p className={ classes.jobSpecializationMain }>Fullstack</p>
                    <p className={ classes.jobSpecializationSecondary }>Back-end</p>
                </div>

                {t("welcomeJobTitleEnd")}
            </h2>
        </div>
	)
}



export default HomeTitle