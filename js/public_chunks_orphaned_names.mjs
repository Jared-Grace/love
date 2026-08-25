import { arguments_assert } from "./arguments_assert.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_get } from "./property_get.mjs";
import { public_chunks_orphaned } from "./public_chunks_orphaned.mjs";
export async function public_chunks_orphaned_names() {
  "Just the addresses of the leftover script files across the three folders a build writes into, flat and in order.";
  "The sizes are dropped on purpose. A ratchet compares names, and a name is the same thing from one reading to the next while a size is not - the same leftover emitted a byte larger would read as a fresh offender, and a gate that cries about nothing is a gate that stops being run.";
  "Put in order because the reading behind this answers its folders as each finishes rather than in the order it was asked, so a record written straight from it would change on a run where nothing had.";
  arguments_assert(arguments, 0);
  let reading = await public_chunks_orphaned();
  let folders = property_get(reading, "folders");
  let nested = list_map_property(folders, "orphaned");
  let flat = list_flat(nested);
  let f_paths = list_map_property(flat, "f_path");
  let names = list_sort_text(f_paths);
  return names;
}
