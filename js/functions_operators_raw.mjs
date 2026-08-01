import { arguments_assert } from "./arguments_assert.mjs";
import { functions_code_offenders_generic } from "./functions_code_offenders_generic.mjs";
import { js_code_operators_raw } from "./js_code_operators_raw.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_operators_raw() {
  "Every function still writing a comparison or a sum as an operator, where the pass that canonicalizes a file would write a call instead.";
  "These are the functions the fold has no way to see. Folding matches on the shape a body has after that pass, so a function the pass has never run over is compared against nothing and the places that write its body out by hand go unreported. One was found this way: asking whether a list is empty was spelled with a triple equals, ten files wrote out the same two steps, and the fold gate stayed green throughout - canonicalizing that one function alone turned up a site immediately.";
  "Not everything here is a mistake. A few drivers keep plain javascript on purpose, and the functions that stand for the operators cannot use themselves. The second of those is excluded by the same rule the pass uses; the first is a judgment, which is why this reports and changes nothing.";
  "The sweep around the question is the same sweep every other repo-wide question uses, and it is asked for here rather than written out again. This was written out by hand first, and the copy quietly dropped every file it could not parse without saying so - which reads as a repo with nothing wrong in it, the most reassuring shape a total failure can wear. The shared sweep counts the skipped ones out loud.";
  arguments_assert(arguments, 0);
  let offenders = await functions_code_offenders_generic(
    js_code_operators_raw,
    "operators",
  );
  function count_of(offender) {
    let operators = property_get(offender, "operators");
    let count = list_size(operators);
    return count;
  }
  list_sort_number_mapper_reverse(offenders, count_of);
  return offenders;
}
