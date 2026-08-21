import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function song_image_couplets_title_verse(title) {
  "$plain title";
  "which verse of the hymn a song's name says it sings: the number when the name says one, 0 when it says the whole hymn, and null when the name is not this hymn at all";
  "THE NAME IS THE ONLY THING THAT SAYS IT. Nothing about a video says which words are sung in it except what it was called, so this is a reading of a name and not a fact about a recording. A song of this hymn that was named something else answers null here, and rightly - it would be worse to guess.";
  "A name that says the hymn but no verse is the whole hymn, which is what 'the FATHER's SON' and 'the FATHER's SON (widescreen)' both are. That is the same reading a name saying nothing extra should get: a cut of the whole song is still the whole song's words.";
  arguments_assert(arguments, 1);
  let hymn = "the FATHER's SON";
  let of_hymn = text_starts_with(title, hymn);
  let other = not(of_hymn);
  if (other) {
    return null;
  }
  let found = title.match(/\(verse (\d+)\)/);
  let no_verse = equal(found, null);
  if (no_verse) {
    let whole = 0;
    return whole;
  }
  let r = Number(found[1]);
  return r;
}
