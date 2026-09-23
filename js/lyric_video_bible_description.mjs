import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { subtract } from "./subtract.mjs";
import { lyric_video_bible_document_read } from "./lyric_video_bible_document_read.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_picture_painting_is } from "./lyric_video_picture_painting_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { lyric_video_singing_credit_line } from "./lyric_video_singing_credit_line.mjs";
import { greater_than } from "./greater_than.mjs";
import { lyric_video_pictures_credit_line } from "./lyric_video_pictures_credit_line.mjs";
import { youtube_description_verses } from "./youtube_description_verses.mjs";
export async function lyric_video_bible_description(chapter_number) {
  "$plain chapter_number";
  "The words that go under a published lyric video of one Psalm: its name, how the pictures and the singing were made, every painting used named, and then the Psalm itself verse by verse.";
  "★ THE LINES SAYING HOW IT WAS MADE ARE PART OF THE HEADING AND NOT AN AFTERTHOUGHT AT THE FOOT. The verses are cut to whatever length a description is allowed, and anything written after them is what the cutting reaches first. Put with the heading they are in the part that is kept whatever the length, and they are also in the part a reader sees before pressing to see more - which is where a disclosure belongs, since a disclosure nobody unfolds has not disclosed anything.";
  "★ THE PAINTERS ARE NAMED IN THE HEADING TOO, AND NOT AT THE FOOT AS THEY ARE UNDER A SONG. A song's description is never cut, so its list can sit at the end where length costs nothing; a Psalm's is cut from the end by the line above, so a list put there is the first thing to go. The sentence above promises that each painter is named, and a promise the cutting can quietly delete is a promise that will one day be broken.";
  "★ WHICH SENTENCE ABOUT THE PICTURES IS TRUE IS COUNTED FROM THE DOCUMENT, NEVER ASSUMED. It used to say, under every Psalm alike, that an image model drew the pictures and that no painting by a person was used. That is false of a Psalm whose pictures are crops of paintings, and it became false silently - nothing in the video changes when a drawing is replaced by a painting except the file behind it.";
  "A PASSAGE WITH NO PICTURES CHOSEN IS STILL DESCRIBED. The verses and the singing do not depend on a document existing, so a chapter nobody has chosen pictures for is described with no picture sentence rather than refused.";
  "The words themselves are put there rather than a sentence about them, because a person looking for a Psalm searches for a line of it they remember, and only the words can answer that search. The wording is the Berean Standard Bible, which is free for anyone to use for anything.";
  arguments_assert(arguments, 1);
  let chapter_code = ebible_chapter_code_pad("PSA", chapter_number);
  let verses = await ebible_verses_storage_browser("engbsb", chapter_code);
  let verse_last = verses[subtract(verses.length, 1)].verse_number;
  let named = "Psalm " + chapter_number + " - Berean Standard Bible";
  let document = await lyric_video_bible_document_read(
    "bsb",
    "PSA",
    chapter_number,
  );
  let missing = equal(document, null);
  let pictures = [];
  if (not(missing)) {
    pictures = lyric_video_document_pictures(document);
  }
  let paintings = [];
  let drawn = [];
  for (let picture of pictures) {
    let painting_is = await lyric_video_picture_painting_is(picture);
    if (painting_is) {
      list_add(paintings, picture.scene);
      continue;
    }
    list_add(drawn, picture.path);
  }
  let painters = list_unique(paintings);
  let sung = lyric_video_singing_credit_line();
  let opening = named;
  let any = greater_than(pictures.length, 0);
  if (any) {
    let pictures_line = lyric_video_pictures_credit_line(
      painters.length,
      drawn.length,
    );
    opening = opening + "\n" + pictures_line;
  }
  opening = opening + "\n" + sung + "\n";
  let some = greater_than(painters.length, 0);
  if (some) {
    let paintings_heading =
      "The paintings in this video, in the order they come up:";
    opening =
      opening + "\n" + paintings_heading + "\n" + painters.join("\n") + "\n";
  }
  let closing =
    "Psalm " + chapter_number + " runs to verse " + verse_last + ".";
  let description = youtube_description_verses(opening, verses, closing);
  return description;
}
