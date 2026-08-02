import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map_property_join_space } from "./list_map_property_join_space.mjs";
export async function app_shared_bible_reference_text(bible_folder, reference) {
  "the words one version has for one reference or null when that version does not hold it";
  let verses = await ebible_references_parse_lines_browser(
    [bible_folder],
    [reference],
  );
  let present_verses = list_filter_null_not_is(verses);
  let none = list_empty_is(present_verses);
  if (none) {
    return null;
  }
  ("a reference covering several verses reads as one flowing line so the whole passage carries the one language colour");
  let text = list_map_property_join_space(present_verses, "text");
  return text;
}
