import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { list_last } from "./list_last.mjs";
import { property_get } from "./property_get.mjs";
import { js_return_on } from "./js_return_on.mjs";
import { null_is } from "./null_is.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_function_declaration_run_answered_or_null(declaration) {
  arguments_assert(arguments, 1);
  ("A function that is a run of work and then the handing back of one name that run brought into being, read as that run and that name - and nothing at all when it is anything else.");
  ("This is the shape a function has to have before a copy of its body standing inside somebody else can be swapped for a call to it. The swap puts the call where the copy stood and lets the name the run made carry on being read by everything below, so there has to be exactly one such name and the run has to be what made it.");
  ("Three ways of ending are turned away and each for its own reason. A function handing back something worked out on the way out gives the caller nothing to keep calling by a name. A function handing back nothing at all is not something a copy of its body could stand in for. And a function whose answer was handed to it rather than made by it would have the swap write a name into a line above the line that fills it.");
  ("The line counting the arguments is left out along with the prose, which is what lets a function the pass has been over be compared against the same work written inside another function, where no such line is ever written.");
  ("Nothing is copied here and nothing is changed. The run handed back is the caller's own parse, so a reader that blanks names in place must copy before it asks.");
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let short_is = list_size_less_than_value(working, 2);
  if (short_is) {
    let too_small = null;
    return too_small;
  }
  let final_statement = list_last(working);
  let answer_name = null;
  function answer_name_set(argument) {
    let name = property_get(argument, "name");
    answer_name = name;
  }
  function answer_name_leave() {
    "handed back something other than a plain name, so there is no name for the lines below to carry on reading";
  }
  js_return_on(final_statement, answer_name_set, answer_name_leave);
  let unnamed_is = null_is(answer_name);
  if (unnamed_is) {
    let unanswered = null;
    return unanswered;
  }
  let doing_run = list_take_less_1(working);
  let made_names = js_statements_declared_names_direct(doing_run);
  let made_here_is = list_includes(made_names, answer_name);
  if (made_here_is) {
    let answered = {
      run: doing_run,
      answer_name: answer_name,
    };
    return answered;
  }
  let made_elsewhere = null;
  return made_elsewhere;
}
