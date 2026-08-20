import { functions_selects_unsafe_names_walked } from "./functions_selects_unsafe_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_selects_unsafe_baseline_path } from "./functions_selects_unsafe_baseline_path.mjs";
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
  "What it says about itself is how many functions it opened, not how many are";
  "watched. The watched number was the size of a record that only shrinks, so it";
  "read as steady while the walk under it could have stopped opening anything and";
  "never said so.";
  let told = await functions_selects_unsafe_names_walked();
  let walked = property_get(told, "walked");
  let names = property_get(told, "offenders");
  let path = functions_selects_unsafe_baseline_path();
  let name_write = fn_name("functions_selects_unsafe_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    names,
    path,
    "these transforms can be handed written code through an already approved command and could not before — narrow the parameter to a name",
    name_write,
  );
  return r;
}
