import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { functions_names_repeated } from "./functions_names_repeated.mjs";
import { functions_names_repeated_baseline_path } from "./functions_names_repeated_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_names_repeated_gate_run() {
  "QA gate: no function written from today on carries a name that says the same run of words twice running, and no name recorded as doing so still does.";
  "IT RATCHETS RATHER THAN ASKING FOR ZERO because the repo already carried twenty-seven of these when the reading was written, and renaming them all at once would be a sweep across files other people have open. What is refused is a new one, and a new one is always a command's doing rather than a person's.";
  "Throws so the dispatcher seam exits nonzero.";
  let offenders = await functions_names_repeated();
  let path = functions_names_repeated_baseline_path();
  let name_write = fn_name("functions_names_repeated_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    text_combine_multiple([
      "this name says the same run of words twice running, which is what comes out when a command joins a holder's name to a piece already spelled with that holder's name in it - rename it with ",
      fn_name("function_rename"),
      ", which moves the definition and every caller together",
    ]),
    name_write,
  );
  return r;
}
