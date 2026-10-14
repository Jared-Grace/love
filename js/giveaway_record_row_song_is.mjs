import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function giveaway_record_row_song_is(row) {
  arguments_assert(arguments, 1);
  ("$plain row");
  ("Whether one row of the giveaway record is a sung recording rather than a picture or the words of a psalm.");
  ("★ THIS IS ASKED BECAUSE THE RECORD STOPPED BEING ALL SONGS AND SEVERAL CHECKS STILL ONLY MAKE SENSE FOR SONGS. It held nothing but recordings until the day the paintings joined it - one thousand eight hundred and thirteen of them - and the two questions that read a file's name by the rule a recording's title follows, or look for a file in the folder recordings are downloaded into, would have called every single picture a fault. A crop is called pd_bellini_gebed_in_de_hof_van_olijven.png and it lives in this repo, not in anybody's download folder.");
  ("It is one function rather than the same line written in each checker, because the two already written it for disagreed about nothing and the third would be the one to get it wrong. The word is the kind word off the fixed list, which is the one place that says what a row may claim to be.");
  ("It is spelled song_is rather than picture_not_is, because a check that wants songs wants songs - a name saying what a thing is not would have to be read twice to be believed, and would quietly start meaning the wrong set the day a fifth kind is added.");
  let song_is = equal(row.kind, "song");
  return song_is;
}
