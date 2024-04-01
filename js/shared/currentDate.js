export function getCurrentDate() {
    const currentDate = new Date();
    return currentDate;
}

export function getYear(currentDate) {
    const year = currentDate.getFullYear();
    return year; 
}

export function getMonth(currentDate) {
    const month = currentDate.getMonth() + 1;
    return month;
}

export function getDate(currentDate) {
    const date = currentDate.getDate()
    return date;
}

export function getHours(currentDate) {
    const hours = currentDate.getHours();
    return hours;
}

export function getMinutes(currentDate) {
    const minutes = currentDate.getMinutes();
    return minutes;
}