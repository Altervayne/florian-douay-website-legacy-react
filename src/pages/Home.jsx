import React from "react"
import { makeStyles } from "tss-react/mui"
/* import { useNavigate } from "react-router" */

import Header from "../components/Header"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
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
			</div>
}



export default Home