import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_span_cuttable_is } from "./js_statements_span_cuttable_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice_include } from "./list_slice_include.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
export function js_statements_span_candidate_best(statements, addresses, from) {
  arguments_assert(arguments, 3);
  ("The longest run of lines that could be cut out starting at the given line, or nothing when no run starting there could be.");
  ("Longest rather than first, because a shorter run inside a longer one buys less and leaves the longer one still to find. The list of starts is walked separately, so every run that begins anywhere is still offered - only the shortenings of each are left out.");
  ("Every end is tried rather than stopping at the first one that refuses. A run that cannot be cut does not stay uncuttable as it grows: a line further down may be the very line that brings into being the name an earlier line was writing to, and once that line is inside the run the writing is the run's own.");
  ("Both ends have to be lines a name reaches, because that is how the cut is told where to start and stop. A line no name reaches is skipped as an end and passed straight over in the middle, where it needs no address at all.");
  let address_from = list_get(addresses, from);
  if (null_is(address_from)) {
    return null;
  }
  let count = list_size(statements);
  let longest = null;
  for (let to = from; less_than(to, count); to++) {
    let address_to = list_get(addresses, to);
    if (null_is(address_to)) {
      continue;
    }
    let span = list_slice_include(statements, from, to);
    let cuttable = js_statements_span_cuttable_is(span);
    if (not(cuttable)) {
      continue;
    }
    let size = list_size(span);
    longest = {
      from,
      to,
      address_from,
      address_to,
      size,
    };
  }
  return longest;
}
