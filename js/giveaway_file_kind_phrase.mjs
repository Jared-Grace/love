import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_file_kinds } from "./giveaway_file_kinds.mjs";
import { list_includes_assert } from "./list_includes_assert.mjs";
import { property_get } from "./property_get.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { text_combine } from "./text_combine.mjs";
export function giveaway_file_kind_phrase(kind, count) {
  arguments_assert(arguments, 2);
  ("$plain kind");
  ("$plain count");
  ("How many of one kind of thing a box holds, said as a reader of the download page would say it - five AI-generated songs, one picture.");
  ("★ THE COUNT IS SAID RATHER THAN BRACKETED. The asking was for a sentence saying song(s), and a number is strictly better than that bracket: it is shorter to read, it is never ambiguous, and it tells somebody deciding whether to download a box something the bracket cannot - that this psalm was sung five times and that one was sung once.");
  ("★ THE WORD THAT CARRIES THE NUMBER AND THE WORDS AFTER IT ARE KEPT APART, BECAUSE ONLY THE FIRST ONE TAKES THE S. A video is described as made from the songs and the pictures, and handing that whole phrase to the pluraliser would have produced picturess - the s lands at the end of the text it is given, which is the end of the clause rather than the end of the noun. So the noun is pluralised and the clause is joined on afterwards.");
  ("★ A PICTURE IS NOT SAID TO BE AI-GENERATED, THOUGH THE SONGS AND THE VIDEOS ARE, AND THAT IS NOT AN OVERSIGHT. Some of the pictures are made and some are paintings centuries out of copyright, and nothing written down anywhere yet says which is which. A sentence that guessed would be wrong about a real painter about half the time, which is worse than a sentence that says less: so it says pictures, and the day the two are told apart in the record is the day this can say which.");
  ("The kind is checked against the fixed list rather than trusted, because a kind nothing knows about would otherwise be described as nothing at all and the description would quietly come out short.");
  let kinds = giveaway_file_kinds();
  list_includes_assert(kinds, kind);
  let nouns = {
    song: "AI-generated song",
    lyric_video: "AI-generated video",
    picture: "picture",
  };
  let tails = {
    song: "",
    lyric_video: " made from the songs and the pictures",
    picture: "",
  };
  let noun = property_get(nouns, kind);
  let tail = property_get(tails, kind);
  let counted = word_count_pluralize(count, noun);
  let phrase = text_combine(counted, tail);
  return phrase;
}
