export const dates = [{
    date: '2023-04-13T22:40:00.451Z',
    amount: 1222
},
{
    date: '2023-05-13T23:40:00.451Z',
    amount: 1000
},
{
    date: '2023-04-12T23:40:00.451Z',
    amount: 683
},

{
    date: '2023-02-15T23:40:00.451Z',
    amount: 422
},
{
    date: '2023-07-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-12-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-07-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-02-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-01-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-03-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-01-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-10-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-08-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-05-03T23:40:00.451Z',
    amount: 534
},
{
    date: '2023-11-03T23:40:00.451Z',
    amount: 534
},
];

const formattedDates = dates.map((item) => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return {
        ...item,
        date: formattedDate
    };
});

export const newArray = formattedDates.reduce((acc, curr) => {
    const date = new Date(curr.date)
    const monthName = date.toLocaleString('default', { month: 'long' }); // get month name
    const newDate = date.getMonth()

    const exists = acc.find((item) => item.date === monthName)
    console.log(exists)
    if (exists) {
        exists.amount += curr.amount;
    } else {
        acc.push({ date: monthName, value: newDate, amount: curr.amount });
    }

    acc.sort((a, b) => a.value - b.value)
    return acc
}, [])

// export const newArray = formattedDates.reduce((acc, curr) => {
//     const date = new Date(curr.date)
//     const newDate = date.getMonth()

//     const exists = acc.find((item) => item.date === newDate)
//     if (exists) {
//         exists.amount += curr.amount;
//     } else {
//         acc.push({ date: newDate, amount: curr.amount });
//     }

//     return acc
// }, [])
