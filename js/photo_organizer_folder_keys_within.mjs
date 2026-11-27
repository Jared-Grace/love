import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function photo_organizer_folder_keys_within(folders, key) {
  "$plain folders";
  "$plain key";
  "The key of one folder and the keys of every folder inside it, at any depth - the folders a delete of it takes away, since a folder whose folder is gone would sit inside nothing and never be seen again.";
  "Each folder is reached once, from the folder it sits inside, so the walk ends however deep the folders go.";
  arguments_assert(arguments, 2);
  let keys = [key];
  let index = 0;
  while (less_than(index, keys.length)) {
    let at = keys[index];
    for (let f of folders) {
      let left = property_get(f, "parent");
      if (equal(left, at)) {
        let item = property_get(f, "key");
        list_add(keys, item);
      }
    }
    index = index + 1;
  }
  return keys;
}
