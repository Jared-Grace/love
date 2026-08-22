import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_lyrics } from "./song_image_couplets_lyrics.mjs";
import { song_image_couplets_scripture_heading } from "./song_image_couplets_scripture_heading.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
export function song_image_couplets_description_of(
  verse_number,
  scripture,
  elsewhere,
) {
  "$plain verse_number";
  "$plain scripture";
  "$plain elsewhere";
  "What goes under a video of this hymn, laid out: the words it sings, a line saying what follows, the passages handed in, and last whatever says where more can be found.";
  "THE WORDS COME FIRST AND THE PASSAGES UNDER THEM. This hymn is not a psalm set to music, so there is no verse of Scripture it is a reading of and nothing about it can be worked out from its name. What can be said truly is what it sings, and then what that singing rests on - in that order, because somebody arriving has come to hear the song.";
  "THE PASSAGES ARE HANDED IN RATHER THAN FETCHED HERE, because there are two of them: written out in full where they fit, and named only where they do not. The laying out is the same either way and must stay the same, so it is one name and the choosing is somebody else's.";
  "The heading between the two is there because without it a reader meets the first reference as if it were another lyric. An empty last part is dropped rather than joined, or the description would end in blank lines nobody wrote.";
  arguments_assert(arguments, 3);
  let lyrics = song_image_couplets_lyrics(verse_number);
  let heading = song_image_couplets_scripture_heading();
  let parts = [lyrics, heading, scripture, elsewhere];
  function lambda$said(part) {
    let said = text_empty_not_is(part);
    return said;
  }
  let present = list_filter(parts, lambda$said);
  let r = list_join_newline_2(present);
  return r;
}
