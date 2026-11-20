import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function psalms_lyric_video_title_passage(title) {
  "$plain title";
  "The chapter, first verse, last verse and song number a Psalm lyric video names itself after, or nothing when the title is not one.";
  ("★ NOT ",
    fn_name("psalms_title_passage"),
    ", WHICH KEEPS THE LAST NUMBER IN THE WHOLE TITLE. On a lyric video the last number is the song: 'Psalm 106:1-12 (BSB) lyric video, song 2' would read as verses 1 to 2. So the shape is spelled out whole here and the song is read apart.");
  ("A whole-chapter song names no verses, so it reads as verse 1 to verse 1000: it sorts after every part that also opens on verse 1, which is where the whole chapter belongs when ordered by first verse and then by last.");
  ("A title with no song number is song 1, because the first upload of a passage was never numbered.");
  arguments_assert(arguments, 1);
  let found = title.match(
    /^Psalms? (\d+)(?::(\d+)[a-z]?-(\d+)[a-z]?)? \(?BSB\)? lyric video(?:, song (\d+))?$/,
  );
  if (equal(found, null)) {
    return null;
  }
  let whole = equal(found[2], undefined);
  let verse_first = 1;
  let verse_last = 1000;
  if (not(whole)) {
    verse_first = Number(found[2]);
    verse_last = Number(found[3]);
  }
  let song = 1;
  if (not_equal(found[4], undefined)) {
    song = Number(found[4]);
  }
  let r = {
    chapter: Number(found[1]),
    verse_first: verse_first,
    verse_last: verse_last,
    song: song,
  };
  return r;
}
