export async function bible_folder_verse_holes(bible_folder, chapters) {
  "Which of the verses a page will ask this bible for it has nothing to answer with.";
  "The asking is driven by the English index, so that is what a verse being there or not is measured against. A bible numbering its verses its own way is not wrong for doing so, but a reader who chose it beside English still gets a gap where the page asked for a number it does not use - and this counts the gaps rather than the disagreements, because the gap is what the reader sees.";
  "A chapter that is missing entirely counts as every one of its verses missing, and is named on its own as well. The two readings are the same fact at different sizes: the holes tell a reader how much is unreachable, the absent chapters tell whoever fixes it where to start.";
  async function lambda(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let wanted = property_get(chapter, "verse_numbers");
    let held = await ebible_chapter_verse_numbers_storage_try(
      bible_folder,
      chapter_code,
    );
    let absent = null_is(held);
    let numbers = held;
    if (absent) {
      numbers = [];
    }
    let missing = list_difference(wanted, numbers);
    function lambda2(verse_number) {
      let code = ebible_chapter_verse_code(chapter_code, verse_number);
      return code;
    }
    let holes = list_map(missing, lambda2);
    let measured = {
      chapter_code,
      absent,
      holes,
    };
    return measured;
  }
  let each_chapter = await list_map_unordered_async(chapters, lambda);
  function lambda3(measured) {
    let absent = property_get(measured, "absent");
    return absent;
  }
  let absent_each = list_filter(each_chapter, lambda3);
  let chapters_absent = list_map_property(absent_each, "chapter_code");
  list_sort_text(chapters_absent);
  function lambda4(measured) {
    let holes = property_get(measured, "holes");
    return holes;
  }
  let holes_each = list_map(each_chapter, lambda4);
  let holes = lists_combine(holes_each);
  list_sort_text(holes);
  function lambda5(chapter) {
    let verse_numbers = property_get(chapter, "verse_numbers");
    let size = list_size(verse_numbers);
    return size;
  }
  let sizes = list_map(chapters, lambda5);
  let asked = list_sum(sizes);
  let r = {
    bible_folder,
    asked,
    chapters_absent,
    holes,
  };
  return r;
}
