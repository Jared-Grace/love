import { arguments_assert } from "./arguments_assert.mjs";
import { songs_folder_recordings } from "./songs_folder_recordings.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { psalms_song_read_passage_code } from "./psalms_song_read_passage_code.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export async function psalms_songs_folder_passages(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Every sung psalm in a folder of downloaded songs, each one carrying the one word that says which passage it sings, in the order they should be numbered in.");
  ("★ IT EXISTS BECAUSE THE WALKS IT LOOKS LIKE REFUSE A RECORDING THAT CAME OUT OF AN EDITING SESSION, AND THAT REFUSAL IS THEIRS RATHER THAN EVERYBODY'S. Those two walks feed the lyric-video timing documents, which are addressed by translation, book and chapter and nothing else, so two singings of one chapter would be written to one address and the second would take the first one's corrected times away. Refusing there is right. Giving content away has no such limit: a passage may hold as many recordings as there are, and they are told apart by the mark at the end of the published name. Borrowing the reader borrowed the limit with it, and nine recordings - including the only ones that exist of Psalm 131 and Psalm 136 - were left out of the giveaway by a rule that was never about the giveaway.");
  ("★ ONE WALK REPLACES TWO BECAUSE THE PASSAGE CODE ALREADY TELLS A WHOLE CHAPTER FROM A PART. The record used to be built from a walk over whole chapters and a walk over parts, kept apart all the way to the writer, which then turned each kind into a passage code by its own route. The code is the only thing the record wants, both routes end at it, and once it is in hand nothing downstream needs to know which kind it came from. The single route left is not written out here either: the check that re-asks the record's rows needs the same route, so it is its own function and both ask it.");
  ("★ THE ORDER IS THE PLAIN ALPHABETICAL ORDER OF THE PASSAGE CODE, WHICH IS WHAT THE PADDING IN IT WAS FOR. The walks this replaces each hand-rolled a comparison over the chapter, then the first verse as a number, then the half-verse letter, then the last verse - and the padding exists precisely so that none of that is needed. Three digits put PSA119_001-008 ahead of PSA119_105-112, the letter sorts after the digits it follows, and a bare chapter sorts ahead of any part of itself because the underscore comes after nothing. A comparison written out by hand is a second statement of the same rule, and the day the padding changes only one of them would follow.");
  ("★ WHICH RECORDING INSIDE A PASSAGE GETS WHICH NUMBER IS DECIDED HERE, AND IT IS NOT THE LISTENING DECISION IT LOOKS LIKE. The counter in round brackets comes first, lowest first, and the file name breaks a tie. That means an edited recording and the download it was made from both have no counter and are separated by nothing but their names, so which of them becomes the first take falls out of the alphabet. Nothing yet is uploaded, so nothing is frozen by that; and the real answer is not a better ordering but that the download it was made from should not be in the giveaway at all, which is a rename on the disk and the owner's to make.");
  ("A name the reading cannot place is passed over, as it is by every walk over this folder - somebody's download folder holds far more than songs. What was passed over is asked for separately, because a walk cannot report its own silence.");
  let recordings = await songs_folder_recordings(
    folder_audio,
    psalms_song_file_read_or_null,
  );
  function passage_found(recording) {
    let found = {
      passage_code: psalms_song_read_passage_code(recording.read),
      take: recording.read.take,
      path_audio: recording.path_audio,
    };
    return found;
  }
  let founds = list_map(recordings, passage_found);
  function passage_before(one, other) {
    let same_passage = equal(one.passage_code, other.passage_code);
    if (not(same_passage)) {
      let earlier = less_than(one.passage_code, other.passage_code);
      let passages = earlier ? -1 : 1;
      return passages;
    }
    let takes = subtract(one.take, other.take);
    let same_take = equal(takes, 0);
    if (not(same_take)) {
      return takes;
    }
    let same_path = equal(one.path_audio, other.path_audio);
    if (same_path) {
      let together = 0;
      return together;
    }
    let path_earlier = less_than(one.path_audio, other.path_audio);
    let paths = path_earlier ? -1 : 1;
    return paths;
  }
  founds.sort(passage_before);
  return founds;
}
