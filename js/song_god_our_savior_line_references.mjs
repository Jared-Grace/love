import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_glosses } from "./song_god_our_savior_glosses.mjs";
import { property_in_is } from "./property_in_is.mjs";
import { property_get } from "./property_get.mjs";
import { song_gloss_references } from "./song_gloss_references.mjs";
export function song_god_our_savior_line_references(line) {
  "$plain line";
  "The passages of scripture one sung line of this song rests on, in the order its explanation names them.";
  "The line is asked for by its own words, which is how the explanations are kept, so a line moved or a verse reordered cannot hand back somebody else's passages.";
  "A LINE NOBODY HAS EXPLAINED YET IS ANSWERED WITH AN EMPTY LIST, not with a refusal. The page draws such a line plainly rather than as a card that opens on nothing, and a refusal here would take the whole song down instead of the one line - which is a heavy price for a gap a reader could have read past.";
  "The page that shows one line and the list built for the whole song both come through here, which is what keeps them from disagreeing about what a line rests on.";
  arguments_assert(arguments, 1);
  let glosses = song_god_our_savior_glosses();
  let glossed = property_in_is(glosses, line);
  if (glossed) {
    let gloss = property_get(glosses, line);
    let references = song_gloss_references(gloss);
    return references;
  }
  let r = [];
  return r;
}
