import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { song_image_couplets_verse } from "./song_image_couplets_verse.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { equal } from "./equal.mjs";
export function song_image_couplets_lyrics(verse_number) {
  "$plain verse_number";
  "the words a verse of the hymn sings, one couplet to a line, or the whole hymn's words with a blank line between the verses when the number is 0";
  "A REPEATED COUPLET IS WRITTEN OUT AGAIN RATHER THAN FOLDED AWAY, because it is sung again. The pictures fold repeats together on purpose - the words are the same, so one drawing serves both - but the words themselves are the other way about, since somebody reading along wants the line where they hear it rather than a note saying they have already had it.";
  "The verses are found rather than counted to four, so a hymn that grows a fifth verse comes out whole here without anybody remembering to come back and say so.";
  arguments_assert(arguments, 1);
  let verse = Number(verse_number);
  let whole = equal(verse, 0);
  if (whole) {
    let couplets_all = song_image_couplets();
    let verses = list_map_property_unique(couplets_all, "verse");
    function lambda$block(number) {
      let block = song_image_couplets_lyrics(number);
      return block;
    }
    let blocks = list_map(verses, lambda$block);
    let r = list_join_newline_2(blocks);
    return r;
  }
  let couplets = song_image_couplets_verse(verse);
  function lambda$line(couplet) {
    let halves = [couplet.first, couplet.second];
    let line = list_join_space(halves);
    return line;
  }
  let lines = list_map(couplets, lambda$line);
  let r2 = list_join_newline(lines);
  return r2;
}
