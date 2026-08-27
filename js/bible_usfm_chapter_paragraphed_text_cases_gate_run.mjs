import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_chapter_paragraphed_text_cases } from "./bible_usfm_chapter_paragraphed_text_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_chapter_paragraphed_text } from "./bible_usfm_chapter_paragraphed_text.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function bible_usfm_chapter_paragraphed_text_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: lays out every written-down chapter and holds the answer against the writing beside it.");
  ("Reads no file. The usfm is written into each case, so this asks the same question in the frozen copy a gate runs in as it does anywhere else, and it asks nothing of the berean download, which is not in the repo.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = bible_usfm_chapter_paragraphed_text_cases();
  function answer(c) {
    let usfm = property_get(c, "usfm");
    let chapter_number = property_get(c, "chapter_number");
    let verse_numbers_shown = property_get(c, "verse_numbers_shown");
    let text = bible_usfm_chapter_paragraphed_text(
      usfm,
      chapter_number,
      verse_numbers_shown,
    );
    return text;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "text",
    "why",
    "bible usfm chapter paragraphed text",
  );
  return r;
}
