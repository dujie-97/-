export default function(fn,duration = 100){
    var timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args)
        },duration)
    }
}