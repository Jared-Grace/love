export function ebible_index_flat_chapter_verse_numbers(list, chapter_code) {
  "The verse numbers one chapter has, read off a flat index of a whole bible.";
  "Where this is asked of the English bible the answer is the list of verse numbers a page will ask every other bible for, because that is the index a page walks. So it is the right side of the comparison rather than one guess at it.";
  function lambda(entry) {
    let code = property_get(entry, "chapter_code");
    let same = equal(code, chapter_code);
    return same;
  }
  let entries = list_filter(list, lambda);
  let property_name = verse_number_key();
  let verse_numbers = list_map_property(entries, property_name);
  return verse_numbers;
}
