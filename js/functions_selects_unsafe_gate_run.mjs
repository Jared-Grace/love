import { functions_selects_unsafe_names } from "./functions_selects_unsafe_names.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { functions_selects_unsafe_baseline_write } from "./functions_selects_unsafe_baseline_write.mjs";
import { selects_unsafe_baseline_path } from "./selects_unsafe_baseline_path.mjs";
export async function functions_selects_unsafe_gate_run() {
  "Gate: the set of transforms that can be handed a written line of code does not";
  "grow.";
  "A standing approval is refused to any command whose own parameter reads as a";
  "code. The command pairing an address with a verb holds one and names its verb";
  "in an argument, so every transform on this list is reachable through it with";
  "no one asked — which makes the refusal on the other command worth nothing";
  "while the list can grow unwatched.";
  "Held against what the repo carried the day this was written rather than";
  "against zero, because some of these are meant to exist and deciding which is";
  "not a judgment a gate can make. A new one fails, so the choice to widen the";
  "opening is made on purpose and by somebody. One that goes away fails too, so";
  "the list can only shrink.";
  let names = await functions_selects_unsafe_names();
  let path = selects_unsafe_baseline_path();
  await baseline_names_gate_generic(
    names,
    path,
    "these transforms can be handed written code through an already approved command and could not before — narrow the parameter to a name",
    functions_selects_unsafe_baseline_write.name,
  );
  let r = {
    watched: names.length,
  };
  return r;
}
