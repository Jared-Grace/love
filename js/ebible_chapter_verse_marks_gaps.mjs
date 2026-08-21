export async function ebible_chapter_verse_marks_gaps(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  arguments_assert(arguments, 2);
  ("Every verse number one chapter's page leaves out between its first mark and its last, counting a mark that spells a range as covering everything the range holds.");
  ("Read off the page alone, which is the whole point of it. The measuring beside this one finds a chapter short by laying its marks against the lines its read-aloud edition speaks, so it can say nothing at all about a chapter no one reads aloud - and it cannot say which verse is the missing one either, only that a number is wrong somewhere. A gap between two marks names the verse.");
  ("A page skipping a number is not by itself a fault, and telling the two apart is why the mark's own words are read rather than only the number in its address. A translation that puts two verses in one breath marks them as a range - ten to eleven, thirty-six to thirty-seven - and there is no eleventh mark to find because the translation meant there not to be. Reading only the addresses calls that missing, and it is the commonest thing here, so a check that could not tell would be wrong more often than right.");
  ("Counted from the first mark rather than from one, because a chapter published in another tradition's numbering can honestly begin at ten - the Septuagint's Proverbs is like that. Where the beginning is wrong there is no gap to see, only a chapter starting late, and that is a different question asked somewhere else.");
  let opened = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = property_get(opened, "verse_numbers");
  function lambda_covers(verse_number) {
    let name = property_get(verse_number, "name");
    let spelled = text_integers(name);
    let number = property_get(verse_number, "number");
    let both = list_concat_unique([number], spelled);
    return both;
  }
  let covered_each = list_map(verse_numbers, lambda_covers);
  let covered = lists_combine(covered_each);
  let first = list_min_try(covered);
  let last = list_max_or_null(covered);
  function lambda_missing(number) {
    let missing = list_includes_not(covered, number);
    return missing;
  }
  let between = integers_between_inclusive(first, last);
  let gaps = list_filter(between, lambda_missing);
  return gaps;
}
