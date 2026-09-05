import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function file_json_named_append(f_path, name, value) {
  arguments_assert(arguments, 3);
  ("$plain f_path");
  ("$plain name");
  ("$plain value");
  ("Puts one more thing onto the end of a named list in a file that holds a collection of named lists, making the file and the list if neither is there yet, and hands back the whole collection as it stands afterwards.");
  ("★ IT ADDS WHERE ITS SIBLING REPLACES, BECAUSE A READING STORED BY OVERWRITING THE LAST ONE HIDES ITS OWN SCATTER FOREVER. Two kept readings of the same thing show for free how much of the answer was the thing and how much was the reader; one kept reading shows nothing, and shows it in exactly the shape of a fact. Measured 2026-09-05: a transcriber heard one recording as 165 words and then as 161, and in the outro as eight repetitions of a word and then as four, and nothing anywhere warned, because each run had written over the one before it. Every number derived from that reading moved with it and every one of them was being quoted as settled.");
  ("★ THE POSITION IN THE LIST IS THE ONLY ORDER KEPT, AND NO MOMENT IS WRITTEN DOWN, because a time of day is data nobody measured and would be believed the moment it was stored. What a reader of these actually asks is whether two readings of the same thing agree, and that question is answered by having both of them, not by knowing which afternoon each arrived on.");
  ("An absent file and an absent name are both the first write rather than a fault, the same way its sibling treats an absent file: the alternative is every caller opening with the same three lines that make an empty one.");
  let there = await file_exists(f_path);
  let empty = {};
  let record = not(there) ? empty : await file_read_json(f_path);
  let kept = record[name];
  let first = equal(kept, undefined);
  let none = [];
  let values = first ? none : kept;
  values.push(value);
  record[name] = values;
  await file_overwrite_json(f_path, record);
  return record;
}
