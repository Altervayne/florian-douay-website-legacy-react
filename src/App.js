import React from "react"
import { makeStyles } from "tss-react/mui"
import ReactRoutes from "./Routes.jsx"
import AnimationCanvas from "./components/AnimationCanvas.jsx"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "fixed",
			zIndex: 0,
			top: 0,
			left: 0,

			display: "flex",
			flexDirection: "column",
			alignItems: "center",

			width: "100vw",
			height: "100vh",

			backgroundColor: "black",
			background: "linear-gradient(235deg, hsla(284, 95%, 8%, 1) 0%, #0F131E 100%)"
		},
	}
})



const App = () => {
	const { classes } = useStyles()

	return (
		<div className={classes.root}>
			<AnimationCanvas />
			<ReactRoutes />
		</div>
	)
}



export default App