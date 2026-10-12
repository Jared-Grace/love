import { strongs_greek_json_path } from "./strongs_greek_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
export async function strongs_greek_definition(strong_number) {
  "Strong's Greek Dictionary (James Strong, 1890; openscriptures JSON, CC-BY-SA): { lemma, translit, strongs_def, derivation, kjv_def } for a Strong's number (numeric, e.g. 2889 for κόσμος), or null if unknown.";
  "The dictionary used to be kept in a variable beside the function after the first read; an overwrite that writes only the function lost that variable and left a read of a name nothing bound, so every call threw. Reading it each time gives the same answer and holds nothing outside the function.";
  let file_path = strongs_greek_json_path();
  let dictionary = await file_read_json(file_path);
  let entry = property_get_or_null(dictionary, "G" + strong_number);
  if (not(entry)) {
    return null;
  }
  return entry;
}
