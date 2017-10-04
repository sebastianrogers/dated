var sia = sia || {};
sia.dated = sia.dated || {};

sia.dated.getBoundary = function(boundaryMoment) {
    const boundary = {};

    const offset = 1 - boundaryMoment.weekday();

    boundary.moment = moment(boundaryMoment).add(offset, 'days');

    switch (boundaryMoment.weekday()) {
        case 0: // Sunday
        boundary.offset = 6;
        break;
        case 1: // Monday
        boundary.offset = 5;
        break;
        case 2: // Tuesday
        boundary.offset = 4;
        break;
        case 3: // Wedneday
        boundary.offset = 3;
        break;
        case 4: // Thursday
        boundary.offset = 2;
        break;
        case 5: // Friday
        boundary.offset = 1;
        break;
        case 6: // Saturday
        boundary.offset = 1;
        break;
    }

    return boundary;
};

sia.dated.workdays = function(firstMoment, lastMoment) {

    const firstBoundary = sia.dated.getBoundary(firstMoment);
    const lastBoundary = sia.dated.getBoundary(lastMoment);

    const boundaryDiff = lastBoundary.moment.diff(firstBoundary.moment, 'days');
    const boundaryWeeks = Math.floor(boundaryDiff / 7);

    return (boundaryWeeks * 5) + firstBoundary.offset - lastBoundary.offset;
};