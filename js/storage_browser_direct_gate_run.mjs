import { storage_browser_direct_hint } from "./storage_browser_direct_hint.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { storage_browser_direct_all } from "./storage_browser_direct_all.mjs";
import { storage_browser_direct_baseline_path } from "./storage_browser_direct_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function storage_browser_direct_gate_run() {
  "QA gate: no new file speaks to one of the browser's own stores itself. Every word that reaches a disk goes through a door, where something is watching it.";
  "A word used to name a kept thing is published the moment it is written, and after that it is in a store on somebody else's machine. Every reading that watches those words - which are frozen, which are composed where, which are written out instead of held - begins at the names of the functions that do the storing. A file that goes straight to the browser is read by none of them, so its word is published with nothing at all looking at it, and the repo reads exactly as if it were in order.";
  "That is not a worry about what could happen. The one place a page address's query part was read straight from the browser had a frozen word going through it that no reading in this repo could reach, and it was found by somebody happening to read the line.";
  "Measured against what the repo already carried rather than against zero, because four files do this today and moving them onto doors changes what shape their kept words are written in - which is a decision with a person in it, not a tidy-up. The rule binds what is written from now on.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let offenders = await storage_browser_direct_all();
  let path = storage_browser_direct_baseline_path();
  let hint = storage_browser_direct_hint(
    "this file speaks straight to a browser store, where no reading that watches a kept word can see it - keep the word through one of the storing functions instead, or, if speaking to the browser is the whole of what this file does, name it to ",
  );
  let f_name = fn_name("storage_browser_direct_baseline_write");
  let r = await baseline_names_gate_generic(offenders, path, hint, f_name);
  return r;
}
