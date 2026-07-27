import { functions_selects_unsafe_params } from "./functions_selects_unsafe_params.mjs";
import { selects_unsafe_baseline_path } from "./selects_unsafe_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { greater_than } from "./greater_than.mjs";
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
  let offenders = await functions_selects_unsafe_params();
  let names = list_map_property(offenders, "name");
  let path = selects_unsafe_baseline_path();
  let known = await baseline_known_read(path);
  let added = list_difference(names, known);
  let stale = list_difference(known, names);
  let any_added = greater_than(added.length, 0);
  if (any_added) {
    throw new Error(
      "selects code gate: " +
        added.length +
        " new transforms can be handed written code through an already approved command — narrow the parameter to a name, or record it on purpose in " +
        path +
        ": " +
        list_join_comma(added),
    );
  }
  let any_stale = greater_than(stale.length, 0);
  if (any_stale) {
    throw new Error(
      "selects code gate: " +
        stale.length +
        " transforms on the list no longer take written code, so the list should shrink — take them out of " +
        path +
        ": " +
        list_join_comma(stale),
    );
  }
  let r = {
    watched: names.length,
  };
  return r;
}
