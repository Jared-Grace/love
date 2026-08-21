export function bible_glyph_chapter_glyph_names(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter, spelled as the chapter codes spell it. It names a chapter to look up and nothing that runs.";
  "Every glyph NAME one authored picture Bible chapter actually draws, each one once, so that what a chapter uses can be compared with what the root table offers it.";
  "IT READS THE PARSED WORD AND NEVER THE SHORTHAND. A chapter is typed with dollars and pluses and stored as lists, and the parser is the one place that difference is resolved - so asking the shorthand here would be a second parser, written by somebody who had not read the first, and the two would disagree on exactly the cases the shorthand exists to make short.";
  "A WORD THAT IS PLAIN ENGLISH CONTRIBUTES NOTHING, which is the ordinary case rather than an edge one. Half of what an author writes is the English the pictures are strung on, and it is stored as a bare string; only a group holds names.";
  "IT DROPS THE ORDER AND THE COUNT ON PURPOSE. A caller asking this wants to know whether a picture is in the chapter at all, and a picture drawn once and a picture drawn nine times are the same answer to that question. Anything wanting the count would be asking about the sentence rather than about the vocabulary, and that is a different reading.";
  let chapter = bible_glyph_chapter(chapter_code);
  let names = [];
  for (let verse of chapter.verses) {
    for (let word of verse.words) {
      let plain = equal(typeof word, "string");
      if (plain) {
        continue;
      }
      for (let part of word) {
        let text = equal(typeof part, "string");
        if (text) {
          continue;
        }
        for (let name of part) {
          list_add(names, name);
        }
      }
    }
  }
  let unique = list_unique(names);
  return unique;
}
