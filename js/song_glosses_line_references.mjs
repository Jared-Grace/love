import { arguments_assert } from "./arguments_assert.mjs";
import { property_in_is } from "./property_in_is.mjs";
import { property_get } from "./property_get.mjs";
import { song_gloss_references } from "./song_gloss_references.mjs";
export function song_glosses_line_references(glosses, line) {
  "$plain glosses";
  "$plain line";
  "The passages of scripture one sung line of a song rests on, in the order its explanation names them, read out of that song's explanations.";
  "The line is asked for by its own words, which is how the explanations are kept, so a line moved or a verse reordered cannot hand back somebody else's passages.";
  "A LINE NOBODY HAS EXPLAINED YET IS ANSWERED WITH AN EMPTY LIST, not with a refusal. The page draws such a line plainly rather than as a card that opens on nothing, and a refusal here would take the whole song down instead of the one line.";
  arguments_assert(arguments, 2);
  let glossed = property_in_is(glosses, line);
  if (glossed) {
    let gloss = property_get(glosses, line);
    let references = song_gloss_references(gloss);
    return references;
  }
  let r = [];
  return r;
}
