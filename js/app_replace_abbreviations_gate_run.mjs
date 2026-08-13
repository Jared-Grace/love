import { app_replace_abbreviations_mismatches } from "./app_replace_abbreviations_mismatches.mjs";
import { app_replace_abbreviations_baseline_path } from "./app_replace_abbreviations_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_replace_abbreviations_gate_run() {
  "Gate: the explanations shown beside a set of rules and the symbols those rules are spelled with answer to each other one for one.";
  "Nothing goes red either way it breaks. An explanation written for a symbol no rule spells is simply never drawn, so the source looks like it says something the page does not. A symbol the rules turn into something else with nothing explaining it draws nothing either, so the player is handed a word whose meaning the page never gives - and the page looks like it worked.";
  "Measured against what the app already carried rather than against zero, because clearing one is not mechanical: some want an explanation written, some want a set to take in the explanations of the rules it borrowed, and one pair reads as a symbol renamed with its explanation left behind under the old spelling. Each is somebody's judgement. So the record only shrinks.";
  let offenders = app_replace_abbreviations_mismatches();
  let path = app_replace_abbreviations_baseline_path();
  let name_write = fn_name("app_replace_abbreviations_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "a symbol and its explanation stopped answering to each other - explain the symbol the rules rewrite, or take away the explanation no rule spells",
    name_write,
  );
  return r;
}
