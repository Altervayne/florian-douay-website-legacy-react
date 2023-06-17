import React from "react"
import { makeStyles } from "tss-react/mui"
/* import { useNavigate } from "react-router" */

import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeTitle from "../components/HomeTitle"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "space-between",

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
				<Footer />
			</div>
}



export default Home