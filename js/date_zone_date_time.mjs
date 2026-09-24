import { arguments_assert } from "./arguments_assert.mjs";
export function date_zone_date_time(d, zone) {
  "$plain d";
  "$plain zone";
  "What a clock on the wall in a named zone like 'Asia/Manila' reads at a moment: the date 'YYYY-MM-DD' and the time 'HH:MM' on the twenty-four hour clock - the shapes a date box and a time box read and write. The zone's own rules decide it, summer time included, whatever zone this device is set to.";
  arguments_assert(arguments, 2);
  let format = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  let parts = {};
  for (let part of format.formatToParts(d)) {
    parts[part.type] = part.value;
  }
  let date = parts.year + "-" + parts.month + "-" + parts.day;
  let time = parts.hour + ":" + parts.minute;
  let r = {
    date,
    time,
  };
  return r;
}
