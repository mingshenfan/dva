// 格式化实际事件
export function formatTime(time){
    let min =parseInt(time%3600/60)+'',
    sec = parseInt(time%60)+'';
    return min.padStart(2, '0')+':'+sec.padStart(2,'0');
}