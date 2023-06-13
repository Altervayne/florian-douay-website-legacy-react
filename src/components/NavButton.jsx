import React from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useNavigate } from "react-router"
import { useTranslation } from 'react-i18next'



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
		}
	}
})



const NavButton = ({ label, link }) => {
	const { classes } = useStyles()
    const navigate = useNavigate()
	const { t } = useTranslation()


	return (
		<motion.button className={ classes.root } initial="rest" animate="rest" whileHover="hover" onClick={() => navigate(link)}>
			<motion.span className={ classes.text } variants={ textVariants }>{t(label)}</motion.span>
			<motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
		</motion.button>
	)
}



export default NavButton