import React from "react"
import { makeStyles } from "tss-react/mui"
/* import { useNavigate } from "react-router" */

import Header from "../components/Header"
import HomeTitle from "../components/HomeTitle"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",

			width: "100%",
			height: "100%",
		},
	}
})



const Home = () => {
    const { classes } = useStyles()
	/* const navigate = useNavigate() */



    return 	<div className={ classes.root }>
				<Header />
				<HomeTitle />
			</div>
}



export default Home