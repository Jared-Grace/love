import { bible_glyph_artwork_source } from "./bible_glyph_artwork_source.mjs";
import { property_get } from "./property_get.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_find_property_json } from "./list_find_property_json.mjs";
import { json_from } from "./json_from.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_artwork_assets_tree() {
  "The artwork set's own listing of the folder holding its pictures - one entry per picture, each carrying the name it is kept under and the address of what is inside it.";
  "THE ADDRESS OF WHAT IS INSIDE IS THE HALF WORTH KEEPING, and it is why this answers entries rather than names. The names alone say whether the set has a picture at all; the addresses are what lets somebody go one level further and see how that particular picture is arranged, which is the question when a name is right and the file still cannot be found.";
  "It is read from the set every time rather than kept in a file, because a copy of somebody else's listing is stale the day their set grows and nothing here would notice.";
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
  return entries;
}
