export const getNDaysAgo = (date) => {
    var today = new Date();
    var createdOn = new Date(date);
    var msInDay = 24 * 60 * 60 * 1000;

    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0)

    var diff = (+today - +createdOn) / msInDay
    return diff;
}

export const dateInWords = (date) => {
    var d = new Date(date),
        month = d.toLocaleString('default', { month: 'long' }),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('-');
}

export const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })