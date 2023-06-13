import { addCircle, drawCircles } from './animationLogic'



function canvasAnimation(canvas, ctx) {

    /* Setting canvas dimensions */
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight


    /* Initializing the circles array */
    let circles = []
    const circleAmount = 50


    /* Dealing with window being resized */
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


    for(let i = 0; i < circleAmount; i++) {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height

        addCircle(canvas, circles, x, y)
    }

    
    /* Initializing animate function then starting animation */
    function animate() {
        requestAnimationFrame(animate)
        drawCircles()
    }

    animate()
}



export default canvasAnimation()