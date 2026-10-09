import { arguments_assert } from "./arguments_assert.mjs";
import { songs_recording_endings } from "./songs_recording_endings.mjs";
import { list_filter_ends_with_any } from "./list_filter_ends_with_any.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
export function songs_folder_refused(file_names, read_or_null) {
  arguments_assert(arguments, 2);
  ("$plain file_names");
  ("$plain read_or_null");
  ("The recordings among a list of file names that the reader handed in could not place.");
  ("★ IT IS THE COMPLEMENT OF THE WALK THAT GATHERS THE RECORDINGS, AND IT EXISTS BECAUSE THAT WALK'S SILENCE IS WHERE EVERYTHING HAS GONE WRONG SO FAR. That walk says so in its own words: a name the reader refuses is passed over rather than reported as a fault, because the folder is somebody's download folder and holds far more than songs. The reason is right and the consequence was not thought through. Nine recordings edited in an editing program sat in that folder and every command in this repo passed over all nine without a word, including the only recordings that exist of Psalm 131 and of Psalm 136 - and the record of what will be given away looked complete the whole time. A reading cannot report its own silence, so the complement has to be asked for separately.");
  ("★ ONLY RECORDINGS ARE REPORTED, WHICH IS WHAT MAKES THE ANSWER SHORT ENOUGH TO BE READ. The whole value of a refusal list is that somebody looks at it, and a list holding every picture and document in a download folder would be scrolled past. A file that is not a recording was never a candidate, so leaving it out is not hiding anything.");
  ("★ THE NAMES ARE HANDED IN RATHER THAN THE FOLDER, SO THAT ONE LISTING CAN BE SPLIT TWO WAYS. A download folder changes while it is being looked at, so a caller that reads the folder once and asks both questions of that one listing gets two halves that account for each other; a caller that reads the folder twice gets two answers about two moments, and a recording that arrived in between is in neither. The walk that gathers the recordings still takes a folder, so today the two cannot yet be asked of one listing - this half is the one that could be built without changing a caller, and taking names is what will let the other half join it.");
  ("What makes a name a recording the reader decides, and what makes a file a candidate at all is its ending. Nothing is sorted; the order is the order handed in, because putting a refusal list in order is the business of whoever writes it down.");
  let endings = songs_recording_endings();
  let recordings = list_filter_ends_with_any(file_names, endings);
  function refused_is(file_name) {
    let read = read_or_null(file_name);
    let refused = equal(read, null);
    return refused;
  }
  let refused = list_filter(recordings, refused_is);
  return refused;
}
