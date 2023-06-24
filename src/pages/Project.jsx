import React from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
		},
	}
})



const Project = () => {
    const { classes } = useStyles()
    const { t } = useTranslation()





    return  <div className={ classes.root }>
            </div>
}



export default Project