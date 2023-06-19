import React from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"

import { useTranslation } from "react-i18next"



function getVariant(isFirstPart, previousStringsLength, delayModifier) {
    if(isFirstPart) {
        return {
            hidden: {
                opacity: 0,
                y: 50,
            },
            visible: {
                opacity: 1,
                y: 0,
            }
        }
    }

    const delay = (previousStringsLength * 0.03) + delayModifier

    return {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
            }
        }
    }
}

const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.03,
        }
    }
}



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

                    <motion.span
                        variants={ sentenceVariant }
                        initial="hidden"
                        animate="visible"
                    >

                        {t("welcomeNameTitle").split(",")[0].split("").map((char, index) => {
                            return (
                                <motion.span key={ char + "-" + index } variants={ getVariant(true, 0, 0) }>
                                    {char}
                                </motion.span>
                            )
                        })}
                        <motion.span variants={ getVariant(true, 0, 0) }>
                            ,
                        </motion.span>

                    </motion.span>
                    <motion.span
                        variants={ sentenceVariant }
                        initial="hidden"
                        animate="visible"
                    >

                        {t("welcomeNameTitle").split(",")[1].split("").map((char, index) => {
                            return (
                                <motion.span key={ char + "-" + index } variants={ getVariant(false, (t("welcomeNameTitle").split(",")[0].split("").length + 1), (index * 0.03 + 0.3)) }>
                                    {char}
                                </motion.span>
                            )
                        })}

                    </motion.span>
                    <motion.span className={ classes.name }
                        variants={ sentenceVariant }
                        initial="hidden"
                        animate="visible"
                    >

                        {" Florian Douay".split("").map((char, index) => {
                            return (
                                <motion.span key={ char + "-" + index } variants={ getVariant(false, (t("welcomeNameTitle").split("").length), (index * 0.03 + 0.3)) }>
                                    {char}
                                </motion.span>
                            )
                        })}

                    </motion.span>

            </h2>



            <h2 className={ classes.jobTitle }
                /* variants={  }
                initial="hidden"
                animate="visible" */>
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