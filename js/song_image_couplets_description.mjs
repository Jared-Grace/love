import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_lyrics } from "./song_image_couplets_lyrics.mjs";
import { song_image_couplets_scripture } from "./song_image_couplets_scripture.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
export async function song_image_couplets_description(verse_number) {
  "$plain verse_number";
  "what goes under a video of this hymn: the words it sings, then a line saying what follows, then the passages those words rest on - for one verse, or for the whole hymn when the number is 0";
  "THE WORDS COME FIRST AND THE PASSAGES UNDER THEM. This hymn is not a psalm set to music, so there is no verse of Scripture it is a reading of and nothing about it can be worked out from its name. What can be said truly is what it sings, and then what that singing rests on - in that order, because somebody arriving has come to hear the song, and the passages are what they can go on to if they want to know where it came from.";
  "IT DOES NOT ASK WHETHER IT FITS. The whole hymn written out this way comes to 17,639 letters against the 5,000 youtube keeps, so a song of all four verses cannot carry this and a song of one verse can. Whoever is writing to a video asks the size and falls back to the form that names the references instead - which is a different name, because this one's job is to say the true and complete thing and the choosing is somebody else's.";
  arguments_assert(arguments, 1);
  let scripture = await song_image_couplets_scripture(verse_number);
  let elsewhere = "";
  let r = song_image_couplets_description_of(
    verse_number,
    scripture,
    elsewhere,
  );
  return r;
}
