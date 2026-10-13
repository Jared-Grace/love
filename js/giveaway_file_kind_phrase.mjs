import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_file_kinds } from "./giveaway_file_kinds.mjs";
import { list_includes_assert } from "./list_includes_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
export function giveaway_file_kind_phrase(kind, count) {
  arguments_assert(arguments, 2);
  ("$plain kind");
  ("$plain count");
  ("How many of one kind of thing a box holds, said as a reader of the download page would say it - five AI-generated songs, one picture.");
  ("★ THE COUNT IS SAID RATHER THAN BRACKETED. The asking was for a sentence saying song(s), and a number is strictly better than that bracket: it is shorter to read, it is never ambiguous, and it tells somebody deciding whether to download a box something the bracket cannot - that this psalm was sung five times and that one was sung once.");
  ("★ THE WORD THAT CARRIES THE NUMBER AND THE WORDS AFTER IT ARE KEPT APART, BECAUSE ONLY THE FIRST ONE TAKES THE S. A video is described as made from the songs and the pictures, and handing that whole phrase to the pluraliser would have produced picturess - the s lands at the end of the text it is given, which is the end of the clause rather than the end of the noun. So the noun is pluralised and the clause is joined on afterwards.");
  ("★ A PICTURE IS NOT SAID TO BE AI-GENERATED, THOUGH THE SONGS AND THE VIDEOS ARE, AND THAT IS NOT AN OVERSIGHT. Some of the pictures are made and some are paintings centuries out of copyright, and nothing written down anywhere yet says which is which. A sentence that guessed would be wrong about a real painter about half the time, which is worse than a sentence that says less: so it says pictures, and the day the two are told apart in the record is the day this can say which.");
  ("★ THE WORDS OF THE PSALM ARE THE ONE KIND WHOSE COUNT IS NOT SAID, BECAUSE THREE FILES OF THEM ARE NOT THREE OF ANYTHING. A box holds the words alone, the words with their verse numbers, and the same thing again as JSON - one psalm handed over three ways - so three texts would tell a reader a box holds three different things to read. What they want to know is that the psalm's own words are in there, which is true whether it is one file or three, and the file names say which renderings. So each kind carries whether it is counted at all, and a kind that is not is said as it stands.");
  ("★ THE TRANSLATION IS NAMED IN THAT PHRASE THOUGH THIS FUNCTION IS NEVER TOLD WHICH TRANSLATION, WHICH IS A DEBT AND NOT A MISTAKE. Every box in this giveaway is one psalm in one translation - a second translation would be a second set of boxes - so the name is a constant of the giveaway rather than a fact about a file. Handing the translation in instead was the alternative, and it was left until there is a second one: the day there is, this is the single place that has to learn to ask, and the phrase is wrong loudly rather than quietly, because a reader would see the wrong Bible named.");
  ("It says public domain because that is the thing somebody deciding what they may do with the words needs to know, and it is a fact about this translation rather than about the box. The box's own licence is stated separately and says nothing about who may reuse the Bible text inside it.");
  ("The kind is checked against the fixed list rather than trusted, because a kind nothing knows about would otherwise be described as nothing at all and the description would quietly come out short.");
  let kinds = giveaway_file_kinds();
  list_includes_assert(kinds, kind);
  let nouns = {
    song: "AI-generated song",
    lyric_video: "AI-generated video",
    picture: "picture",
    text: "the words of the psalm in the public domain Berean Standard Bible",
  };
  let tails = {
    song: "",
    lyric_video: " made from the songs and the pictures",
    picture: "",
    text: "",
  };
  let counts_said = {
    song: true,
    lyric_video: true,
    picture: true,
    text: false,
  };
  let noun = property_get(nouns, kind);
  let tail = property_get(tails, kind);
  let said = property_get(counts_said, kind);
  if (not(said)) {
    let bare = text_combine(noun, tail);
    return bare;
  }
  let counted = word_count_pluralize(count, noun);
  let phrase = text_combine(counted, tail);
  return phrase;
}
