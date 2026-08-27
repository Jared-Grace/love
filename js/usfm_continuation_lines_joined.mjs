import { arguments_assert } from "./arguments_assert.mjs";
import { regex_usfm_continuation_line_break } from "./regex_usfm_continuation_line_break.mjs";
export function usfm_continuation_lines_joined(usfm) {
  arguments_assert(arguments, 1);
  ("$plain usfm");
  ("One book of usfm with every line that was only a line of the one above it put back onto it, so that each line is one whole thing again.");
  ("This has to happen before the headings are looked for, because a heading is a line and the only thing that says where it ends is where its line ends. An aligned bible writes one word per line, so a heading there is a first word wearing the heading mark and the rest of its words standing on their own lines looking like ordinary text. Thirty-five headings came away one word wide, and each of the other words stayed in the verse below, reading as scripture.");
  ("Nothing but heading finding reads the lines. What follows this flattens the line breaks away altogether, so joining lines here can change nothing else - the same words in the same order come out of it either way.");
  let r = regex_usfm_continuation_line_break();
  let joined = usfm.replace(r, " ");
  return joined;
}
