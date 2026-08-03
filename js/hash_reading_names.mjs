import { arguments_assert } from "./arguments_assert.mjs";
import { hash_key_doors } from "./hash_key_doors.mjs";
import { hash_object_made_name } from "./hash_object_made_name.mjs";
import { hash_object_read_name } from "./hash_object_read_name.mjs";
import { hash_object_transform_names } from "./hash_object_transform_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
export function hash_reading_names() {
  "Every name a reading of the address of a page has to meet before it can find anything - the short doors, and the three ways a file comes by a name holding the address as an object.";
  "Gathered in one place so the narrowing that decides which files are opened at all can be checked against the whole set rather than against a list written out again beside it.";
  arguments_assert(arguments, 0);
  let doors = hash_key_doors();
  let transforms = hash_object_transform_names();
  let names = list_concat(doors, transforms);
  let read = hash_object_read_name();
  list_add(names, read);
  let made = hash_object_made_name();
  list_add(names, made);
  return names;
}
