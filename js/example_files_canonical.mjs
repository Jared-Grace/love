import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { js_format_trim } from "./js_format_trim.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_join } from "./list_join.mjs";
("Canonical string for a set of files (a list of {name, source}): each file formatted");
("and prefixed by its name, sorted by name, joined — so two file-sets compare byte-exact");
("regardless of read order or import spacing (js_format_trim = the real write-time pass).");
export async function example_files_canonical(files) {
  async function to_block(f) {
    let name = property_get(f, "name");
    let source = property_get(f, "source");
    let formatted = await js_format_trim(source);
    let block = text_combine_multiple([name, "\n----\n", formatted]);
    return block;
  }
  let blocks = await list_map_unordered_async(files, to_block);
  list_sort_text(blocks);
  let joined = list_join(blocks, "\n====\n");
  return joined;
}
