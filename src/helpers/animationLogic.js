import getRandomInRange from './mathHelpers'



const addCircle = (canvas, circles, x, y) => {
    const radius = Math.random() * 5 + 2

    if(x + radius >= canvas.width) {
        x -= radius
    } else if(x - radius <= 0) {
        x += radius
    }

    if(y + radius >= canvas.height) {
        y -= radius
    } else if(y - radius <= 0) {
        y += radius
    }

    const circle = {
        x: x,
        y: y,
        radius: radius,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        color: `rgba(255, 255, 255, ${getRandomInRange(0.3, 0.8)})`,
        deleted: false
    }

    circles.push(circle)
}



const borderWarp = (canvas, circle) => {
    if(circle.x - circle.radius > canvas.width) {
        circle.x = -circle.radius
    } else if(circle.x + circle.radius < 0) {
        circle.x = canvas.width + circle.radius
    }

    if(circle.y - circle.radius > canvas.height) {
        circle.y = -circle.radius
    } else if(circle.y + circle.radius < 0) {
        circle.y = canvas.height + circle.radius
    }
}



const drawCircles = (ctx, canvas, circles) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for(let circle of circles) {
        circle.x += circle.dx
        circle.y += circle.dy

        borderWarp(canvas, circle)

        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = circle.color
        ctx.fill()
    }
}




export { addCircle, drawCircles }