export default function convertMinsToHrsMins(mins: number) {
  if (mins) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    const hWithZeros = h < 10 ? "0" + h : h;
    const mWithZeros = m < 10 ? "0" + m : m;
    return `${hWithZeros} ${h > 1 ? "hours" : "hour"} ${mWithZeros} ${
      m > 1 ? "minutes" : "minute"
    }`;
  }
}
