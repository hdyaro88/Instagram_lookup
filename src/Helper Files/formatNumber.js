export const formatNumber=(toFormat)=>{
    if(toFormat>0&&toFormat<=999){
        return  parseFloat(toFormat).toFixed(0)      
    }
    if(toFormat>999&&toFormat<=999999){
        return parseFloat(toFormat/1000).toFixed(0)+"K"      
    }
    if(toFormat>999999){
        return parseFloat(toFormat/1000000).toFixed(0)+"M"      
    }
    else return toFormat
}