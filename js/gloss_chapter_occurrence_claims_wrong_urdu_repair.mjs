import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passages_occurrence_claims_urdu } from "./gloss_passages_occurrence_claims_urdu.mjs";
import { gloss_occurrence_claim_counted_is } from "./gloss_occurrence_claim_counted_is.mjs";
import { not } from "./not.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { gloss_passages_occurrence_claims_wrong_urdu } from "./gloss_passages_occurrence_claims_wrong_urdu.mjs";
import { text_ordinals_urdu } from "./text_ordinals_urdu.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { list_find } from "./list_find.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_replace } from "./text_replace.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function gloss_chapter_occurrence_claims_wrong_urdu_repair(
  chapter_code,
  fn,
  text_index,
  word_keys_read,
) {
  "Rewrite every number in one Urdu chapter that says which time over an English word has come and that no way of counting reaches, to the number the chapter's own rule for that word gives.";
  "$plain chapter_code";
  "the code is a chapter's name, like GEN31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "WRITING ONE MISSING WORD INTO A CHAPTER MOVES EVERY LATER COUNT OF THAT WORD BY ONE. Met on 2026-10-24: an and nobody had explained in GEN31 left twenty-two later sentences one short. Each of them is a plain matter of counting, so the mend is counting again rather than retyping Urdu by hand.";
  "WHICH RULE A WORD FOLLOWS IS READ OFF THE CHAPTER, NOT CHOSEN HERE. A word can be counted with And and and apart or folded together, and the chapter's sentences that are still right say which. The rule more of them agree with is the one written; where the two are tied, nothing is written and the sentence is handed back, because a tie is a decision nobody has made.";
  "The new number is spelled the first way the table of written numbers spells it. A number the table has no spelling for is handed back unwritten rather than guessed.";
  arguments_assert(arguments, 4);
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let all = gloss_passages_occurrence_claims_urdu(
    passages,
    text_index,
    word_keys_read,
  );
  let exact_agree = {};
  let folded_agree = {};
  function agreement_count(claim) {
    let counted = gloss_occurrence_claim_counted_is(claim);
    if (not(counted)) {
      return;
    }
    let s = property_get(claim, "word");
    let folded = text_lower_to(s);
    let claimed = property_get(claim, "claimed");
    property_count_add(exact_agree, folded, 0);
    property_count_add(folded_agree, folded, 0);
    let right = property_get(claim, "expected_exact");
    if (equal(claimed, right)) {
      property_count_add(exact_agree, folded, 1);
    }
    let right2 = property_get(claim, "expected_folded");
    if (equal(claimed, right2)) {
      property_count_add(folded_agree, folded, 1);
    }
  }
  each(all, agreement_count);
  let wrong = gloss_passages_occurrence_claims_wrong_urdu(
    passages,
    text_index,
    word_keys_read,
  );
  let ordinals = text_ordinals_urdu();
  let spellings = object_property_names(ordinals);
  let explain_key = gloss_entry_explain_key();
  let opened = {};
  function entries_open(verses_key) {
    let held = property_or_null(opened, verses_key);
    let b = null_is(held);
    if (not(b)) {
      return held;
    }
    function passage_is(candidate) {
      let key = g_sermon_passage_verses_key(candidate);
      let eq = equal(key, verses_key);
      return eq;
    }
    let passage = list_find(passages, passage_is);
    let entries = gloss_passage_entries(passage);
    let opening = {
      passage,
      entries,
    };
    property_set(opened, verses_key, opening);
    return opening;
  }
  let mended = [];
  let skipped = [];
  function claim_mend(claim) {
    let word = property_get(claim, "word");
    let folded = text_lower_to(word);
    let exact_count = property_get(exact_agree, folded);
    let folded_count = property_get(folded_agree, folded);
    if (equal(exact_count, folded_count)) {
      list_add(skipped, claim);
      return;
    }
    let rule_key = greater_than(folded_count, exact_count)
      ? "expected_folded"
      : "expected_exact";
    let number = property_get(claim, rule_key);
    function spelling_is(written) {
      let left = property_get(ordinals, written);
      let eq2 = equal(left, number);
      return eq2;
    }
    let spelled_alike = list_filter(spellings, spelling_is);
    let spelling = list_get_or_null(spelled_alike, 0);
    if (null_is(spelling)) {
      list_add(skipped, claim);
      return;
    }
    let verses_key = property_get(claim, "verses_key");
    let at = property_get(claim, "at");
    let spelled = property_get(claim, "spelled");
    let opening = entries_open(verses_key);
    let list = property_get(opening, "entries");
    let entry = list_get(list, at);
    let explain = property_get(entry, explain_key);
    let lead = text_combine_multiple(["'", word, "' اِس قِصّے میں "]);
    let from = text_combine_multiple([lead, spelled, " بار"]);
    let to = text_combine_multiple([lead, spelling, " بار"]);
    let rewritten = text_replace(explain, from, to);
    if (equal(rewritten, explain)) {
      list_add(skipped, claim);
      return;
    }
    property_set(entry, explain_key, rewritten);
    list_add(mended, {
      verses_key,
      at,
      word,
      spelled,
      spelling,
    });
  }
  each(wrong, claim_mend);
  function passage_write(verses_key) {
    let opening = property_get(opened, verses_key);
    let object = property_get(opening, "entries");
    let value = json_format_to(object);
    let object2 = property_get(opening, "passage");
    property_set(object2, "generated", value);
  }
  let list2 = object_property_names(opened);
  each(list2, passage_write);
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    mended,
    skipped,
  };
  return r;
}
