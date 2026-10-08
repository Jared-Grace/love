import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
export async function lyric_video_bible_title(chapter_number, song_number) {
  arguments_assert(arguments, 2);
  ("$plain chapter_number");
  ("$plain song_number");
  ("The title a published lyric video of one Psalm goes up under: the Psalm with its verses, the translation, what kind of video it is, and - from the second song of the same words on - which song this is.");
  ("★ THE SONG IS COUNTED IN THE ORDER THE SONGS GO UP, NOT THE ORDER THEY WERE RECORDED. A title on a published video is never changed afterwards, so the number has to be one that is already settled when it is given; counted by recording, a song recorded earlier but published later would take a number some published video already holds. The first song is unnumbered because Psalm 150's went up that way before there was a second.");
  ("★ A NUMBER, AFTER THE WORD SONG, AND NEVER A LETTER OR A BARE FIGURE. A bare letter after a verse is how a half of that verse is cited - 6b is the second half of verse 6 - and a bare number beside the chapter and verses reads as one more of them. The word in front keeps either from being read as a reference; a number was chosen over a letter because 'the second song' is how people say it, and it tells how many there are.");
  ("★ THE VERSES ARE ALWAYS WRITTEN, EVEN FOR A WHOLE PSALM, so every title has the one shape that a part of a long Psalm needs anyway.");
  ("Rejected: naming a song by how it sounds - gentle, upbeat. It helps a viewer choose, but it is a judgment every upload would need from somebody who has listened, and it would not stay consistent across a hundred and fifty Psalms; a word like that belongs in the description if anywhere.");
  let song = Number(song_number);
  let chapter_code = ebible_chapter_code_pad("PSA", chapter_number);
  let verses = await ebible_verses_storage_browser("engbsb", chapter_code);
  let verse_first = verses[0].verse_number;
  let verse_last = verses[subtract(verses.length, 1)].verse_number;
  let title =
    "Psalm " +
    chapter_number +
    ":" +
    verse_first +
    "-" +
    verse_last +
    " (BSB) lyric video";
  let later = greater_than(song, 1);
  if (later) {
    title = title + ", song " + song;
  }
  return title;
}
