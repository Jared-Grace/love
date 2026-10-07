import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_run_offenders_cases } from "./gloss_chapters_run_offenders_cases.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_chapters_run_offenders } from "./gloss_chapters_run_offenders.mjs";
import { equal } from "./equal.mjs";
import { json_equal } from "./json_equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function gloss_chapters_run_offenders_gate_run() {
  "Gate: the walk that asks whether a store's chapters run unbroken from the first book answers every written-down case the way the case says. Throws so the dispatcher seam exits nonzero.";
  "IT STANDS UNDER A GATE THAT CANNOT BE MADE TO GO RED BY ITSELF. The app gate above it reads a folder on this machine, so the only way to see it complain is to take a chapter out of a real store, and a check nobody has ever watched disagree is worth nothing at all. The cases are the only place the two complaints are seen being made, and they are the reason the walk was lifted out of the app gate in the first place.";
  "The clean cases are checked as hard as the dirty ones, because the cheap way to pass a corpus of faults is to complain about everything. A store part way through its second book, a store holding nothing, and a store whose chapters arrive unsorted all have to come back with nothing to say.";
  "The count of chapters reached is compared as well as the offenders. A walk that answered the right complaints while reaching no chapters at all would be reading an empty folder and agreeing with itself, and the count is the only thing that tells those two apart.";
  "The two halves of the answer are compared one at a time rather than as one piece, because comparing whole written-out shapes counts the order their keys were written in, and nothing here means to say anything about that.";
  arguments_assert(arguments, 0);
  let cases = gloss_chapters_run_offenders_cases();
  let wrong = [];
  for (let one of cases) {
    let chapter_codes = property_get(one, "chapter_codes");
    let book_codes = property_get(one, "book_codes");
    let chapters_wanted = property_get(one, "chapters");
    let offenders_wanted = property_get(one, "offenders");
    let why = property_get(one, "why");
    let answered = gloss_chapters_run_offenders(chapter_codes, book_codes);
    let chapters_answered = property_get(answered, "chapters");
    let offenders_answered = property_get(answered, "offenders");
    let counted = equal(chapters_answered, chapters_wanted);
    let named = json_equal(offenders_answered, offenders_wanted);
    let agreed = counted && named;
    if (not(agreed)) {
      list_add(wrong, {
        why,
        chapter_codes,
        chapters_wanted,
        chapters_answered,
        offenders_wanted,
        offenders_answered,
      });
    }
  }
  let hint = text_combine_multiple([
    "the walk over a store's chapters no longer answers what ",
    fn_name("gloss_chapters_run_offenders_cases"),
    " says it must - each case carries its own reason, so read the reason before changing either side, because the case may be the older claim",
  ]);
  list_empty_is_assert_json(wrong, {
    hint,
    wrong,
  });
  let r = {
    cases: list_size(cases),
    wrong: 0,
  };
  return r;
}
