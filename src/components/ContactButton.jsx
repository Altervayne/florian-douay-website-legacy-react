import React, { useState } from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

import { BsLinkedin, BsGithub, BsAt } from "react-icons/bs"



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

		},
		contactItemRoot: {

		}
	}
})



const ContactItem = (isLink, link, text, IconName) => {
	const { classes } = useStyles()



	return (
		<motion.div>
			<IconName />

			{ isLink 	?	<>
								<motion.a className={ classes.text } variants={ textVariants } href={ link }>{ text }</motion.a>
								<motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
							</>
						:	<p>{ text }</p>
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
			<motion.div className={ classes.contactWindow }>
				<ContactItem isLink={ true } link={ "https://github.com/Altervayne/" } text={t("GitHub")} IconName={"BsGithub"}/>
				<ContactItem isLink={ true } link={ "https://www.linkedin.com/in/florian-douay/" } text={t("LinkedIn")} IconName={"BsLinkedin"}/>
				<ContactItem isLink={ false } link={ null } text={ "contact@florian-douay.fr" } IconName={"BsAt"}/>
			</motion.div>
		</>
	)
}



export default ContactButton