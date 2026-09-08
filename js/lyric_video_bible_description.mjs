import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { subtract } from "./subtract.mjs";
import { lyric_video_picture_credit_line } from "./lyric_video_picture_credit_line.mjs";
import { lyric_video_singing_credit_line } from "./lyric_video_singing_credit_line.mjs";
import { youtube_description_verses } from "./youtube_description_verses.mjs";
export async function lyric_video_bible_description(chapter_number) {
  "The words that go under a published lyric video of one Psalm: its name, how the pictures and the singing were made, and then the Psalm itself verse by verse.";
  "★ THE LINES SAYING HOW IT WAS MADE ARE PART OF THE HEADING AND NOT AN AFTERTHOUGHT AT THE FOOT. The verses are cut to whatever length a description is allowed, and anything written after them is what the cutting reaches first. Put with the heading they are in the part that is kept whatever the length, and they are also in the part a reader sees before pressing to see more - which is where a disclosure belongs, since a disclosure nobody unfolds has not disclosed anything.";
  "The words themselves are put there rather than a sentence about them, because a person looking for a Psalm searches for a line of it they remember, and only the words can answer that search. The wording is the Berean Standard Bible, which is free for anyone to use for anything.";
  "The two sentences are asked for next door rather than written here, one each, because the pictures and the singing are made by different hands and change independently of one another and of this Psalm. Which of them a given video needs is the same question for every video there will ever be, so answering it here would answer it once per caller instead of once.";
  arguments_assert(arguments, 1);
  let chapter_code = ebible_chapter_code_pad("PSA", chapter_number);
  let verses = await ebible_verses_storage_browser("engbsb", chapter_code);
  let verse_last = verses[subtract(verses.length, 1)].verse_number;
  let named = "Psalm " + chapter_number + " - Berean Standard Bible";
  let drawn = lyric_video_picture_credit_line();
  let sung = lyric_video_singing_credit_line();
  let opening = named + "\n" + drawn + "\n" + sung + "\n";
  let closing =
    "Psalm " + chapter_number + " runs to verse " + verse_last + ".";
  let description = youtube_description_verses(opening, verses, closing);
  return description;
}
