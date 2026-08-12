import { gloss_chapters_words_misaligned } from "./gloss_chapters_words_misaligned.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function gloss_words_misaligned_gate_generic(fn, store_said) {
  "Gate over one gloss store: no authored chapter may carry a passage whose word explanations have stopped lining up with the passage itself. Throws so the dispatcher seam exits nonzero.";
  "The page paints the explanations under the passage in order and nothing on it repeats which word each one is about, so the reader takes the third explanation to be about the third word. One word skipped therefore does not read as a gap - it reads as every later word being explained wrongly, and it reads that way to somebody studying scripture, which is the whole reason this is worth a gate rather than a note.";
  "It starts at nothing and there is no baseline beside it, because both stores were clear when it was written and a list to add offenders to would turn a red light into a place to write things down.";
  let offenders = await gloss_chapters_words_misaligned(fn);
  let count = list_size(offenders);
  let any = greater_than(count, 0);
  if (any) {
    let shown = json_format_to(offenders);
    let message = text_combine_multiple([
      store_said,
      " gloss: ",
      count,
      " chapters explain words the passage does not carry, in the order the page paints them - ",
      shown,
    ]);
    throw new Error(message);
  }
  let r = {
    offenders: 0,
  };
  return r;
}
