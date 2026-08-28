import { arguments_assert } from "./arguments_assert.mjs";
import { functions_rewrite_then_read_names_walked } from "./functions_rewrite_then_read_names_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_rewrite_then_read_names() {
  "The names alone of the functions that write a named function out again and then, in the same run, ask something that reads it.";
  "The reading itself lives next door and answers this beside how many candidates it opened. A record is written from a flat list and a gate needs the count, so the narrowing is done once here rather than at each place that only wants the names.";
  "Ask the fuller reading two doors along for the pairings themselves when a name here has to be acted on.";
  arguments_assert(arguments, 0);
  let told = await functions_rewrite_then_read_names_walked();
  let names = property_get(told, "names");
  return names;
}
