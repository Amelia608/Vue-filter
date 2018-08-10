const normalTime = (time) => {
    if (time) {
        var now = new Date();
        now.setTime(time);
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        month=month<10?"0"+month:month;
        date=date<10?"0"+date:date;
        seconds=seconds<10?"0"+seconds:seconds;
        return year + "-" + month + "-" + date + " " + hours + "-" + minutes + "-" + seconds;
    }
}
const currency=(val)=>{
    if(val){
        return "¥"+val;
    }
}

export default{
    normalTime,
    currency
}