import { arguments_assert } from "./arguments_assert.mjs";
import { public_chunks_orphaned } from "./public_chunks_orphaned.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function public_chunks_orphaned_names_walked() {
  "The addresses of the leftover script files across the three folders a build writes into, in order, beside how many script files were opened to find them.";
  "The ratchet beside this one needs both numbers and the writer that seeds it needs only the names, so the two are answered together here and the writer takes the half it wants. A gate saying only how many were left over says the same word on a swept folder and on a folder that has moved, and the count of what was walked is the only part of the answer that falls when the reading stops reaching.";
  arguments_assert(arguments, 0);
  let reading = await public_chunks_orphaned();
  let walked = property_get(reading, "walked");
  let nested = property_list_map_property(reading, "folders", "orphaned");
  let flat = list_flat(nested);
  let f_paths = list_map_property(flat, "f_path");
  let names = list_sort_text(f_paths);
  let r = {
    walked,
    names,
  };
  return r;
}
