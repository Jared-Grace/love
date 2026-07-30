import { example_files_command_cores } from "./example_files_command_cores.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { not } from "./not.mjs";
export function example_files_command_lambda(f_name, args) {
  "Map a multi-file example's command to the folder transform that proves it: a lambda taking the sandbox directory and nothing else. The repo-wide renaming, unused-deleting and copying commands are ambient, so what the gate runs is their hermetic core, and the pairing of the two lives next door in a register.";
  "The arguments arrive already correct for the core, so they are passed straight through in the order the example wrote them. Every example in the corpus spells exactly as many as its core declares, and one short or one over is refused where every other call in the repo is refused rather than being counted here.";
  let cores = example_files_command_cores();
  let found = list_find_property_or_null(cores, "name", f_name);
  if (not(found)) {
    return null;
  }
  let core = found.core;
  async function lambda(dir) {
    let r = await core(dir, ...args);
    return r;
  }
  return lambda;
}
