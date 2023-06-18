import React from "react"
import { makeStyles } from "tss-react/mui"
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"

import { BsLinkedin, BsGithub } from "react-icons/bs"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			alignItems: "center",

			position: "relative",

			width: "100%",
            zIndex: 4,

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.3))",
            backdropFilter: "blur(2px)",

			[theme.breakpoints.down('sm')]: {
				padding: "0 10vw",

				height: theme.spacing(14),	
			},
			[theme.breakpoints.up('sm')]: {
				padding: "0 5vw",

				height: theme.spacing(12),	
			},
			[theme.breakpoints.up('md')]: {
				padding: "0 13vw",

				height: theme.spacing(16),
			}
		},
		socialsRoot: {
			display: "flex",
			justifyContent: "space-between",

			minWidth: theme.spacing(10),
			width: "10%",
			maxWidth: theme.spacing(12)
		},
		socialsButton: {
			height: theme.spacing(3.5),
			width: theme.spacing(3.5),

			background: "none",
			outline: "none",
			border: "none",
			padding: "0",
			margin: "0",

			cursor: "pointer",

			color: "rgba(255, 255, 255, 1)"
		},
		socialsIcon: {
			height: "100%",
			width: "100%",
		},
		copyright: {
			color: "white",

			padding: "0",
			margin: "0",
		},
	}
})



const socialsVariants = {
	rest: {
		color: "rgba(255, 255, 255, 1)",
		scale: 1,
		transition: {
			duration: 0.1
		}
	},
	hover: {
		color: "rgba(245, 176, 65, 1)",
		scale: 1.2,
		transition: {
			duration: 0.1
		}
	}
}



const Footer = () => {
	const { classes } = useStyles()
	const { t } = useTranslation()


	return (
		<footer className={ classes.root }>
			<div className={ classes.socialsRoot }>
				<motion.button className={ classes.socialsButton }
					variants={ socialsVariants }
					initial={ "rest" }
					animate={ "rest" }
					whileHover={ "hover" }
				>
					<BsGithub className={ classes.socialsIcon } />
				</motion.button>
				<motion.button className={ classes.socialsButton }
					variants={ socialsVariants }
					initial={ "rest" }
					animate={ "rest" }
					whileHover={ "hover" }
				>
					<BsLinkedin className={ classes.socialsIcon } />
				</motion.button>


			</div>

			<p className={ classes.copyright }>{t("copyright")}</p>
		</footer>
	)
}



export default Footer