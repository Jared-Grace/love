import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_verify_chapter_asked_cases } from "./g_verify_chapter_asked_cases.mjs";
import { g_verify_chapter_asked_generic } from "./g_verify_chapter_asked_generic.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function g_verify_chapter_asked_cases_gate_run() {
  "QA gate: each word a link has been seen to carry amounts to what the corpus beside it says it does.";
  "What is watched is the judging alone, which is the whole of what can be got wrong here. The reading above it takes a named field out of this page's address and hands the word straight over, and there is no room in those two lines for an answer to come out different.";
  "Three callers lean on this and each leans on a different half of the answer, so a change to any part of it moves something on a screen. Which chapter opens is decided by whether the word is usable; whether a note is painted is decided by the same thing read the other way round; and what that note quotes is the word itself. A quiet loosening would open a chapter nobody asked for, and a quiet tightening would put a complaint above a perfectly good link.";
  arguments_assert(arguments, 0);
  let cases = g_verify_chapter_asked_cases();
  function answer(c) {
    let asked = property_get(c, "asked");
    let r = g_verify_chapter_asked_generic(asked);
    return r;
  }
  let r2 = cases_gate_run_generic(
    cases,
    answer,
    "answer",
    "why",
    "g verify chapter asked",
  );
  return r2;
}
