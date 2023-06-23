import React from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"



const numberVariants = {
    hidden: {
        opacity: 0,
        y: -150,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 1.2,
        }
    },
}

const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.02,
        }
    }
}

const letterVariant = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}



const useStyles = makeStyles()((theme) => {
	return {
		root: {
            position: "absolute",
            zIndex: 99,

			display: "flex",
            flexDirection: "column",

            width: "100vw",
            height: "100%",

            alignItems: "center",
            justifyContent: "center",

            fontFamily: "Helvetica",
		},
        number: {
            fontSize: "10vw",
            margin: 0,

            color: "#F2F4F8",
        },
        text: {
            fontSize: "1.75vw",

            color: "#F2F4F8",
        },
        linkContainer: {
            cursor: "pointer",
            textDecoration: "none",

            color: "rgba(255, 255, 255, 1)",

            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))",
            backdropFilter: "blur(2px)",

            borderRadius: "0.5vw",
        },
        linkText: {
            fontSize: "1vw",

            margin: "0.75vw 0.75vw",
        }
	}
})



const PageNotFound = () => {
    const { classes } = useStyles()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const notFoundText = t("pageNotFound")





    return  <div className={ classes.root }>
                <motion.h1
                    className={ classes.number }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ numberVariants }
                >
                    404
                </motion.h1>

                <motion.h2
                    className={ classes.text }
                    variants={ sentenceVariant }
                    initial="hidden"
                    animate="visible"
                >
                    {notFoundText.split("").map((char, index) => {
                        return (
                            <motion.span key={ char + "-" + index } variants={ letterVariant }>
                                {char}
                            </motion.span>
                        )
                    })}                    
                </motion.h2>

                <motion.div 
                    onClick={() => navigate("/")}
                    className={ classes.linkContainer }
                    whileHover={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.12)",
                        backgroundColor: "rgba(255, 255, 255, .1)",
                        color: "rgba(245, 176, 65, 1)"
                    }}
                >
                        <h2 className={ classes.linkText }>{t("goBack")}</h2>
                </motion.div>
            </div>
}



export default PageNotFound