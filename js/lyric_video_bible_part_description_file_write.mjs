import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { greater_than } from "./greater_than.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_description_opening } from "./lyric_video_description_opening.mjs";
import { youtube_description_verses } from "./youtube_description_verses.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function lyric_video_bible_part_description_file_write(
  path_document,
  song_number,
  path_video,
) {
  arguments_assert(arguments, 3);
  ("$plain path_document");
  ("$plain song_number");
  ("$plain path_video");
  ("Writes, beside a rendered lyric video of part of one Psalm, the file its upload reads: the title on the first line and the description under it - the part's own verses and the part's own pictures.");
  ("The part is read off the document's passage, such as 'Psalm 149:1-5', because that is the passage the words on screen were timed from; a part named anywhere else could disagree with what is sung.");
  ("The song is counted among singings of the same part, in the order they go up, the same rule a whole Psalm's title keeps.");
  let document = await file_read_json(path_document);
  let passage = document.passage;
  let reference = passage.split(" ")[1];
  let chapter_number = reference.split(":")[0];
  let range = reference.split(":")[1];
  let verse_first = Number(range.split("-")[0]);
  let verse_last = Number(range.split("-")[1]);
  let title = passage + " (BSB) lyric video";
  let song = Number(song_number);
  let later = greater_than(song, 1);
  if (later) {
    title = title + ", song " + song;
  }
  let chapter_code = ebible_chapter_code_pad("PSA", chapter_number);
  let verses_all = await ebible_verses_storage_browser("engbsb", chapter_code);
  let verses = [];
  for (let verse of verses_all) {
    let number = Number(verse.verse_number);
    let inside =
      greater_than_equal(number, verse_first) &&
      less_than_equal(number, verse_last);
    if (inside) {
      list_add(verses, verse);
    }
  }
  let named = passage + " - Berean Standard Bible";
  let pictures = lyric_video_document_pictures(document);
  let opening = await lyric_video_description_opening(named, pictures);
  let closing = passage + " runs to verse " + verse_last + ".";
  let description = youtube_description_verses(opening, verses, closing);
  let path_words = path_video + ".description.txt";
  let text = title + "\n" + description;
  await file_overwrite(path_words, text);
  let r = {
    path_words,
    title,
  };
  return r;
}
