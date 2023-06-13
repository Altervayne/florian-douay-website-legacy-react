import React, { useRef, useEffect } from 'react'
import { makeStyles } from "tss-react/mui"
import canvasAnimation from '../helpers/canvasAnimation'



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "fixed",
            zIndex: "1",
            top: "0",
            left: "0",

            width: "100vw",
            height: "100vh",

            backgroundColor: "transparent",
		},
	}
})



const AnimationCanvas = () => {
    const { classes } = useStyles()
    const canvasRef = useRef()



    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        canvasAnimation(canvas, context)
    }, [])



    return <canvas className={ classes.root } ref={ canvasRef } />
}



export default AnimationCanvas