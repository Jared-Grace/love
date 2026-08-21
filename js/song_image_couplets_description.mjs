import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_lyrics } from "./song_image_couplets_lyrics.mjs";
import { song_image_couplets_scripture } from "./song_image_couplets_scripture.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
export function song_image_couplets_description(verse_number) {
  "$plain verse_number";
  "what goes under a video of this hymn: the words it sings, then a line saying what follows, then the passages those words rest on - for one verse, or for the whole hymn when the number is 0";
  "THE WORDS COME FIRST AND THE PASSAGES UNDER THEM. This hymn is not a psalm set to music, so there is no verse of Scripture it is a reading of and nothing about it can be worked out from its name. What can be said truly is what it sings, and then what that singing rests on - in that order, because somebody arriving has come to hear the song, and the passages are what they can go on to if they want to know where it came from.";
  "The heading between the two is there because without it a reader meets the first reference line as if it were another lyric.";
  arguments_assert(arguments, 1);
  let lyrics = song_image_couplets_lyrics(verse_number);
  let scripture = song_image_couplets_scripture(verse_number);
  let heading = "Scripture these words rest on:";
  let parts = [lyrics, heading, scripture];
  let r = list_join_newline_2(parts);
  return r;
}
