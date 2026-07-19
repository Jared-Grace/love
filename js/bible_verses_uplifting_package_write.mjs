import { file_overwrite } from "./file_overwrite.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { json_to } from "./json_to.mjs";
import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_references_parse_lines } from "./ebible_references_parse_lines.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_verses_uplifting_package_write(bible_folder) {
  let lines = bible_verses_uplifting();
  await ebible_version_books(bible_folder);
  async function line_to_pair(line) {
    let verses = await ebible_references_parse_lines([bible_folder], [line]);
    let texts = list_map_property(verses, "text");
    let present = list_filter_null_not_is(texts);
    let joined = list_join_space(present);
    let pair = {
      line,
      joined,
    };
    return pair;
  }
  let pairs = await list_map_unordered_async(lines, line_to_pair);
  let map = {};
  function pair_set(pair) {
    let line = property_get(pair, "line");
    let joined = property_get(pair, "joined");
    property_set(map, line, joined);
  }
  each(pairs, pair_set);
  let name = text_combine_multiple([
    "bible/uplifting/",
    bible_folder,
    ".json",
  ]);
  let joined_path = folder_public_join(name);
  let path = await user_repo_path_combine(joined_path);
  let json = json_to(map);
  await file_overwrite(path, json);
}
