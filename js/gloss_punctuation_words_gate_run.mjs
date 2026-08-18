import { fn_name } from "./fn_name.mjs";
import { gloss_punctuation_words_measure } from "./gloss_punctuation_words_measure.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function gloss_punctuation_words_gate_run() {
  "Gate: no authored chapter in any gloss store may explain a mark as though it were a word. Throws so the dispatcher seam exits nonzero.";
  "The gate already standing over these stores compares the words explained against the words the passage carries, and it cannot see this one: the comparison cuts each explained word at its punctuation, so an explanation whose whole word is a full stop contributes no word at all and both sides still agree. The page does not cut anything - it paints one line per explanation - so the words line up while the page does not, which is the only fault a reader meets and the one nothing was watching for.";
  "Thirty-one of a hundred and ninety-seven Cebuano chapters carried this and it was found by a sweep somebody chose to run, not by a light going red. What put it there has since been retired, so this is not standing over the thing that caused it - it stands over the next hand that authors a chapter, which is the only writer left.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down. Every store is clean today, so nothing is being written down as expected.";
  "One gate over the roster rather than one per store: three stores were written the same way by the same hands, and the third store spent its first days with no light over it at all because a light has to be remembered per store while a roster only has to be joined once.";
  "The repair is named in the message rather than run, because dropping an explanation changes what somebody already reading that chapter sees, and a gate is asked in the middle of other work by somebody who did not choose that.";
  let measured = await gloss_punctuation_words_measure();
  let counts = property_get(measured, "counts");
  let missing = property_get(measured, "missing");
  function found_is(answer) {
    let marked = property_list_empty_not_is(answer, "found");
    return marked;
  }
  let offending = list_filter(counts, found_is);
  let f_name = fn_name("gloss_stores_punctuation_entries_repair");
  list_empty_is_assert_json(offending, {
    hint: text_combine_multiple([
      "these gloss stores explain a mark as though it were a word, which paints every explanation after it one word along from the word it is about - drop them with node scripts/ai.mjs ",
      f_name,
    ]),
    offending,
  });
  let r = {
    stores: list_size(counts),
    skipped: missing,
  };
  return r;
}
