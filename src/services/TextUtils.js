export default {
    secondsToPrintable(rawSeconds) {
        const seconds = parseInt(rawSeconds, 10);
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        min = min < 10 ? `0${min}` : min;
        sec = sec < 10 ? `0${sec}` : sec;

        return `${min}:${sec}`;
    },
};