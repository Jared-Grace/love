export function bible_word_article_citations_path(chapter_code) {
  "Where one chapter's list of articles by verse and word sits under the assets folder.";
  "$plain chapter_code";
  "the code is a chapter's name, like MRK05; it names a file and nothing in it runs.";
  let file_path = "bible_word_article_citations/" + chapter_code + ".json";
  return file_path;
}
