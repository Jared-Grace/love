import { arguments_assert } from "./arguments_assert.mjs";
import { example_files_command_args_walked } from "./example_files_command_args_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function example_files_command_args_miscounted() {
  "Every folder example carrying a different number of arguments from the one its core declares, with both counts and the name of each.";
  "The reading itself lives next door and answers this beside how many examples it actually held up against a core. The comparison is wanted in one place and the count in another, so the narrowing is done once here rather than at each place that only wants the offenders.";
  "Measured on 2026-08-26: one example in the corpus was passing on a wrong count. Its command grew a parameter, the example still spelled the old joined form, and the corpus went on printing a pass for a guard that had not been reached since.";
  "An example naming a command the register does not pair is passed over rather than complained about. That it has no core at all is a different fault with a different reading of its own, and naming it here would report the same thing twice under two headings.";
  arguments_assert(arguments, 0);
  let told = await example_files_command_args_walked();
  let miscounted = property_get(told, "miscounted");
  return miscounted;
}
