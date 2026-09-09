import { gloss_capital_claim_wrong_measure } from "./gloss_capital_claim_wrong_measure.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function gloss_capital_claim_wrong_gate_run() {
  "Gate: no gloss store tells a reader that a word is written with a capital letter when the word standing in front of them carries none. Throws so the dispatcher seam exits nonzero.";
  "The word settles it, and nobody has to read the verse. The sentence says the first letter is a capital; the word has no capital; so the sentence is false where it stands, whoever wrote it and whatever they meant by it. That is the whole test, and it is why this can be asked of a hundred and thirty chapters in a few seconds.";
  "Against zero rather than against a record, unlike the sweep for pointers that lead nowhere. Those are being written out one at a time and a gate demanding they all be finished today would be red every day. This is the opposite kind of fault: it is finished, it took six repairs to finish, and one is one too many. A record here would only offer somebody a place to put the next one.";
  "The fault arrives by copying, which is why it needs a gate and not just a repair. A wording is written for a word standing at the head of a verse, where the sentence about the capital is true, and is later carried to the same word standing inside one, where it is not. Nobody has to make a mistake for that to happen - it is what filling an unexplained word from the store's own settled wordings does, and it is what the next authoring pass will do again.";
  "The reason the explanation offers for the capital is deliberately not looked at. An earlier reading counted the reasons instead - sentences mentioning a verse or a sentence beginning - and called ninety-six entries wrong when six were, because most of what it caught was correct writing, including the sentence that explains the lowercase case exactly right. Listing more reasons would have caught more good writing, not less bad; the axis was wrong, not the length of the list.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean, and so is a store nobody has written a reader for. These stores live on a drive that is not always mounted, and every Claude in the repo runs this gate.";
  let measured = await gloss_capital_claim_wrong_measure();
  let counts = property_get(measured, "counts");
  let missing = property_get(measured, "missing");
  function wrong_is(count) {
    let wrong = property_get(count, "wrong");
    let any = greater_than(wrong, 0);
    return any;
  }
  let offenders = list_filter(counts, wrong_is);
  let f_name = fn_name(
    "app_en_learn_bible_gloss_urdu_capital_claim_wrong_repair",
  );
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "these gloss stores tell the reader a word wears a capital that the word does not wear - run ",
      f_name,
      ", which takes the false sentence out and leaves the rest of the explanation alone, and author a fresh wording for any word whose explanation was only ever right because of the capital",
    ]),
    offenders,
  });
  function claiming_get(count) {
    let claiming = property_get(count, "claiming");
    return claiming;
  }
  let r = {
    stores: list_size(counts),
    claiming: list_map_sum(counts, claiming_get),
    skipped: missing,
  };
  return r;
}
