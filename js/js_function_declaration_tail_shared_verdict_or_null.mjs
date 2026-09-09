import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { list_take_last } from "./list_take_last.mjs";
import { list_last } from "./list_last.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { list_take } from "./list_take.mjs";
import { js_function_declaration_personal_names } from "./js_function_declaration_personal_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_node_copy } from "./js_node_copy.mjs";
import { js_statements_shape } from "./js_statements_shape.mjs";
import { equal } from "./equal.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { js_statements_span_cuttable_is } from "./js_statements_span_cuttable_is.mjs";
export function js_function_declaration_tail_shared_verdict_or_null(
  declaration,
  shared,
) {
  arguments_assert(arguments, 2);
  ("Whether a function ends with a copy of a shared function's body, and if it does, whether that copy could be swapped for a call without changing what the function does - answered with nothing at all when the ending is not a copy in the first place.");
  ("The mirror at the other end of the function of the question asked about openings, and it is worth having because endings are where this repo repeats itself most. Two hundred and twelve runs of lines are written at the end of more than one function here, against a far smaller number of shared openings, and that is not an accident: functions are told apart by what they go and fetch, which they do first, and they agree about what to do with it, which they do last.");
  ("One thing has to be done differently from the opening question and it is the whole of the difference between the two. There, the names the shared function was handed are the names the copy was handed too, so they are left standing in the text both are compared as, and a copy spelling a different one of its own arguments is turned away by the comparison itself. Here they cannot be: a run at the end of a function reads what that function has made along the way, so what the shared function calls its arguments are somebody else's local names. So they are left standing on the shared side, as before, and on this side they are taken out of the blanking instead - a name spelled the same way is left alone wherever it stands. The two texts then agree only if this function reads those same names at those same places, which is the same guarantee by another road, and the call written in the copy's place hands over the very things the copy was already reading.");
  ("The last line has to hand back the name the shared function hands back, read off by where it stands rather than by what it is called. That is what lets the handing back be left exactly where it is: the call is written above it under that same name, and the line that was already there goes on saying the right thing.");
  ("The run is then asked the five silent wrongs a cut is refused for, with the handing back standing below it, so a run this lets through is a run the cut would take.");
  ("It copies before it blanks, since the blanking is done in place and the statements read here belong to the caller's parse.");
  let size = property_get(shared, "size");
  let span = add(size, 1);
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let short_is = list_size_less_than_value(working, span);
  if (short_is) {
    let too_small = null;
    return too_small;
  }
  let ending = list_take_last(working, span);
  let last = list_last(ending);
  let handing_back_is = js_node_type_is(last, "ReturnStatement");
  let stops_elsewhere_is = not(handing_back_is);
  if (stops_elsewhere_is) {
    let unfinished = null;
    return unfinished;
  }
  let argument = property_get(last, "argument");
  let bare_is = null_is(argument);
  if (bare_is) {
    let empty_handed = null;
    return empty_handed;
  }
  let named_is = js_node_type_is(argument, "Identifier");
  let unnamed_is = not(named_is);
  if (unnamed_is) {
    let worked_out_late = null;
    return worked_out_late;
  }
  let returned_name = property_get_name(argument);
  let doing_run = list_take(ending, size);
  let personal = js_function_declaration_personal_names(declaration);
  let shared_params = property_get(shared, "params");
  let private_names = list_difference(personal, shared_params);
  let copied = js_node_copy(doing_run);
  let shape = js_statements_shape(copied, private_names);
  let shared_shape = property_get(shared, "shape");
  let same_is = equal(shape, shared_shape);
  let apart_is = not(same_is);
  if (apart_is) {
    let unrelated = null;
    return unrelated;
  }
  let made_names = js_statements_declared_names_direct(doing_run);
  let answer_place = property_get(shared, "answer_place");
  let local_name = list_get_or_null(made_names, answer_place);
  let answered_is = equal(returned_name, local_name);
  let hands_back_other_is = not(answered_is);
  if (hands_back_other_is) {
    let elsewhere = {
      collapsible: false,
      reason:
        "the closing run makes more than one name and the one this function hands back is not the one the shared function hands back",
      local_name: local_name,
    };
    return elsewhere;
  }
  let left = list_size(working);
  let above_count = subtract(left, span);
  let above = list_take(working, above_count);
  let below = [last];
  let cuttable_is = js_statements_span_cuttable_is(above, doing_run, below);
  let stuck_is = not(cuttable_is);
  if (stuck_is) {
    let stuck = {
      collapsible: false,
      reason:
        "the closing run could not leave this body without changing what it does",
      local_name: local_name,
    };
    return stuck;
  }
  let taken = {
    collapsible: true,
    reason: "",
    local_name: local_name,
  };
  return taken;
}
