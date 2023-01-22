export const uniqueDates = (task) => {
    const unique = [];

    task.forEach(element => {
        if (!unique.includes(element.dateFormat)) {
            unique.push(element.dateFormat);
        }
    });

    return unique;
}

export const orderDates = (dates) => {
    return dates.sort((a, b) => {
        const first = moment(a, "DD/MM/YYYY");
        const second = moment(b, "DD/MM/YYYY");
        return first - second;
    });
}