import React, { useState } from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

import { BsLinkedin, BsGithub, BsEnvelopeAtFill } from "react-icons/bs"



const textVariants = {
	rest: {
		color: "rgba(255, 255, 255, 1)",
		transition: { duration: 0.1 }
	},
	hover: {
		color: "rgba(245, 176, 65, 1)",
		transition: { duration: 0.1 }
	}
}

const underlineVariants = {
	rest: {
		opacity: 0,
		width: "0px",
		transition: { duration: 0.1 }
	},
	hover: {
		opacity: 1,
		width: "100%",
		transition: { duration: 0.1 }
	}
}



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "relative",

			margin: theme.spacing(3),
			padding: 0,

			fontWeight: 600,
			fontSize: theme.typography.pxToRem(18),

			backgroundColor: "transparent",
			color: "white",
			outline: "none",
			border: "none",

			cursor: "pointer",
		},
		text: {
			margin: 0,
			padding: 0,
		},
		underline: {
			position: "absolute",
			left: 0,
			bottom: 0,

			height: "2px",
			width: "100%",
			backgroundColor: "#F5B041",
		},
		contactWindow: {
			position: "fixed",
			right: theme.spacing(2),


			borderRadius: theme.spacing(2),
			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))",
            backdropFilter: "blur(2px)",


			[theme.breakpoints.down('sm')]: {
				top: theme.spacing(16),	
			},
			[theme.breakpoints.up('sm')]: {
				top: theme.spacing(14),	
			},
			[theme.breakpoints.up('md')]: {
				top: theme.spacing(18),
			}
		},
		contactItemRoot: {
			display: "flex",
			alignItems: "center",

			margin: theme.spacing(2),
			padding: 0,

			fontWeight: 600,

			backgroundColor: "transparent",
			color: "white",
			outline: "none",
			border: "none",
		},
		contactIcon: {
			marginRight: theme.spacing(1),

			fontSize: theme.typography.pxToRem(24),
		},
		contactText: {
			position: "relative",

			margin: 0,
			padding: 0,

			textDecoration: "none",
			color: "white",
		}
	}
})



const ContactItem = ({isLink, link, text, icon}) => {
	const { classes } = useStyles()

	let IconComponent
	switch (icon) {
		case "github":
			IconComponent = BsGithub
			break;
		case "linkedin":
			IconComponent = BsLinkedin
			break;
		case "email":
			IconComponent = BsEnvelopeAtFill
			break;
		default:
			break;
	}

	return (
		<motion.div className={ classes.contactItemRoot }>
			<IconComponent className={ classes.contactIcon } />

			{ isLink 	?	<>
								<motion.a className={ classes.contactText } href={ link }
									initial="rest" animate="rest" whileHover="hover"
									variants={ textVariants }					
								>
									{ text }
									<motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
								</motion.a>
								
							</>
						:	<p className={ classes.contactText }>{ text }</p>
			}


		</motion.div>
	)
}



const ContactButton = () => {
	const { classes } = useStyles()
	const { t } = useTranslation()


    const [isOpen, setIsOpen] = useState(false)


	return (
		<>
			<motion.button className={ classes.root } initial="rest" animate="rest" whileHover="hover" onClick={() => setIsOpen(!isOpen)}>
				<motion.span className={ classes.text } variants={ textVariants }>{t("contactMe")}</motion.span>
				<motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
			</motion.button>
			<motion.div className={ classes.contactWindow }
						initial={{
							opacity: 0,
							visibility: "hidden",
							transition: {
								duration: 0.3,
								visibility: {
									delay: 0.3
								}	
							}
						}}
						animate={{
							opacity: isOpen ? 1 : 0,
							visibility: isOpen ? "visible" : "hidden",
							transition: {
								duration: 0.3,
								visibility: {
									delay: isOpen ? 0 : 0.3
								}
							}
						}}
			>
				<ContactItem isLink={ true } link={ "https://github.com/Altervayne/" } text={t("GitHub")} icon={"github"}/>
				<ContactItem isLink={ true } link={ "https://www.linkedin.com/in/florian-douay/" } text={t("LinkedIn")} icon={"linkedin"}/>
				<ContactItem isLink={ true } link={ "mailto:contact@florian-douay.fr" } text={ "contact@florian-douay.fr" } icon={"email"}/>
			</motion.div>
		</>
	)
}



export default ContactButton