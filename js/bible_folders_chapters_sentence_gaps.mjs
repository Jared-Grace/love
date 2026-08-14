export async function bible_folders_chapters_sentence_gaps(
  bible_folders,
  chapter_codes,
  count,
) {
  "Reads several chapters in several bibles and tallies how far a passage is carried on for a reader of all of them at once.";
  "This is the question one bible cannot answer. A page waits until the sentence has finished in every bible its reader chose, so what the reader is handed is the furthest of them and not the usual one - and the more languages they read, the further that goes. How much further had never been counted; the code that does the waiting says only that languages nearly always agree, which is the same kind of unchecked claim that the bound on the waiting was itself sized against.";
  arguments_assert(arguments, 3);
  async function lambda(chapter_code) {
    let chapter_measured = await bible_folders_chapter_sentence_gaps(
      bible_folders,
      chapter_code,
      count,
    );
    return chapter_measured;
  }
  let each_chapter = await list_map_unordered_async(chapter_codes, lambda);
  let measured = bible_chapters_sentence_gaps_combine(
    chapter_codes,
    each_chapter,
  );
  property_set(measured, "bible_folders", bible_folders);
  return measured;
}
