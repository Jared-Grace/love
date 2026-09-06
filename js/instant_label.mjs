import { arguments_assert } from "./arguments_assert.mjs";
import { hour_12_shown } from "./hour_12_shown.mjs";
import { minute_label } from "./minute_label.mjs";
import { hour_12_suffix } from "./hour_12_suffix.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function instant_label(iso) {
  arguments_assert(arguments, 1);
  ("A moment written the way a machine stores one - '2025-11-13T16:24:03.402Z' - said back the way a person reads a time: 'Nov 13, 4:24 PM'.");
  ("The seconds and the thousandths are dropped on purpose. Nobody asking when a message arrived wants them, and they are most of what makes the stored form unreadable at a glance.");
  ("It is read in the clock of the machine showing it rather than in the clock it was stored in, because the reader wants to know what time it was where they were standing.");
  let d = new Date(iso);
  let options = {
    month: "short",
    day: "numeric",
  };
  let day = d.toLocaleDateString("en-US", options);
  let hour = d.getHours();
  let shown = hour_12_shown(hour);
  let minute = d.getMinutes();
  let minutes = minute_label(minute);
  let suffix = hour_12_suffix(hour);
  let label = text_combine_multiple([day, ", ", shown, ":", minutes, suffix]);
  return label;
}
