import { functions_names } from "./functions_names.mjs";
import { list_size } from "./list_size.mjs";
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
  let f_name = fn_name("function_rename");
  let hint = text_combine_multiple([
    "this name says the same run of words twice running, which is what comes out when a command joins a holder's name to a piece already spelled with that holder's name in it - rename it with ",
    f_name,
    ", which moves the definition and every caller together",
  ]);
  let r = await baseline_names_gate_generic(offenders, path, hint, name_write);
  ("How many names were read comes back beside the ratchet's verdict. The ratchet answers in what newly offends and what no longer does, and both of those are nothing on every run that passes - so a sweep pointed at a roster that had moved would answer clean forever and say the same word as a sweep that read every name there is.");
  let f_names = await functions_names();
  let walked = {
    functions: list_size(f_names),
    ratchet: r,
  };
  return walked;
}
