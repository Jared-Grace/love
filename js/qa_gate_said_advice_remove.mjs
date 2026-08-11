import { qa_gate_said_advice_remove_advice_free } from "./qa_gate_said_advice_remove_advice_free.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { json_to_try } from "./json_to_try.mjs";
import { less_than } from "./less_than.mjs";
import { list_join } from "./list_join.mjs";
import { null_is } from "./null_is.mjs";
export function qa_gate_said_advice_remove(said) {
  "Everything a gate said with its advice sentence taken out, so that what is read back is what the gate is accusing rather than what it suggests doing about it";
  "A gate that throws through the shared baseline reader carries two different things in one breath: the offenders, in a list, and a hint - a sentence of English telling whoever reads it how to put the matter right. Only the first is an accusation. The hint names the REPAIR function, which is not at fault, and it is written in ordinary English";
  "Ordinary English is the whole difficulty, because this repo has functions named after ordinary words. Measured 2026-08-02: twelve of them in one folder, among them not, and, or, and each. So a hint reading 'call it from each, or record the group' names two functions, and every app ships both. Six gates were holding a deployment of one app that day and all six were held by words of this kind - one of them by that very sentence";
  "Taking the hint out cannot lose an offender, because the offenders are carried separately in their own list and the hint has never held one. What is outside the JSON is kept untouched, since a gate prints its findings line by line before it throws";
  "It answers the text unchanged when there is no JSON in it, so a gate that reports some other way is left exactly as it was";
  let opened = said.indexOf("{");
  let closed = said.lastIndexOf("}");
  let unopened = less_than(opened, 0);
  if (unopened) {
    return said;
  }
  let unclosed = less_than(closed, opened);
  if (unclosed) {
    return said;
  }
  let blob = said.slice(opened, closed + 1);
  let parsed = json_parse_try(blob);
  let unparsed = null_is(parsed);
  if (unparsed) {
    return said;
  }
  let advice = "hint";
  let freed = qa_gate_said_advice_remove_advice_free(parsed, advice);
  let written = json_to_try(freed);
  let unwritable = null_is(written);
  if (unwritable) {
    return said;
  }
  let before = said.slice(0, opened);
  let after = said.slice(closed + 1);
  let parts = [before, written, after];
  let rejoined = list_join(parts, " ");
  return rejoined;
}
