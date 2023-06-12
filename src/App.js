import React from "react"
import { makeStyles } from "tss-react/mui"
import ReactRoutes from "./Routes.jsx"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",

			width: "100%",
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
			<ReactRoutes />
		</div>
	)
}



export default App