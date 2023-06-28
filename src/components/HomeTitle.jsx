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

const transparentSentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: .5,
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



const HomeTitle = ({ languageChangeKey }) => {
	const { classes } = useStyles()
    const { t } = useTranslation()

    const fullNameStringLength = (t("welcomeNameTitle")+" Florian Douay").split("").length



	return (
		<div className={ classes.root } key={ languageChangeKey }>

            <h2 className={ classes.nameTitle }>

                    <motion.span
                        variants={ sentenceVariant }
                        initial="hidden"
                        animate="visible"
                    >

                        {t("welcomeNameTitle").split(",").map((sentence, index) => {

                            if(index === 0) {
                                const currentSentenceArray = sentence.split("")
                                currentSentenceArray.push(",")
                                return currentSentenceArray.map((char, letterIndex) => {
                                            return (
                                                <motion.span key={ char + "-" + letterIndex } variants={ getVariant(true, 0, 0) }>
                                                    {char}
                                                </motion.span>
                                            )
                                        })
                            } else {
                                const currentSentenceArray = sentence.split("")
                                const previousLength = t("welcomeNameTitle").split(",")[0].split("").length + 1

                                return currentSentenceArray.map((char, letterIndex) => {
                                            return (
                                                <motion.span key={ char + "-" + letterIndex } variants={ getVariant(false, previousLength, (letterIndex * 0.03 + 0.3)) }>
                                                    {char}
                                                </motion.span>
                                            )
                                        })
                            }

                        })}

                    </motion.span>


                    <motion.span className={ classes.name }
                        variants={ sentenceVariant }
                        initial="hidden"
                        animate="visible"
                    >

                        {t("myName").split("").map((char, index) => {
                            return (
                                <motion.span key={ char + "-" + index } variants={ getVariant(false, (t("welcomeNameTitle").split("").length), (index * 0.03 + 0.3)) }>
                                    {char}
                                </motion.span>
                            )
                        })}

                    </motion.span>

            </h2>



            <h2 className={ classes.jobTitle }>
                <motion.span
                    variants={ sentenceVariant }
                    initial="hidden"
                    animate="visible"
                >
                    {t("welcomeJobTitleStart").split("").map((char, index) => {
                        return (
                            <motion.span key={ char + "-" + index } variants={ getVariant(false, fullNameStringLength, (index * 0.03 + 0.6)) }>
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.span>

                <div className={ classes.jobSpecializationRoot }>
                    <motion.p className={ classes.jobSpecializationSecondary }
                        variants={ transparentSentenceVariant }
                        initial="hidden"
                        animate="visible"
                    >
                        {t("frontend").split("").map((char, index) => {
                            return (
                                <motion.span key={ char + "-" + index } variants={ getVariant(false, (fullNameStringLength+t("welcomeJobTitleStart").split("").length), (index * 0.03 + 0.6)) }>
                                    {char}
                                </motion.span>
                            )
                        })}
                    </motion.p>

                    <motion.p className={ classes.jobSpecializationMain }
                        variants={ sentenceVariant }
                        initial="hidden"
                        animate="visible"
                    >
                        {t("fullstack").split("").map((char, index) => {
                            return (
                                <motion.span key={ char + "-" + index } variants={ getVariant(false, (fullNameStringLength+t("welcomeJobTitleStart").split("").length), (index * 0.03 + 0.6)) }>
                                    {char}
                                </motion.span>
                            )
                        })}
                    </motion.p>

                    <motion.p className={ classes.jobSpecializationSecondary }
                        variants={ transparentSentenceVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        {t("backend").split("").map((char, index) => {
                            return (
                                <motion.span key={ char + "-" + index } variants={ getVariant(false, (fullNameStringLength+t("welcomeJobTitleStart").split("").length), (index * 0.03 + 0.6)) }>
                                    {char}
                                </motion.span>
                            )
                        })}
                    </motion.p>

                </div>

                <motion.span
                    variants={ sentenceVariant }
                    initial="hidden"
                    animate="visible"
                >
                    {t("welcomeJobTitleEnd").split("").map((char, index) => {
                        return (
                            <motion.span key={ char + "-" + index } variants={ getVariant(false, (fullNameStringLength+t("welcomeJobTitleStart").split("").length+9), (index * 0.03 + 0.6)) }>
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.span>
            </h2>
            
        </div>
	)
}



export default HomeTitle