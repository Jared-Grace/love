import { arguments_assert } from "./arguments_assert.mjs";
import { strongs_hebrew_dictionary } from "./strongs_hebrew_dictionary.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { strongs_greek_json_path } from "./strongs_greek_json_path.mjs";
export async function strongs_dictionary_both() {
  arguments_assert(arguments, 0);
  ("Strong's Hebrew and Greek dictionaries as one, keyed the way Strong wrote a number - H430, G2889 - which never collide because the letter is part of the key.");
  ("Each dictionary is read once by asking once, so a sweep over many chapters hands this round rather than reading a file per word.");
  let hebrew = await strongs_hebrew_dictionary();
  let file_path = strongs_greek_json_path();
  let greek = await file_read_json(file_path);
  let both = {
    ...hebrew,
    ...greek,
  };
  return both;
}
