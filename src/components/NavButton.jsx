import React from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useNavigate } from "react-router"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "relative",

			margin: theme.spacing(2),
			padding: 0,

			fontWeight: 600,
			fontSize: theme.typography.pxToRem(18),

			backgroundColor: "transparent",
			color: "white",
			outline: "none",
			border: "none",

			cursor: "pointer",
		},
	}
})



const NavButton = ({ label, link }) => {
	const { classes } = useStyles()
    const navigate = useNavigate()


	return (
		<motion.button className={ classes.root } onClick={() => navigate(link)}>
			<p>{ label }</p>
		</motion.button>
	)
}



export default NavButton