import { bible_usfm_version_get } from "./bible_usfm_version_get.mjs";
import { bible_usfm_version_book_path } from "./bible_usfm_version_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { usfm_mark_text_or_null } from "./usfm_mark_text_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
import { list_join } from "./list_join.mjs";
export async function bible_usfm_version_reference_text(
  version,
  book_code,
  chapter_number,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "The line that stands at the foot of a lyric video: which passage this is and which translation the words are, followed by the terms that translation is given under where it asks for them.";
  "THE BOOK NAMES ITSELF, RATHER THAN BEING LOOKED UP IN A LIST HERE. Every usfm book carries the name its own publisher prints it under, and the two shelves disagree - one writes Psalm and the other Psalms. A list kept here would have to pick one and would then be wrong about the other, and it would be wrong silently, in the one line of the video whose whole job is to say truly where the words came from.";
  "The chapter label is preferred over the book name where the book has one. It is the mark a publisher uses for exactly this - what to call a single chapter when it is shown on its own - so a psalter that calls the book Psalms still calls one of them a Psalm.";
  "THE TERMS ARE APPENDED ONLY WHERE THE TRANSLATION ASKS FOR THEM, AND THE EMPTY CASE IS NOT AN OVERSIGHT. The Berean is in the public domain and asks for nothing, so printing a licence beside it would state something untrue about it. The unfoldingWord texts are share-alike and ask to be named wherever their words travel, and a video published without that line is a copy made outside the terms it was given under.";
  let known = bible_usfm_version_get(version);
  let file_path = await bible_usfm_version_book_path(version, book_code);
  let usfm = await file_read(file_path);
  let label = usfm_mark_text_or_null(usfm, "cl");
  let heading = usfm_mark_text_or_null(usfm, "h");
  let book_name = label || heading || book_code;
  let name = property_get(known, "name");
  let licence = property_get(known, "licence");
  let passage = book_name + " " + chapter_number;
  let parts = [passage, name, licence];
  let said = list_filter_equal_not(parts, "");
  let joined = list_join(said, "  ·  ");
  return joined;
}
