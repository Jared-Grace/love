import { app_replace_abbreviations_unspelled } from "./app_replace_abbreviations_unspelled.mjs";
import { app_replace_abbreviations_unspelled_baseline_path } from "./app_replace_abbreviations_unspelled_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_replace_abbreviations_unspelled_gate_run() {
  "Gate: the bold letters of an explanation spell the abbreviation they explain.";
  "An abbreviation is worth learning only if the reader can rebuild it from the words it stands for, and the bolding is the whole of how that is shown. Spell something else and the explanation still draws, still looks deliberate, and quietly teaches a short word that is not the one in the rules.";
  "Measured against what the app already carried rather than against zero, because one of the two left is a symbol standing for a letter in either case and what its bolding should be is somebody's judgement.";
  let offenders = app_replace_abbreviations_unspelled();
  let path = app_replace_abbreviations_unspelled_baseline_path();
  let name_write = fn_name("app_replace_abbreviations_unspelled_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "an explanation's bold letters spell something other than the abbreviation - bold the letters the short word is actually made of",
    name_write,
  );
  return r;
}
