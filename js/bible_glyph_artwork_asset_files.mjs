import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_artwork_assets_tree } from "./bible_glyph_artwork_assets_tree.mjs";
import { list_find_property_json } from "./list_find_property_json.mjs";
import { null_is } from "./null_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_artwork_tree_paths } from "./bible_glyph_artwork_tree_paths.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_artwork_asset_files(asset_name) {
  "Every file the artwork set keeps under one picture's name, listed all the way down to the drawings themselves.";
  "$plain asset_name";
  "the name is the artwork set's own folder name for one picture, such as Person. It names a folder to list and nothing that runs.";
  "IT ANSWERS THE QUESTION A MISSING FILE LEAVES BEHIND. When the name is right and the fetch still comes back empty, the picture is arranged some way the fetching rule does not expect, and no amount of guessing at addresses will say which way. This shows the arrangement itself.";
  "IT WALKS DOWN RATHER THAN ASKING FOR EVERYTHING AT ONCE, because the whole set listed in one go is a few tens of thousands of entries fetched to answer a question about one of them.";
  arguments_assert(arguments, 1);
  let entries = await bible_glyph_artwork_assets_tree();
  let asset = list_find_property_json(entries, "path", asset_name);
  let b = null_is(asset);
  let held = not(b);
  assert_json(held, {
    asset_name,
    hint: "the artwork set holds no picture under that name - ask which names it does hold before asking what is inside one.",
  });
  let url = property_get(asset, "url");
  let paths = await bible_glyph_artwork_tree_paths(url, asset_name);
  return paths;
}
