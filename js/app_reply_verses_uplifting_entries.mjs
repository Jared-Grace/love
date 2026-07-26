export async function app_reply_verses_uplifting_entries(
  reference,
  languages_chosen,
) {
  ("one entry per language, named and ordered so the reader can tell the languages apart by colour the way the supper app does");
  let ordered = list_copy_reverse(languages_chosen);
  let multiple = list_multiple_is(ordered);
  let entries = [];
  function entry_add(language, text) {
    ("a lone language needs no label, since there is nothing to tell it apart from");
    let name = "";
    if (multiple) {
      name = property_get(language, "name");
    }
    let entry = {
      name,
      text,
    };
    list_add(entries, entry);
  }
  async function language_each(language) {
    let bible_folder = property_get(language, "bible_folder");
    let package_map = await uplifting_package_get(bible_folder);
    if (null_not_is(package_map)) {
      let text = property_get_or_null(package_map, reference);
      if (null_not_is(text)) {
        entry_add(language, text);
      }
      return;
    }
    let verses = await ebible_references_parse_lines_browser(
      [bible_folder],
      [reference],
    );
    let present_verses = list_filter_null_not_is(verses);
    let none = list_empty_is(present_verses);
    if (none) {
      return;
    }
    ("a reference covering several verses reads as one flowing line, so the whole passage carries the one language colour");
    let text = list_map_property_join_space(present_verses, "text");
    entry_add(language, text);
  }
  await each_async(ordered, language_each);
  return entries;
}
