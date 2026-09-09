import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { lyric_video_bible_document_name } from "./lyric_video_bible_document_name.mjs";
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
  "THE STEM IS ASKED FOR RATHER THAN SPELLED, so that this file and the folder the passage's pictures are drawn into cannot drift apart. What is added here is only the ending, because that is the one part that belongs to a document and not to the passage.";
  let folder = data_given_lyric_videos_folder();
  let name = lyric_video_bible_document_name(
    version,
    book_code,
    chapter_number,
  );
  let file_name = name + ".json";
  let v = path_join([folder, file_name]);
  return v;
}
