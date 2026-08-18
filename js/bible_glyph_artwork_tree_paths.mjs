import { arguments_assert } from "./arguments_assert.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { json_from } from "./json_from.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_artwork_tree_paths(tree_url, prefix) {
  "Every file under one folder of the artwork set's listing, named by the path that reaches it from wherever the walk started.";
  "$plain tree_url";
  "$plain prefix";
  "the prefix is the path already walked, and it is only joined onto the names found below. Nothing here reads or writes a file on this machine.";
  "A FOLDER IN THE LISTING NAMES ITS CHILDREN AND NOTHING DEEPER, so reaching the drawings means asking again for each folder found. That is why this calls itself: the depth is the set's business rather than something this repo should assume.";
  arguments_assert(arguments, 2);
  let text = await http_text_or_null(tree_url);
  let b = null_is(text);
  let read = not(b);
  assert_json(read, {
    tree_url,
    hint: "a folder of the artwork set could not be listed - has the service refused to answer for now?",
  });
  let listed = json_from(text);
  let entries = property_get(listed, "tree");
  let paths = [];
  for (let entry of entries) {
    let name = property_get(entry, "path");
    let joined = text_combine(prefix, "/", name);
    let type = property_get(entry, "type");
    let folder = equal(type, "tree");
    if (folder) {
      let url = property_get(entry, "url");
      let deeper = await bible_glyph_artwork_tree_paths(url, joined);
      list_add_multiple(paths, deeper);
      continue;
    }
    list_add(paths, joined);
  }
  return paths;
}
