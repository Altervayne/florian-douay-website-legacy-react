import React from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"

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

const notFoundText = "La page que vous cherchez est introuvable"

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.02,
        }
    }
}

const letter = {
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

            color: "#F2F4F8",

            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))",
            backdropFilter: "blur(20px)",

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
                    variants={ sentence }
                    initial="hidden"
                    animate="visible"
                >
                    {notFoundText.split("").map((char, index) => {
                        return (
                            <motion.span key={ char + "-" + index } variants={ letter }>
                                {char}
                            </motion.span>
                        )
                    })}                    
                </motion.h2>

                <motion.div 
                    onClick={() => ( window.location.href="/" )}
                    className={ classes.linkContainer }
                    whileHover={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.12)",
                        backgroundColor: "rgba(255, 255, 255, .1)",
                    }}
                >
                        <h2 className={ classes.linkText }>Retourner à la page d'accueil</h2>
                </motion.div>
            </div>
}

export default PageNotFound