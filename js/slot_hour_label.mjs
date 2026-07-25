import { not } from "./not.mjs";
import { hour_label_12 } from "./hour_label_12.mjs";
export function slot_hour_label(slot) {
  "the clock label shown beside a 30-minute piece: the 12-hour hour name at the start of each hour (piece 0 is '12 AM', piece 18 is '9 AM'), and an empty string on the half-hour piece so each hour is labelled once";
  let on_the_hour = slot % 2 === 0;
  if (not(on_the_hour)) {
    return "";
  }
  let hour = slot / 2;
  return hour_label_12(hour);
}
