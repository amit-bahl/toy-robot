class MoveCommand {

    execute(currentPoints, currentDirection, maxwidth, maxheight) {
        if (currentPoints) {
            let updatedPoints = [...currentPoints]
            switch (true){
                case /^north$/i.test(currentDirection.trim()):
                    updatedPoints = [updatedPoints[0], updatedPoints[1]+1]
                    break
                case /^south$/i.test(currentDirection.trim()):
                    updatedPoints = [updatedPoints[0], updatedPoints[1]-1]
                    break
                case /^east$/i.test(currentDirection.trim()):
                    updatedPoints = [updatedPoints[0]+1, updatedPoints[1]]
                    break
                case /^west$/i.test(currentDirection.trim()):
                    updatedPoints = [updatedPoints[0]-1, updatedPoints[1]]
                    break
            }

            if (updatedPoints[0]<maxwidth&&updatedPoints[1]<maxheight&&updatedPoints[0]>=0&&updatedPoints[1]>=0) {
                return {position: updatedPoints}
            }
            return {error: 'Unsafe move Robot will fall of the table.'}
        }   
        return {error: 'Cannot move until Robot has been placed.'}
    }
}

export default MoveCommand
