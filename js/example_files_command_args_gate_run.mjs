import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { example_files_command_args_walked } from "./example_files_command_args_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function example_files_command_args_gate_run() {
  "QA gate: every folder-sized example spells as many arguments as the core it is run through actually declares. Throws so the dispatcher seam exits nonzero.";
  "A folder example hands its arguments to the core positionally, so a core that grows or loses a parameter silently invalidates every example already written against the old shape. Nothing else in the corpus asks that question: the arguments are passed straight through and whatever the call makes of them is what gets reported.";
  "What makes the miscount worth its own gate is where it lands. An example marked as refusing passes when the core throws and leaves the folder untouched, and a wrong argument count throws on the arity check before the command reaches anything it could write - so the folder is untouched, the throw is clean, and the example passes while proving nothing at all about the refusal it claims to demonstrate. A false pass is worse than a failure, because it is a green answer to a question that was never asked.";
  ("This is not hypothetical. When ",
    fn_name("function_span_call_existing"),
    "'s core took a joined pair of addresses apart into two parameters, the refusal example beside it kept the old three-argument spelling and went on passing; it was found by hand, while the core was being changed for another reason.");
  ("Measured against zero rather than against a baseline, because the whole corpus fits today and a miscount is never a judgment call - the core declares a number and the example either spells it or does not.");
  ("HOW MANY EXAMPLES WERE HELD UP AGAINST A CORE TRAVELS OUT WITH THE VERDICT. An example whose command the register does not pair is passed over without a word, so a register that had stopped pairing anything would leave every example passed over and this gate green about nothing at all - which is the very false pass it was written to stop, one floor down. The offenders cannot say so, being nothing on every run that passes; the number of comparisons made can, by falling.");
  arguments_assert(arguments, 0);
  let told = await example_files_command_args_walked();
  let walked = property_get(told, "walked");
  let miscounted = property_get(told, "miscounted");
  list_empty_is_assert_json(miscounted, {
    hint: "a folder example spells a different number of arguments than its core declares, so it is proving nothing - if the example is marked as refusing it is passing on the arity check rather than on the refusal. Correct the example's args, or the core's parameters, whichever moved.",
  });
  let r = {
    walked,
  };
  return r;
}
