const formateDate = (date) => {
    console.log(date);
    let d = new Date(date)
    console.log("d->",d);
    let month = `${d.getMonth() + 1}`
    let dayNum = `${d.getDate()}`
    const year = d.getFullYear()

    // Formate - 2021 - 01 - 15
    if (month.length < 2) {
        month = `0${month}`
    }
    if (dayNum.length < 2) {
        dayNum = `0${dayNum}`
    }

    return [year,month,dayNum].join('-')
}

export default formateDate