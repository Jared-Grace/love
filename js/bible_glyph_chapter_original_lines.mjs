export async function bible_glyph_chapter_original_lines(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter to read. It names a stretch of text and nothing that runs.";
  "One chapter in the language it was written in, a verse to a line.";
  "The middle band of a Rosetta reading. A reader who knows neither the pictures nor the English still has the original in front of them, and a reader who knows the original has the key to the pictures - which is the whole trick the Rosetta stone turned, and the reason the layout needs no lesson plan.";
  "The words are the public-domain base text, because that is what the interlinear hands over once the words belonging to later editions are dropped. Anything shown to everybody has to be something everybody may be shown.";
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let lines = [];
  let verse_number = 0;
  for (let verse of verses) {
    verse_number = verse_number + 1;
    let originals = [];
    for (let word of verse.words) {
      list_add(originals, word.original);
    }
    let joined = list_join_space(originals);
    let line = verse_number + " " + joined;
    list_add(lines, line);
  }
  return lines;
}
