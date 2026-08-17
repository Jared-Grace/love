import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_span_candidates } from "./function_span_candidates.mjs";
import { function_span_cut_skip_or_null } from "./function_span_cut_skip_or_null.mjs";
import { function_part_name_or_null } from "./function_part_name_or_null.mjs";
import { function_functionize } from "./function_functionize.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function function_span_cut_pass(f_name) {
  arguments_assert(arguments, 1);
  ("One walk through the named function, cutting out every run of straight work in it that can be cut, each under a name worked out from the word its last line ends on, and each committed under its own command before the next one starts.");
  ("The twin of the lifting walk, for the shape that one leaves behind. A function with nothing written inside it answers the lifting reading with an empty list and drops off it while still standing over the ceiling, and once the lifting has been done that is the commoner shape - so a reader working the lifting walk alone runs out of work long before the size record does.");
  ("The list is asked again after every cut rather than read once at the start, and here that is not a refinement but the whole of why this is a loop. A cut moves every line after it, so the second row of a list made before the first cut describes a function that no longer looks like that.");
  ("A run that is stepped over is remembered by the word it ends on and never offered again, because a walk that re-asked the list would be handed the same unusable run for ever. All three reasons for stepping over one are about the name, and a name does not become spellable by being asked twice.");
  ("Nothing is caught. Every cut already made is already committed, so a cut that cannot be made stops the walk with everything before it kept and its own reason said out loud - which is what should happen, because a run the cut cannot take is a finding rather than a row to step over.");
  await ai_git_noted();
  let cut = [];
  let skipped = [];
  let going = true;
  while (going) {
    going = false;
    let candidates = await function_span_candidates(f_name);
    for (let row of candidates) {
      let address_to = property_get(row, "address_to");
      let stepped = list_map_property(skipped, "address_to");
      let over_is = list_includes(stepped, address_to);
      if (over_is) {
        continue;
      }
      let address_from = property_get(row, "address_from");
      let skip = await function_span_cut_skip_or_null(
        f_name,
        address_from,
        address_to,
      );
      let stepped_over_is = null_not_is(skip);
      if (stepped_over_is) {
        list_add(skipped, skip);
        continue;
      }
      let f_name_new = function_part_name_or_null(f_name, address_to);
      await function_call_commit(function_functionize, [
        f_name,
        address_from,
        address_to,
        f_name_new,
      ]);
      list_add(cut, {
        address_from,
        address_to,
        f_name_new,
      });
      going = true;
      break;
    }
  }
  let r = {
    f_name,
    cut,
    skipped,
  };
  return r;
}
