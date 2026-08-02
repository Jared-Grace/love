import { arguments_assert } from "./arguments_assert.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { modulo } from "./modulo.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function date_zone_offset_iso(d) {
  arguments_assert(arguments, 1);
  ("The zone a moment is read in, written the way an ISO time writes it: '+08:00'");
  ("east of Greenwich, '-05:30' west of it.");
  ("A clock reading carrying no zone is ambiguous by as many hours as the world is");
  ("wide, so two lines written in two places cannot be put in order together.");
  let behind = d.getTimezoneOffset();
  let ahead = -behind;
  let ahead_is = ahead >= 0;
  let sign = ahead_is ? "+" : "-";
  let size = ahead_is ? ahead : behind;
  let hours = divide_floor(size, 60);
  let hours_text = number_pad_2(hours);
  let minutes = modulo(size, 60);
  let minutes_text = number_pad_2(minutes);
  let iso = text_combine_multiple([sign, hours_text, ":", minutes_text]);
  return iso;
}
