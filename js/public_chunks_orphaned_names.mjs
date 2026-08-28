import { arguments_assert } from "./arguments_assert.mjs";
import { public_chunks_orphaned_names_walked } from "./public_chunks_orphaned_names_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function public_chunks_orphaned_names() {
  "Just the addresses of the leftover script files across the three folders a build writes into, flat and in order.";
  "The sizes are dropped on purpose. A ratchet compares names, and a name is the same thing from one reading to the next while a size is not - the same leftover emitted a byte larger would read as a fresh offender, and a gate that cries about nothing is a gate that stops being run.";
  "Put in order because the reading behind this answers its folders as each finishes rather than in the order it was asked, so a record written straight from it would change on a run where nothing had.";
  "The narrowing itself lives next door and answers this beside how many script files were opened. The record that seeds the ratchet wants only the names, so the dropping is done once here rather than at each place that only wants the names.";
  arguments_assert(arguments, 0);
  let told = await public_chunks_orphaned_names_walked();
  let names = property_get(told, "names");
  return names;
}
