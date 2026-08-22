import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_verse } from "./song_image_couplets_verse.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
import { song_image_couplet_gloss } from "./song_image_couplet_gloss.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { equal } from "./equal.mjs";
export function song_image_couplets_glossed(verse_number) {
  "$plain verse_number";
  "The couplets of a verse of the hymn that somebody has written references for, each as the words it sings and the references behind them - or the whole hymn's when the number is 0.";
  "A REPEATED COUPLET APPEARS ONCE HERE. The words are sung twice and are written out twice in the lyrics, but the passage behind them does not change on the second hearing, and naming it again would read as a second, different reason for the same line.";
  "WHETHER A COUPLET REPEATS IS ASKED OF ITS WORDS AND NEVER OF ITS PICTURE. This once asked whether two couplets shared a folder of drawings, which agreed with the words only for as long as a repeat was drawn the same way as the line it repeats. The four repeats were then given emblems of their own, the folders stopped matching, and the same two lines with the same three passages under them began printing twice in a row - honest, and redundant, and nothing went red, because both answers are true statements about different questions.";
  "A couplet nobody has written a reference for is left out rather than carried with an empty one. The hymn is glossed couplet by couplet as the pictures for it are decided, so an unglossed couplet is work not yet done, and an entry saying only the words would look like a claim that they rest on nothing.";
  "This is the list, and laying it out is next door - because there is more than one way to lay it out and only one right answer to what is in it. A short description names the references, a long one writes the passages out under them, and both must be about exactly these couplets.";
  arguments_assert(arguments, 1);
  let couplets = song_image_couplets_verse(verse_number);
  let glossed = [];
  for (let couplet of couplets) {
    let repeated = not_equal(couplet.same_as, 0);
    if (repeated) {
      continue;
    }
    let gloss = song_image_couplet_gloss(couplet.n);
    let unglossed = equal(gloss, undefined);
    if (unglossed) {
      continue;
    }
    let references = gloss.lyric_ref;
    let bare = equal(references, "");
    if (bare) {
      continue;
    }
    let halves = [couplet.first, couplet.second];
    let words = list_join_space(halves);
    list_add(glossed, {
      words: words,
      references: references,
    });
  }
  return glossed;
}
