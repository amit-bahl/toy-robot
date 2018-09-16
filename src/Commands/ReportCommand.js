class ReportCommand {

    execute(currentPoints, currentDirection, maxwidth, maxheight) {
        if (currentPoints) {
            return {report: true}
        }
       return {error: 'Robot needs to be placed before it can report the location.'}
    }
}

export default ReportCommand