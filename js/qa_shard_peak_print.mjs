import { arguments_assert } from "./arguments_assert.mjs";
import { machine_process_peak_bytes_or_null } from "./machine_process_peak_bytes_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { qa_shard_peak_prefix } from "./qa_shard_peak_prefix.mjs";
import { text_combine } from "./text_combine.mjs";
export async function qa_shard_peak_print() {
  "Says, on one marked line, the most memory this share has held at any moment since it started";
  "It is said here rather than worked out by whoever is waiting outside, because a watcher outside would have to keep looking and would catch the highest moment only by luck. The machine has been keeping the number all along and hands it over exactly, but only to the process it is about.";
  "It is said after every gate has answered and before anything is thrown, so that a share which found something to complain about still says what it held. The share that most wants accounting for is the one that went red for want of room, and that one never reaches an ending.";
  "A machine that will not say leaves no line at all rather than a line saying nothing. Whoever reads these back is counting the shares that answered, and a line with no number in it would be counted as a share that answered nothing - which is a different and worse claim than the share never having been asked.";
  arguments_assert(arguments, 0);
  let bytes = await machine_process_peak_bytes_or_null();
  if (null_is(bytes)) {
    ("Nothing said, so nothing written: the reader outside simply finds no line for this share.");
    return;
  }
  let prefix = qa_shard_peak_prefix();
  let line = text_combine(prefix, bytes);
  console.log(line);
}
