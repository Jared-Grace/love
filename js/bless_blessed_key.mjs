import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bless_blessed_key(rung, place) {
  arguments_assert(arguments, 2);
  ("The one word a blessed place is remembered under.");
  ("A place is only ever a number, and the same number names a different place at every");
  ("rung - block three and county three are both three. So the rung has to be carried");
  ("alongside it, or a prayer over one block would quietly mark a county as prayed for.");
  let key = text_combine_multiple([rung, ":", place]);
  return key;
}
