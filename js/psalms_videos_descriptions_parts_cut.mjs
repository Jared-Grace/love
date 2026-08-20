import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { json_to } from "./json_to.mjs";
import { greater_than } from "./greater_than.mjs";
export function psalms_videos_descriptions_parts_cut(paired, letters_most) {
  "Cuts a list of songs into pieces, each piece no longer than the number of letters asked for.";
  "It is its own name because two different lists want cutting the same way - every song there is, and only the songs still without their words - and a second copy of this loop would be a second place for the rule about an oversized song to be got right.";
  "A song longer on its own than the whole allowance is still given a piece of its own rather than dropped. Nothing on the channel is anywhere near that, and that is exactly why it must be written down: a rule that is only correct because of today's numbers stops being correct without saying so.";
  arguments_assert(arguments, 2);
  let parts = [];
  let part = [];
  let letters = 0;
  for (let one of paired) {
    let text = json_to(one);
    let over = greater_than(letters + text.length, letters_most);
    if (over && list_empty_not_is(part)) {
      parts.push(part);
      part = [];
      letters = 0;
    }
    part.push(one);
    letters = letters + text.length;
  }
  if (list_empty_not_is(part)) {
    parts.push(part);
  }
  return parts;
}
