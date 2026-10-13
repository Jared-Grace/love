import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_bible_verses_rendered_cases } from "./giveaway_bible_verses_rendered_cases.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_bible_verses_rendered } from "./giveaway_bible_verses_rendered.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function giveaway_bible_verses_rendered_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the three shapes a given-away psalm's words are written out in each come out letter for letter as the written cases say. Throws so the dispatcher seam exits nonzero.");
  ("★ NOTHING ELSE LOOKS AT WHAT IS INSIDE A TEXT FILE, WHICH IS WHY THIS IS THE ONE PLACE THE WORDS ARE JUDGED. The other box gate judges names and reads no words at all, on purpose, because reading them means fetching them and a fetch fails often enough to make a gate red for reasons nobody caused. These cases carry their own verses, so they answer the same every time and still hold the rendering.");
  ("★ A FILE THAT CAME OUT WRONG WOULD BE WRONG UNDER A NAME THAT CANNOT BE CHANGED, SO THERE IS NO FIXING IT AFTERWARDS. A renderer that lost the verse numbers, or ran the verses into one line, would be noticed by nobody until somebody downloaded a box and found the psalm unusable - and a second upload under the same name replaces the file without saying so, which is the best that could then be done.");
  let cases = giveaway_bible_verses_rendered_cases();
  function answer(c) {
    let verses = property_get(c, "verses");
    let mark = property_get(c, "mark");
    let ending = property_get(c, "ending");
    let rendered = giveaway_bible_verses_rendered(verses, mark, ending);
    return rendered;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "rendered",
    "why",
    "giveaway bible verses rendered",
  );
  return r;
}
