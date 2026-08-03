import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_content_center_padding_value(column, gap) {
  "how far a centered content column sits from each side of its full-width box, as the CSS length itself rather than as styling already applied: whatever it takes to centre the column on a screen wider than it, and the given gap on a narrower one. Named apart from the padding that uses it so that anything which has to LINE UP with a padded column - a margin beside it, a width narrowed by it - asks for the same length instead of spelling the sum again and drifting from it by a few pixels.";
  let value = text_combine_multiple([
    "max(",
    gap,
    ", calc((100vw - ",
    column,
    ") / 2))",
  ]);
  return value;
}
