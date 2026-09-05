import { arguments_assert } from "./arguments_assert.mjs";
import { qa_shard_peak_prefix } from "./qa_shard_peak_prefix.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { text_split_last } from "./text_split_last.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { null_is } from "./null_is.mjs";
export function qa_shard_peak_printed(output) {
  "$plain output";
  "The most memory a share held, read back out of what it printed, or nothing at all if it never said";
  "This is the only way the number comes home. A share that went green hands back a result, but a share that went red throws before it reaches one, and a share the machine killed for want of room hands back neither - what it printed on the way is all there is, and this is the line worth finding in it.";
  "A line saying something no number can be read out of is treated as no line at all. A share carried here with nothing for its size would be counted as measured and answer nought, which reads exactly like a share that held nothing.";
  "Where a share said it more than once the last saying wins, because the number only rises: an earlier line is a smaller true figure about the same process, and the highest one is the one the machine actually had to find room for.";
  arguments_assert(arguments, 1);
  let prefix = qa_shard_peak_prefix();
  let lines = text_split_newline(output);
  let found = null;
  for (let line of lines) {
    if (text_includes_not(line, prefix)) {
      continue;
    }
    let after = text_split_last(line, prefix);
    let input = after.trim();
    let bytes = integer_from_base_try(input, 10);
    if (null_is(bytes)) {
      continue;
    }
    found = bytes;
  }
  return found;
}
