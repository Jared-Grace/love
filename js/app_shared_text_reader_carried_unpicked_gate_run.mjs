import { app_shared_text_reader_carried_unpicked_names } from "./app_shared_text_reader_carried_unpicked_names.mjs";
import { app_shared_text_reader_carried_unpicked_baseline_path } from "./app_shared_text_reader_carried_unpicked_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function app_shared_text_reader_carried_unpicked_gate_run() {
  "Refuse a function that newly hands words onto the page of an app that promised a reader language without ever asking what language that reader reads.";
  "The reading beside this one watches the doors and can only read the words typed at them, which measured three of seventy-nine in the app that teaches english. This follows the other seventy-six one step back to where they were typed, so a word going onto a screen in english is caught by a gate rather than by somebody happening to look at that screen.";
  "It measures against what the repo already carried rather than against nothing, because four functions were already offending when it was written and three of them need urdu written before they can be settled. A gate red for everybody until a translation is authored is a gate everybody learns to ignore.";
  let offenders = await app_shared_text_reader_carried_unpicked_names();
  let path = app_shared_text_reader_carried_unpicked_baseline_path();
  let name_write = fn_name(
    "app_shared_text_reader_carried_unpicked_baseline_write",
  );
  let name_read = fn_name("app_shared_text_reader_carried_unpicked");
  let name_pick = fn_name("app_shared_text_reader_language");
  let hint = text_combine_multiple([
    "these functions type words out and hand them to a door onto the page without ever asking what language the reader reads, so what they say arrives in english whoever is reading. ",
    "ask ",
    name_read,
    " for the app to see the words and the door each one leaves by. ",
    "the repair is to say the words through ",
    name_pick,
    ", which takes what to say in each language and picks by the reader's own",
  ]);
  let r = await baseline_names_gate_generic(offenders, path, hint, name_write);
  return r;
}
