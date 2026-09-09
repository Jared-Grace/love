import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { list_take } from "./list_take.mjs";
import { js_function_declaration_private_names } from "./js_function_declaration_private_names.mjs";
import { js_node_copy } from "./js_node_copy.mjs";
import { js_statements_shape } from "./js_statements_shape.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_skip } from "./list_skip.mjs";
import { js_statements_span_cuttable_is } from "./js_statements_span_cuttable_is.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
export function js_function_declaration_head_shared_verdict_or_null(
  declaration,
  shared,
) {
  arguments_assert(arguments, 2);
  ("Whether a function opens with a copy of a shared function's body, and if it does, whether that copy could be swapped for a call without changing what the function does - answered with nothing at all when the opening is not a copy in the first place.");
  ("Nothing and a refusal are different answers on purpose. Almost every function in the repo opens with something else entirely and there is nothing to say about any of them; a refusal is about a function that really does begin with the same work and still cannot take the swap, and each one of those is worth reading, because it is either a real hazard or a rule drawn too tightly.");
  ("Three things are asked once the openings agree. The names the shared function was handed have to be names this one was handed too, or the call written in place of the copy would read something else. The run has to be one that could leave a body at all, which is the same five silent wrongs a cut is refused for, asked of the same reader the cut asks - a run this lets through is a run the cut would take. And the run must make at most one name the lines below still read, because a call hands back one thing and the second name would be left pointing at nothing.");
  ("The one name that is allowed to survive is found by where it stands rather than by what it is called. The copy calls it something of its own, so the place the shared function's answer holds in the list of names its run makes is read off the same list here, and whatever this function called it is what the swap keeps.");
  ("It copies before it blanks, since the blanking is done in place and the statements read here belong to the caller's parse.");
  let size = property_get(shared, "size");
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let short_is = list_size_less_than_value(working, size);
  if (short_is) {
    let too_small = null;
    return too_small;
  }
  let head = list_take(working, size);
  let private_names = js_function_declaration_private_names(declaration);
  let copied = js_node_copy(head);
  let shape = js_statements_shape(copied, private_names);
  let shared_shape = property_get(shared, "shape");
  let same_is = equal(shape, shared_shape);
  let apart_is = not(same_is);
  if (apart_is) {
    let unrelated = null;
    return unrelated;
  }
  let params = js_function_declaration_params_names(declaration);
  let shared_params = property_get(shared, "params");
  let borrowed = list_difference(shared_params, params);
  let borrowed_is = list_empty_not_is(borrowed);
  if (borrowed_is) {
    let handed_elsewhere = {
      collapsible: false,
      reason:
        "it opens by reading a name the shared function was handed and this one was never handed",
      local_name: null,
    };
    return handed_elsewhere;
  }
  let tail = list_skip(working, size);
  let above = [];
  let cuttable_is = js_statements_span_cuttable_is(above, head, tail);
  let stuck_is = not(cuttable_is);
  if (stuck_is) {
    let stuck = {
      collapsible: false,
      reason:
        "the opening run could not leave this body without changing what it does",
      local_name: null,
    };
    return stuck;
  }
  let made_names = js_statements_declared_names_direct(head);
  let answer_place = property_get(shared, "answer_place");
  let local_name = list_get_or_null(made_names, answer_place);
  let kept = [local_name];
  let outputs = js_statements_span_outputs(head, tail);
  let extra = list_difference(outputs, kept);
  let extra_is = list_empty_not_is(extra);
  if (extra_is) {
    let split = {
      collapsible: false,
      reason:
        "the opening run makes more than one name the lines below still read, and a call hands back one",
      local_name: local_name,
    };
    return split;
  }
  let taken = {
    collapsible: true,
    reason: "",
    local_name: local_name,
  };
  return taken;
}
