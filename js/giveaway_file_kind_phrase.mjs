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
  ("How many of one kind of thing a box holds, said as a reader of the download page would say it - five AI-generated songs, one public domain painting.");
  ("★ THE COUNT IS SAID RATHER THAN BRACKETED. The asking was for a sentence saying song(s), and a number is strictly better than that bracket: it is shorter to read, it is never ambiguous, and it tells somebody deciding whether to download a box something the bracket cannot - that this psalm was sung five times and that one was sung once.");
  ("★ THE WORD THAT CARRIES THE NUMBER AND THE WORDS AFTER IT ARE KEPT APART, BECAUSE ONLY THE FIRST ONE TAKES THE S. A video is described as made from the songs and the paintings, and handing that whole phrase to the pluraliser would have produced paintingss - the s lands at the end of the text it is given, which is the end of the clause rather than the end of the noun. So the noun is pluralised and the clause is joined on afterwards.");
  ("★ A PAINTING IS SAID TO BE A PUBLIC DOMAIN PAINTING, AND THIS SENTENCE USED TO SAY ONLY PICTURES, BECAUSE IT WAS WRITTEN BELIEVING NOTHING RECORDED WHICH PICTURES WERE PAINTED AND WHICH WERE DRAWN BY A MODEL. Something did record it, in the one place a published name can carry it: a crop of a painting is saved under a file name beginning pd_, put there by the hand that cropped it, and that prefix is already what decides what may be claimed under every published video. The sentence was not short of a record, it was short of having asked.");
  ("★ AND THE MIXTURE IT FEARED DOES NOT EXIST. Measured 2026-10-13 over every lyric video document there is: 187 of 517 name any picture at all, they name 2058 pictures between them, and every single one of those is a painting - not one was drawn by a model. The drawn pictures are on the disk and in no document, because a drawing here is replaced by a painting the moment a good one is found. So saying paintings is not a guess that will be wrong about half the time, which is what this was afraid of; it is the whole of what is there.");
  ("★ THE WORD IS STILL NEVER ASSUMED OF A BOX, ONLY COUNTED OFF ITS FILES - WHICH IS WHY THE MEASUREMENT ABOVE IS A REASON AND NOT A LICENCE. A claim a person has to remember to withdraw is a claim that will one day be false, and the day a drawn picture goes in a box it will arrive under its own kind, because the kind is set by that same pd_ test; this sentence will then count none of it as a painting without anybody editing this sentence. The same rule the credit line under a video already follows: ask once per picture, never once per video.");
  ("Saying public domain rather than leaving it at paintings is the point of having asked. Somebody deciding what they may do with an image needs to know it is out of copyright and that a painter can be credited, and a file called a picture reads as possibly neither. Withholding the useful half to stay safe is not the neutral choice it looks like.");
  ("The word picture is deliberately left unused by any kind, rather than kept for the paintings, so that it is free the day a model-drawn picture is actually given away. A listing holding painting beside picture tells a reader which is which; a listing holding picture beside painting where picture meant both would not.");
  ("★ THE WORDS OF THE PSALM ARE THE ONE KIND WHOSE COUNT IS NOT SAID, BECAUSE THREE FILES OF THEM ARE NOT THREE OF ANYTHING. A box holds the words alone, the words with their verse numbers, and the same thing again as JSON - one psalm handed over three ways - so three texts would tell a reader a box holds three different things to read. What they want to know is that the psalm's own words are in there, which is true whether it is one file or three, and the file names say which renderings. So each kind carries whether it is counted at all, and a kind that is not is said as it stands.");
  ("★ THE TRANSLATION IS NAMED IN THAT PHRASE THOUGH THIS FUNCTION IS NEVER TOLD WHICH TRANSLATION, WHICH IS A DEBT AND NOT A MISTAKE. Every box in this giveaway is one psalm in one translation - a second translation would be a second set of boxes - so the name is a constant of the giveaway rather than a fact about a file. Handing the translation in instead was the alternative, and it was left until there is a second one: the day there is, this is the single place that has to learn to ask, and the phrase is wrong loudly rather than quietly, because a reader would see the wrong Bible named.");
  ("It says public domain because that is the thing somebody deciding what they may do with the words needs to know, and it is a fact about this translation rather than about the box. The box's own licence is stated separately and says nothing about who may reuse the Bible text inside it.");
  ("The kind is checked against the fixed list rather than trusted, because a kind nothing knows about would otherwise be described as nothing at all and the description would quietly come out short.");
  let kinds = giveaway_file_kinds();
  list_includes_assert(kinds, kind);
  let nouns = {
    song: "AI-generated song",
    lyric_video: "AI-generated video",
    painting: "public domain painting",
    text: "the words of the psalm in the public domain Berean Standard Bible",
  };
  let tails = {
    song: "",
    lyric_video: " made from the songs and the paintings",
    painting: "",
    text: "",
  };
  let counts_said = {
    song: true,
    lyric_video: true,
    painting: true,
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
