export default {
    secondsToPrintable(rawSeconds) {
        let seconds = parseInt(rawSeconds, 10);
        let h = Math.floor(seconds / 3600);
        seconds %= 3600
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        min = min < 10 ? `0${min}` : min;
        sec = sec < 10 ? `0${sec}` : sec;

        let prepend = '';
        if (h > 0) {
            prepend = `${h}:`;
        }

        return `${prepend}${min}:${sec}`;
    },

    distanceToPrintable(floatNumber) {
        return parseFloat((Math.round(floatNumber * 100) / 100).toFixed(1));
    },
};