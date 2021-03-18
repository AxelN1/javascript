function formatDate(x) {
    y = new Date(x);
​
    var month = ( 1 + y.getMonth());
    var year = y.getFullYear();
    var day = y.getDate();
​
    // if(day.length > 1 && month.length > 1){
    //     day = "0"+ day 
    //     month = "0" + month;
    // }
​
    console.log(month);
    console.log(year);
    console.log(day);
    // return month + year + day
    console.log(day + '/' + month + '/' + year);
}
formatDate("2020-2-18");