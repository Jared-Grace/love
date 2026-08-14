export async function bible_folder_chapter_sentence_gaps(
  bible_folder,
  chapter_code,
  count,
) {
  "Fetches the opening of one chapter of one bible and says, for each verse in it, how far on the sentence it sits in finishes.";
  "One chapter is one sample and a narrow one: how long a sentence runs is a matter of who wrote it, so a chapter of narrative and a chapter of an epistle answer differently and neither of them answers for the bible. Several chapters together are what this is for.";
  arguments_assert(arguments, 3);
  let verses = await bible_folder_chapter_verses_download(
    bible_folder,
    chapter_code,
    count,
  );
  let measured = bible_verses_sentence_gaps(verses);
  return measured;
}
