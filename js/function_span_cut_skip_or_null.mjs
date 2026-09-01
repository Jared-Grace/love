import { arguments_assert } from "./arguments_assert.mjs";
import { function_span_opening_is } from "./function_span_opening_is.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { function_part_name_or_null } from "./function_part_name_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { function_span_cut_skip_decided_or_null } from "./function_span_cut_skip_decided_or_null.mjs";
export async function function_span_cut_skip_or_null(
  f_name,
  address_from,
  address_to,
) {
  "$plain f_name";
  "$plain address_from";
  "$plain address_to";
  arguments_assert(arguments, 3);
  ("Why a run of lines is being stepped over rather than cut out, or nothing at all when there is no reason to step over it.");
  ("The three questions only a repository can answer, asked here and then handed over to the reading that holds every reason. Whether the run starts on the first line of work is a question about a body somebody has to open; whether the word the run ends on is already answered to, and whether the name the run would take is spoken for, are questions about which files exist. Nothing else about a run needs a repository at all, so nothing else is asked here.");
  ("Split apart on 2026-09-01, and the reason is that the reasons could not be checked. Every one of them is decided from two words, but reaching them meant naming a function that really stands in a repository, and every corpus in this repo is a piece of writing parsed where it is written - so not one of the eight reasons had a case anywhere, and any of them could have been turned around without a thing going red. Written as an answer handed in, they can all be written out and asked about.");
  ("All three are asked before any of them is looked at, where the reading used to ask each one only if the reasons above it had let the run through. What comes back is the same for every run either way, because none of these questions writes anything or depends on the others; the cost is at most two more lookups on a run that was going to be stepped over anyway, and the walk that asks this hardest asks it over the handful of functions standing above the ceiling.");
  ("The name the run would take is worked out here only in order to ask whether it is taken, and worked out again inside the reading that decides. Handing it in instead would let somebody write down a run beside a name its own word would never have given.");
  let opening_is = await function_span_opening_is(f_name, address_from);
  let known = await function_exists(address_to);
  let answered_to_is = property_get(known, "exists");
  let f_name_new = function_part_name_or_null(f_name, address_to);
  let named_is = null_not_is(f_name_new);
  let name_taken_is = false;
  if (named_is) {
    let search = await function_exists(f_name_new);
    name_taken_is = property_get(search, "exists");
  }
  let skip = function_span_cut_skip_decided_or_null(
    f_name,
    address_from,
    address_to,
    opening_is,
    answered_to_is,
    name_taken_is,
  );
  return skip;
}
