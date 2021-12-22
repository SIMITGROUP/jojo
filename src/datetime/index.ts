export const toDateString = (date: Date, middleString: string): string => {
    let month = '' + (date.getMonth() + 1),
    day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join(middleString);
}

export const toTimeString = (date: Date, middleString: string): string => {
    let hour = '' + (date.getHours()),
    min = '' + date.getMinutes();

    if (hour.length < 2) {
        hour = '0' + hour;
    }

    if (min.length < 2) {
        min = '0' + min;
    }

    return [hour, min].join(middleString);
}