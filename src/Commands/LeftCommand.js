class LeftCommand {

    execute(currentPoints, currentDirection, maxwidth, maxheight) {
        let updatedDirection
        if (currentDirection) {
            switch (true){
                case /^north$/i.test(currentDirection.trim()):
                    updatedDirection = 'WEST'
                    break
                case /^south$/i.test(currentDirection.trim()):
                    updatedDirection = 'EAST'
                    break
                case /^east$/i.test(currentDirection.trim()):
                    updatedDirection = 'NORTH'
                    break
                case /^west$/i.test(currentDirection.trim()):
                    updatedDirection = 'SOUTH'
                    break
                default:
                    return {error: 'Invalid Direction'}
            }
            return {position: currentPoints, direction: updatedDirection}
        }
        return {error: 'Robot needs to be placed before calling the left command'}
        
    }
}

export default LeftCommand