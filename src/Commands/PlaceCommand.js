class PlaceCommand {
    constructor(points, direction) {
        this.points = points;
        this.direction = direction;
    } 
    execute(currentPoints, currectDirection, maxwidth, maxheight) {
        if (this.points[0]>=0 && this.points[0]<maxwidth && this.points[1]>=0 && this.points[1]<maxheight) {
            return {
                position: this.points,
                direction: this.direction.toUpperCase() 
            }
        }
        return {
            error: 'Invalid placement on the current board.'
        }
        
    }
}

export default PlaceCommand