import { bible_glyph_artwork_source } from "./bible_glyph_artwork_source.mjs";
import { property_get } from "./property_get.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_find_property_json } from "./list_find_property_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { json_from } from "./json_from.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_artwork_names_available() {
  "Every name the artwork set itself holds a picture under, read from the set rather than remembered.";
  "IT EXISTS SO THAT A NAME STOPS BEING A GUESS. The bridge table between this repo's glyph names and the set's own names is written by a person from knowing the emoji, and a few come out spelled the set's way instead - which shows up only as a picture quietly missing. Asking the set what it actually calls things turns each of those from a puzzle into a lookup.";
  "IT IS NOT KEPT IN A FILE, because a copy of somebody else's list is stale the day the set grows and there is no way to notice. It costs two requests to ask, and it is asked when somebody is correcting the table, which is rare.";
  "TWO REQUESTS, because the listing service hands over one level at a time: the first names the folders at the top of the repository, and the second names the folders inside the one holding the pictures.";
  let source = bible_glyph_artwork_source();
  let tree_url = property_get(source, "tree_url");
  let top_text = await http_text_or_null(tree_url);
  let b = null_is(top_text);
  let top_read = not(b);
  assert_json(top_read, {
    tree_url,
    hint: "the artwork set's listing could not be read - has the address moved, or is the service refusing to answer for now?",
  });
  let top = json_from(top_text);
  let top_entries = property_get(top, "tree");
  let assets = list_find_property_json(top_entries, "path", "assets");
  let b2 = null_is(assets);
  let assets_found = not(b2);
  assert_json(assets_found, {
    tree_url,
    hint: "the artwork set no longer keeps its pictures in a folder called assets - what is it called now?",
  });
  let assets_url = property_get(assets, "url");
  let assets_text = await http_text_or_null(assets_url);
  let b3 = null_is(assets_text);
  let assets_read = not(b3);
  assert_json(assets_read, {
    assets_url,
    hint: "the folder of pictures could not be listed - has the service refused to answer for now?",
  });
  let listed = json_from(assets_text);
  let entries = property_get(listed, "tree");
  let names = list_map_property(entries, "path");
  return names;
}
