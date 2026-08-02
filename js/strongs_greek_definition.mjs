import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { strongs_greek_json_path } from "./strongs_greek_json_path.mjs";
("Strong's Greek Dictionary (James Strong, 1890; openscriptures JSON, CC-BY-SA).");
("Returns { lemma, translit, strongs_def, derivation, kjv_def } for a Strong's number");
("(numeric, e.g. 2889 for κόσμος), or null if unknown. Cached after first read.");
let dictionary = null;
export async function strongs_greek_definition(strong_number) {
  if (equal(dictionary, null)) {
    let file_path = strongs_greek_json_path();
    dictionary = await file_read_json(file_path);
  }
  let entry = dictionary["G" + strong_number];
  if (not(entry)) {
    return null;
  }
  return entry;
}
