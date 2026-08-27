import { path_join } from "./path_join.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { sword_index_entry } from "./sword_index_entry.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { sword_block_bounds } from "./sword_block_bounds.mjs";
import { add } from "./add.mjs";
import { bytes_inflate } from "./bytes_inflate.mjs";
export async function sword_testament_entries(module_folder, testament) {
  "$plain module_folder";
  "$plain testament";
  "Every entry of one testament of a Sword module, in the order the module keeps them, each as the text it holds.";
  "An entry is not the same thing as a verse. Most of them are verses, but the ones that open a book or a chapter are in the same run, and a reader has to walk the run in order to tell which is which - that is what the module gives instead of names.";
  "AN EMPTY ENTRY IS KEPT RATHER THAN DROPPED. A module written to the King James numbering has a place for every verse that numbering has, and where the underlying text does not have one the place is left empty. Dropping those would slide every later verse one place up and rename thousands of them.";
  "Each block is undone the first time a verse asks for it and the result held for the rest. The blocks are one per book, so this is a few dozen decompressions rather than one per verse.";
  let blocks_path = path_join([module_folder, `${testament}.bzs`]);
  let blocks_bytes = await file_read_buffer(blocks_path);
  let index_path = path_join([module_folder, `${testament}.bzv`]);
  let index_bytes = await file_read_buffer(index_path);
  let text_path = path_join([module_folder, `${testament}.bzz`]);
  let text_bytes = await file_read_buffer(text_path);
  let held = {};
  let count = divide(index_bytes.length, 10);
  let entries = [];
  for (let position = 0; less_than(position, count); position += 1) {
    let entry = sword_index_entry(index_bytes, position);
    if (equal(entry.size, 0)) {
      list_add(entries, "");
      continue;
    }
    let block = entry.block;
    let b = property_has(held, block);
    if (not(b)) {
      let bounds = sword_block_bounds(blocks_bytes, block);
      let sum = add(bounds.offset, bounds.compressed);
      let compressed = text_bytes.subarray(bounds.offset, sum);
      held[block] = await bytes_inflate(compressed);
    }
    let plain = held[block];
    let sum2 = add(entry.start, entry.size);
    let text = plain.subarray(entry.start, sum2).toString("utf8");
    list_add(entries, text);
  }
  return entries;
}
