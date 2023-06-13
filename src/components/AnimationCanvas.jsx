import React, { useRef, useEffect } from 'react'
import { makeStyles } from "tss-react/mui"
import canvasAnimation from '../helpers/canvasAnimation'



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "fixed",
            zIndex: "0",
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
        const circles = []

        canvasAnimation(canvas, context, circles)

        function windowResizeHandler() {
            console.log("window resize detected")
    
            const previousWidth = canvas.width
            const previousHeight = canvas.height
            const newWidth = window.innerWidth
            const newHeight = window.innerHeight
    
            const xRatio = previousWidth/newWidth
            const yRatio = previousHeight/newHeight
    
            canvas.width = newWidth
            canvas.height = newHeight
    
    
            for(let circle of circles) {
                circle.x /= xRatio
                circle.y /= yRatio
            }
        }

        window.addEventListener('resize', windowResizeHandler, true)

        return () => {
            window.removeEventListener('resize', windowResizeHandler, true)
        }
    }, [])



    return <canvas className={ classes.root } ref={ canvasRef } />
}



export default AnimationCanvas