import { js_statements_span_outputs_written_names } from "./js_statements_span_outputs_written_names.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function js_statements_span_outputs_written_assert(
  span,
  tail,
  f_name_new,
) {
  "$plain f_name_new";
  "Refuses a run of lines that hands back a name somebody goes on writing to, and lets every other run through";
  "Handing a name back hands back the value it holds at that moment. Where the name is only given a value and then read, the value is the name and nothing is lost. Where it is written to again, the write lands on one side of the cut and a reading of it sits on the other, and from that write onwards the two sides hold different things while both go on calling it by the same word.";
  "The mirror of the refusal it sits beside, and the two together are one rule. That one refuses a run that reaches back to write a name born above it; this one refuses a run that hands forward a name written after it is born. Either way a name would end up in two places, and a cut is allowed to move lines but never to split a name.";
  "Every such name is refused rather than only the ones that turn out to matter, for the same reason as its mirror. Whether a particular write reaches a particular reading depends on which function is holding what and on who calls it when, which cannot be settled by reading the lines in order. A refusal costs a message and a second choice of ends; being wrong here costs a screen that goes on answering with a value from before the player touched it, and nothing goes red.";
  "The reading is held one name down, so that a proposer weighing runs it will never cut asks exactly the question this refuses on.";
  let split = js_statements_span_outputs_written_names(span, tail);
  list_empty_is_assert_json(split, {
    hint: "this run of lines would hand back a name that is written to again afterwards, so the run and the lines behind it would each end up with their own copy and would stop agreeing from the first write onwards. Would you like to choose ends that hold the lines doing the writing as well, or ends that stop before the name is brought into being?",
    f_name_new,
  });
}
