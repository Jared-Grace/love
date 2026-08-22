import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
export function song_image_audit_picture_shown(attempts, kept) {
  arguments_assert(arguments, 2);
  let at = attempts.indexOf(kept);
  let start = less_than(at, 0) ? 0 : at;
  let shown = start;
  return shown;
}
