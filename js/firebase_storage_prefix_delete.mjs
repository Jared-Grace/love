import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_prefix_names } from "./firebase_storage_prefix_names.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { firebase_storage_delete } from "./firebase_storage_delete.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
export async function firebase_storage_prefix_delete(prefix) {
  "Remove every file storage holds under one folder, having first read back what those files are.";
  "$plain prefix";
  "It removes only names it has been handed and looked at. Storage can be asked to remove by folder in one call, and that call is shorter, but nothing about it can be checked: whatever the folder turns out to match is gone before anybody sees the list. Here the list is read first, every name in it is held against the folder that was asked for, and a single name that does not belong stops the whole thing before one file is touched. A slip of the fingers in the folder name therefore costs nothing.";
  "Afterwards it asks again and answers with what is left. A remove that quietly failed on some of them looks exactly like one that worked, so the answer says how many were found, how many were removed, and how many are still there - and only the last of those three was measured after the fact.";
  "A few at a time rather than all at once, because tens of thousands of removes started together cost more in the starting than the waiting they would save.";
  "Each single remove is tried again before it is allowed to fail. Over tens of thousands of files the far end will answer one of them with an internal error that means nothing but try again, and without a retry that one answer ends the whole sweep - measured, on a folder of thirty thousand, two minutes in and eight folders short.";
  arguments_assert(arguments, 1);
  let names = await firebase_storage_prefix_names(prefix);
  function stray_is(name) {
    let outside = text_starts_with_not(name, prefix);
    return outside;
  }
  let strays = list_filter(names, stray_is);
  let clean = equal(strays.length, 0);
  assert_json(clean, {
    prefix: prefix,
    strays,
    hint: "storage answered with a name that is not inside the folder that was asked about, so nothing was removed",
  });
  async function remove(name) {
    async function remove_once() {
      await firebase_storage_delete(name);
    }
    await retry_standard(remove_once);
    return name;
  }
  let removed = await list_map_limited_async(names, remove, 50);
  let left = await firebase_storage_prefix_names(prefix);
  let r = {
    prefix: prefix,
    found: names.length,
    deleted: removed.length,
    remaining: left.length,
  };
  return r;
}
