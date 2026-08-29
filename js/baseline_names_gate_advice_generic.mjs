import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function baseline_names_gate_advice_generic(
  offenders,
  path,
  hint_get,
  name_write,
) {
  arguments_assert(arguments, 4);
  ("Run a ratchet gate over a flat list of offending names, the same as its sibling in every way but one: what it says about the names that newly offend is worked out from those names rather than written down beforehand.");
  ("A sentence written beforehand can only ever say what is true of the whole class, so it says the same thing about a name that wants renaming and a name that must on no account be renamed. Where the difference can be worked out, working it out is worth more than any sentence somebody could have written, and it is worth most at the moment a gate has just stopped somebody.");
  ("It is handed a way of making the sentence rather than the sentence, so that a reading costing a search of the repo for each name is paid for only by a gate that is failing. A gate that passes must cost nothing beyond its own sweep, or it stops being run.");
  ("Both teeth are complained about in one refusal, and that is the whole reason the two lists are gathered before either is spoken of. Refusing on the new names first and the left-behind ones after reads as an order of importance and is not one - it is the order the two lines happen to be written in, and it hides the second list entirely for as long as the first is not empty. A gate red about a new offense stays red for as long as somebody is busy elsewhere, and every entry that stopped offending over that stretch goes unsaid. That window is not small: one record reached twenty-nine names of which three were still true, and the twenty-six were never once printed.");
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(offenders, recorded);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  let sentences = [];
  let added_any_is = list_empty_not_is(added);
  if (added_any_is) {
    let hint_added = await hint_get(added);
    list_add(sentences, hint_added);
  }
  let stale_any_is = list_empty_not_is(stale);
  if (stale_any_is) {
    let hint_stale = text_combine_multiple([
      "these no longer offend - shrink the record with ",
      name_write,
      " so the same name cannot come back unnoticed",
    ]);
    list_add(sentences, hint_stale);
  }
  let hint = list_join_newline(sentences);
  let both = list_concat(added, stale);
  list_empty_is_assert_json(both, {
    hint,
    added,
    stale,
  });
  let r = {
    added: 0,
    stale: 0,
  };
  return r;
}
