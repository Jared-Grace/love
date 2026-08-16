import { js_statements_span_outputs_closure_names } from "./js_statements_span_outputs_closure_names.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function js_statements_span_outputs_closure_assert(
  span,
  tail,
  f_name_new,
) {
  "$plain f_name_new";
  "Refuses a run of lines holding a function that shares a name with the lines behind it, and lets every other run through";
  "What a run hands back it hands back once, as a value. Read straight down the page that loses nothing, because everything the run does happens before the handing back and everything behind happens after it. A function is where that stops being true: it is still holding the names around it when the run ends, and goes on reading and writing them for as long as anything keeps it - a button, a timer, a list somebody saved it in.";
  "So a function made inside the run and a line behind the run can end up holding the same word and two different values, and neither of them can tell. Which way round hardly matters: the function reads a name the lines behind keep writing, or writes a name the lines behind keep reading. Both are refused.";
  "The mirror of the refusal it sits beside, and the two together are one rule. That one refuses a run that reaches back to write a name born above it; this one refuses a run that keeps hold of a name it hands forward. A cut is allowed to move lines and never to split a name.";
  "Refused rather than measured further, because how far a write reaches depends on who is holding which function and on when they call it, and that is not something reading the lines in order can settle. A refusal costs a message and a second choice of ends; being wrong here costs a screen that answers forever with a value from before the player touched it, and nothing goes red.";
  "The reading is held one name down, so that a proposer weighing runs it will never cut asks exactly the question this refuses on.";
  let split = js_statements_span_outputs_closure_names(span, tail);
  list_empty_is_assert_json(split, {
    hint: "a function inside this run keeps hold of a name the run would hand back, and the lines behind the run go on using that same name - so after the cut each side would have its own copy and they would stop agreeing. Would you like to choose ends that hold those lines too, so the name stays in one place, or ends that stop before the function is made?",
    f_name_new,
  });
}
