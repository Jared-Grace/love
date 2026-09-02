import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_music_reference_version(versions, reference) {
  "$plain reference";
  "Which translation one passage of one song is quoted from, as the folder its chapters sit in and the name a reader is shown it under, given that song's own choices - the bible it reads by default and the short list of passages that earned something else.";
  "IT ALWAYS ANSWERS. Every passage on the page is quoted from something, so there is no such thing as a passage with no translation, and handing back nothing for the ordinary case would put the same falling back into every caller that asks. The song's short list of exceptions is asked first and the song's own usual translation answers for everything else.";
  "WHAT IT FALLS BACK TO IS THE SONG'S AND NO LONGER THE PAGE'S. A page-wide answer stood behind both songs, so the sixteen passages sung by both fell back to a translation neither of them had chosen - and worse, moving it for one song moved it for the other in silence. The default a song lands on is a fact about that song, so it arrives in the same value as its exceptions and leaves with them.";
  "THE LIST IS HANDED IN RATHER THAN FETCHED, WHICH IS WHAT MAKES THE ANSWER A SONG'S ANSWER AND NOT THE PAGE'S. This used to fetch one list for the whole page, so the same passage got the same wording wherever it was sung; sixteen passages on this page are sung by both songs, and each of those was being decided once for both. A song echoes the wording its own line was written against, and two songs leaning on different words of one verse are both right.";
  "It is the one question both halves of the page ask. The building asks it to know which bible to fetch each passage out of; the drawing asks it to know whose words a reader is looking at. Asked in one place, the two cannot disagree - which matters here more than it usually does, because they would disagree quietly: the page would fetch the King James and tell the reader it was the Berean, and both the verse and the label would look perfectly ordinary.";
  "WHAT DECIDES WHICH TRANSLATION A PASSAGE GETS IS THE WORDS THE LINE AND THE VERSE SHARE IN A ROW, AND NOTHING ELSE DECIDES FIRST. Every English translation on offer is read against the line that rests on the passage, and the one that says the most of that line the same way one after the other wins - counted words, not an impression. Where two of them say the same number of words in a row, the one that shares more of the line words anywhere at all is taken; where that still does not separate them the older sounding one is, and after that the plainer one. Taken in the other order the answer is the King James at every passage on the page, because it is the older sounding one everywhere, and a hundred entries all saying one word is the thing these short lists exist to prevent.";
  "THE COUNTING IS DONE TWICE, ONCE WITH THE ENDINGS OF WORDS LEFT ON AND ONCE WITH THEM TAKEN OFF, because the first way asks whether the two say the same word and misses them saying the same thing. A line sings wash all my sin and the King James says washed us from our sins, which is the whole of that verse's claim on the page and scores nothing at all until wash and washed are allowed to meet.";
  arguments_assert(arguments, 2);
  let exceptions = property_get(versions, "exceptions");
  let chosen = list_find_property_or_null(exceptions, "reference", reference);
  let named = null_not_is(chosen);
  if (named) {
    return chosen;
  }
  let usual = property_get(versions, "usual");
  return usual;
}
