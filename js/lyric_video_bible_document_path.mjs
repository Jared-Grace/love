import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { path_join } from "./path_join.mjs";
export function lyric_video_bible_document_path(
  version,
  book_code,
  chapter_number,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "Where the timing document of one passage in one translation is kept.";
  "THE NAME IS WORKED OUT FROM THE PASSAGE RATHER THAN CHOSEN, AND THAT IS WHAT LETS THE TIMES SURVIVE. Somebody sits with a song and moves fourteen numbers until every line lands on the beat it is sung on, which is the one part of the work no command can redo. A document nobody can find again is a document that gets drafted afresh, and drafting afresh silently spreads those numbers evenly again; asking for the same passage twice has to reach the same file, so the address is derived from the three things that say which passage it is.";
  "The book is written the way the translation writes it, in the upper case, because that is how usfm names a book and a name that agrees with its source is one fewer thing to convert.";
  let folder = data_given_lyric_videos_folder();
  let file_name = version + "_" + book_code + "_" + chapter_number + ".json";
  let v = path_join([folder, file_name]);
  return v;
}
