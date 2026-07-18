import { file_read_json } from "./file_read_json.mjs";
import { strongs_greek_json_path } from "./strongs_greek_json_path.mjs";
// Strong's Greek Dictionary (James Strong, 1890; openscriptures JSON, CC-BY-SA).
// Returns { lemma, translit, strongs_def, derivation, kjv_def } for a Strong's number
// (numeric, e.g. 2889 for κόσμος), or null if unknown. Cached after first read.
let dictionary = null;
export async function strongs_greek_definition(strong_number) {
  if (dictionary === null) {
    dictionary = await file_read_json(strongs_greek_json_path());
  }
  let entry = dictionary["G" + strong_number];
  if (!entry) {
    return null;
  }
  return entry;
}
