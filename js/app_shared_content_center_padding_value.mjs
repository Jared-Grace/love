import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_content_center_padding_value(column, gap) {
  "how far a centered content column sits from each side of its full-width box, as the CSS length itself rather than as styling already applied: whatever it takes to centre the column on a screen wider than it, and the given gap on a narrower one. Named apart from the padding that uses it so that anything which has to LINE UP with a padded column - a margin beside it, a width narrowed by it - asks for the same length instead of spelling the sum again and drifting from it by a few pixels. Measured from the box (100%) rather than the window (100vw): a padding or a side margin given as a percentage is a share of the box it sits in, which leaves out a page scrollbar, while the window counts it - so a column centred on the window sat half a scrollbar (about 7px, measured 2026-09-24) right of one centred by auto margins, the way the code app centres its buttons. The column still comes out exactly its width, because the box less twice the padding is the column either way.";
  let value = text_combine_multiple([
    "max(",
    gap,
    ", calc((100% - ",
    column,
    ") / 2))",
  ]);
  return value;
}
