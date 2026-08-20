import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_description_verses } from "./youtube_description_verses.mjs";
export function psalms_passage_verses_description(passage, verses) {
  "The words of the verses one song of the Psalms actually sings, written out ready to sit under that song, given the whole chapter it is taken from - or nothing when that chapter has none of the verses the song names.";
  "A song is named after its passage and nothing else, so a listener arriving on it is shown only the passage. The whole chapter sits under the playlist next door for whoever wants the rest, and repeating it under every song would bury the six lines the song is of under a hundred and seventy it is not.";
  "The wording is the Berean Standard Bible, which is free for anyone to use for anything.";
  "Nothing is said about which half of a verse is sung when the name marks one, because the mark divides a line and the Bible does not: the whole verse is given and the name above it already says which half was taken.";
  "A name that reaches past the end of its chapter is answered with nothing rather than with the verses that do exist, because a name reaching too far is a name that is wrong, and quietly writing the part of it that happens to land would settle by itself the one thing here a person has to decide.";
  "The chapter is handed in rather than fetched, because a channel has thirteen hundred songs and a hundred and fifty chapters: fetching inside meant asking for the same chapter nine times over, each ask holding its turn open for seconds it spent waiting. The sibling next door fetches and calls this, for whoever has one song and no chapter in hand.";
  arguments_assert(arguments, 2);
  let sung = [];
  for (let verse of verses) {
    let before_first = less_than(verse.verse_number, passage.verse_first);
    if (before_first) {
      continue;
    }
    let after_last = greater_than(verse.verse_number, passage.verse_last);
    if (after_last) {
      continue;
    }
    sung.push(verse);
  }
  if (list_empty_is(sung)) {
    return null;
  }
  let named = "Psalm " + passage.chapter + ":" + passage.verse_first;
  if (not_equal(passage.verse_first, passage.verse_last)) {
    named = named + "-" + passage.verse_last;
  }
  let opening = named + " - Berean Standard Bible";
  let closing =
    "This song runs to Psalm " +
    passage.chapter +
    ":" +
    passage.verse_last +
    ".";
  let description = youtube_description_verses(opening, sung, closing);
  return description;
}
