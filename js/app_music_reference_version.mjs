import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_references_versions } from "./app_music_references_versions.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_music_bible_default_version } from "./app_music_bible_default_version.mjs";
export function app_music_reference_version(reference) {
  "$plain reference";
  "Which translation one passage of a song is quoted from, as the folder its chapters sit in and the name a reader is shown it under.";
  "IT ALWAYS ANSWERS. Every passage on the page is quoted from something, so there is no such thing as a passage with no translation, and handing back nothing for the ordinary case would put the same falling back into every caller that asks. The short list of exceptions is asked first and the page's usual translation answers for everything else.";
  "It is the one question both halves of the page ask. The building asks it to know which bible to fetch each passage out of; the drawing asks it to know whose words a reader is looking at. Asked in one place, the two cannot disagree - which matters here more than it usually does, because they would disagree quietly: the page would fetch the King James and tell the reader it was the Berean, and both the verse and the label would look perfectly ordinary.";
  arguments_assert(arguments, 1);
  let versions = app_music_references_versions();
  let chosen = list_find_property_or_null(versions, "reference", reference);
  let named = null_not_is(chosen);
  if (named) {
    return chosen;
  }
  let usual = app_music_bible_default_version();
  return usual;
}
