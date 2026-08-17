import { gloss_chapters_punctuation_words } from "./gloss_chapters_punctuation_words.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function gloss_punctuation_words_gate_generic(
  fn,
  store_said,
  repair_fn,
) {
  "Gate over one gloss store: no authored chapter may explain a mark as though it were a word. Throws so the dispatcher seam exits nonzero.";
  "The gate already standing over these stores compares the words explained against the words the passage carries, and it cannot see this one: the comparison cuts each explained word at its punctuation, so an explanation whose whole word is a full stop contributes no word at all and both sides still agree. The page does not cut anything - it paints one line per explanation - so the words line up while the page does not, which is the only fault a reader meets and the one nothing was watching for.";
  "Thirty-one of a hundred and ninety-seven Cebuano chapters carried this and it was found by a sweep somebody chose to run, not by a light going red. What put it there has since been retired, so this is not standing over the thing that caused it - it stands over the next hand that authors a chapter, which is the only writer left.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down. Both stores are clean today, so nothing is being written down as expected.";
  "The repair is named in the message rather than run, because dropping an explanation changes what somebody already reading that chapter sees, and a gate is asked in the middle of other work by somebody who did not choose that.";
  let offenders = await gloss_chapters_punctuation_words(fn);
  let count = list_size(offenders);
  let any = greater_than(count, 0);
  if (any) {
    let shown = json_format_to(offenders);
    let message = text_combine_multiple([
      store_said,
      " gloss: ",
      count,
      " chapters explain a mark as though it were a word, which paints every explanation after it one word along - drop them with `node scripts/ai.mjs ",
      repair_fn.name,
      "` - ",
      shown,
    ]);
    throw new Error(message);
  }
  let r = {
    offenders: 0,
  };
  return r;
}
