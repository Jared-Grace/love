import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { not } from "./not.mjs";
import { js_function_declaration_head_unbroken_is } from "./js_function_declaration_head_unbroken_is.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_unparse_multiple } from "./js_unparse_multiple.mjs";
export function js_function_declaration_head_namable_or_null(
  declaration,
  size,
) {
  arguments_assert(arguments, 2);
  ("Whether the first few things a function does could be written out as a function of their own, and what that function would be handed and hand back.");
  ("The reading over shared openings says which groups have a helper already. It says nothing about the rest, and the rest is where the thinking is - so this asks the one question that can be answered without thinking, which is whether naming the run would even be possible. A group nobody can collapse is not a group waiting for a name; it is a group to leave alone, and telling those apart costs nothing next to reading them.");
  ("Four things have to hold, and each of them is a way a cut goes wrong rather than a matter of taste. The run has to stand unbroken in the lines it is written with, or a swap leaves whatever was written among it stranded. Something has to be left behind it, or there is no function here to shorten. Exactly one of the names it makes may be read below it, because a call hands back one thing. And that one name has to be made by the last line of the run, or the call written in its place is put where the name is made and the lines after it inside the run are lost.");
  ("It also refuses a run that calls something written below it. The language makes function declarations before the first line runs, so a run may lean on one and read perfectly well where it stands; taken out into a function of its own it is somewhere that declaration was never made, and the line stops the moment it is reached.");
  ("$plain size");
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let room_is = list_size_greater_than(working, size);
  if (not(room_is)) {
    let no_room = null;
    return no_room;
  }
  let unbroken_is = js_function_declaration_head_unbroken_is(declaration, size);
  if (not(unbroken_is)) {
    let broken = null;
    return broken;
  }
  let head = list_take(working, size);
  let tail = list_skip(working, size);
  let outputs = js_statements_span_outputs(head, tail);
  let single_is = equal(list_size(outputs), 1);
  if (not(single_is)) {
    let many = null;
    return many;
  }
  let answer = list_first(outputs);
  let last_line = list_last(head);
  let last_one = [last_line];
  let last_made = js_statements_declared_names_direct(last_one);
  let ends_is = list_includes(last_made, answer);
  if (not(ends_is)) {
    let early = null;
    return early;
  }
  let read = js_statements_referenced_names(head);
  let made_below = js_statements_declared_names_direct(tail);
  let leaning = list_intersection(read, made_below);
  let leaning_is = list_empty_not_is(leaning);
  if (leaning_is) {
    let hoisted = null;
    return hoisted;
  }
  let param_names = js_function_declaration_params_names(declaration);
  let params = list_intersection(read, param_names);
  let lines = js_unparse_multiple(head);
  let namable = {
    answer: answer,
    params: params,
    lines: lines,
  };
  return namable;
}
