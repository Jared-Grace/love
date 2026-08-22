import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_map } from "./list_map.mjs";
import { list_slice } from "./list_slice.mjs";
import { ebible_bible_chapters_skipped } from "./ebible_bible_chapters_skipped.mjs";
export async function ebible_verse_marks_gaps_unexplained_bible_summary(group) {
  arguments_assert(arguments, 1);
  let bible_folder = property_get(group, "key");
  let items = property_get(group, "items");
  let gaps = list_size(items);
  function chapter_code_of(item) {
    let chapter_code = property_get(item, "chapter_code");
    return chapter_code;
  }
  let list = list_map_unique(items, chapter_code_of);
  let chapters = list_size(list);
  function name_of(item) {
    let name = property_get(item, "name");
    return name;
  }
  let names = list_map(items, name_of);
  let examples = list_slice(names, 0, 5);
  let skipped = await ebible_bible_chapters_skipped(bible_folder);
  let chapters_skipped = list_size(skipped);
  let summary = {
    bible_folder,
    gaps,
    chapters,
    chapters_skipped,
    examples,
  };
  return summary;
}
