import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_map } from "./list_map.mjs";
export function reply_proposal_whole_added(source) {
  arguments_assert(arguments, 1);
  ("A file that does not exist yet, written out in the way a difference is read: every line of it marked as a line the change brings.");
  ("★ A NEW FILE IS A DIFFERENCE WITH NOTHING ON THE OTHER SIDE, so drawing it needs no laying-over and no searching - there is no old text for a line to fail to be found in. That is why it is a few lines here and a long one next door: all of the difficulty in drawing a change is in the part that already exists.");
  ("It is marked line by line rather than announced once at the top, because it is drawn by the same thing that draws every other change and that thing reads the mark off the front of each line. Announcing it once would need a second way of drawing, which would then be a second way of being wrong.");
  let file_lines = text_split_newline(source);
  function each_line(line) {
    let brought = "+" + line;
    return brought;
  }
  let lines = list_map(file_lines, each_line);
  return lines;
}
