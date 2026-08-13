import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_index_flat_uploaded_path } from "./ebible_index_flat_uploaded_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_index_flat_uploaded_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every bible this repo ships has been asked whether it has a flat index of its own, and the answer is written down.");
  ("A page walks the union of the indexes of the bibles a reader chose, and a bible with no index is passed over - shown at whatever verse numbers the others name. That is a kindness while somebody knows about it and a quiet wrong answer when nobody does: a bible numbering its verses its own way would be walked past its own numbering and nothing anywhere would say so.");
  ("So having an index is not required and not having one is not refused. What is refused is a bible on the list that nobody has asked the question of, because that is the only one of the three states that is a mistake rather than a fact.");
  ("This reads only the file. The asking reaches storage and is a command somebody runs.");
  let path = ebible_index_flat_uploaded_path();
  let recorded = await file_read_json(path);
  let uploaded = property_get(recorded, "uploaded");
  let absent = property_get(recorded, "absent");
  let answered = lists_combine([uploaded, absent]);
  let f_name = fn_name("ebible_index_flat_uploaded_write");
  let unasked_hint = text_combine_multiple([
    "a bible is shipped that nobody has asked whether it has a flat index of its own, so a reader choosing it is walked past verse numbers taken from other bibles and nothing says so - ask storage again with ",
    f_name,
    ", which rewrites the record",
  ]);
  let asked = ebible_bibles_answered_assert(answered, f_name, unasked_hint);
  let unasked = property_get(asked, "unasked");
  let departed = property_get(asked, "departed");
  let r = {
    checked: list_size(shipped),
    uploaded: list_size(uploaded),
    absent: list_size(absent),
    unasked,
    departed,
  };
  return r;
}
