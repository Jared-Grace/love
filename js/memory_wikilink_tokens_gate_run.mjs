import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { memory_wikilink_cases } from "./memory_wikilink_cases.mjs";
import { memory_wikilink_tokens } from "./memory_wikilink_tokens.mjs";
import { property_get } from "./property_get.mjs";
export function memory_wikilink_tokens_gate_run() {
  "QA gate: each written-down piece of writing yields the double-bracket names the";
  "corpus says it does, and no others.";
  "This is the case for every check over memory links, because all of them ask this";
  "one reader first and none of them can see past it. A reader that found nothing";
  "would not make any of those checks fail - it would make all of them pass, over a";
  "memory folder they had genuinely read and genuinely never looked at.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = memory_wikilink_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let links = memory_wikilink_tokens(text);
    return links;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "links",
    "why",
    "memory wikilink tokens",
  );
  return r;
}
