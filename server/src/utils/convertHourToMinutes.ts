export default function convertHourToMinutes(time: string) {
  /**
   * 9:30 will become an array where array[0] = 9 and array[1] = 30
   * Then, multiply the hour by 60 and add the minutes = 570 minutes
   * 9:30 is equivalent to 570 minutes
   */

  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
