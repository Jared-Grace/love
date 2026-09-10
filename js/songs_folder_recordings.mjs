import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { equal } from "./equal.mjs";
import { path_join } from "./path_join.mjs";
import { list_add } from "./list_add.mjs";
export async function songs_folder_recordings(folder_audio, read_or_null) {
  arguments_assert(arguments, 2);
  ("$plain folder_audio");
  ("$plain read_or_null");
  ("Every recording in a folder of downloaded songs that the reader handed in can place, one row each, with what the name says about it and where the file is.");
  ("★ EVERY RECORDING COMES BACK, BECAUSE A SECOND SINGING OF A PSALM IS A SECOND SONG AND NOT A SPARE COPY OF THE FIRST. The renditions of a passage differ in tune, in arrangement and in length, and the whole point of having sung it twice is to have both. The older reading of this folder answered with one recording per passage and a count of how many there were, which was the right answer while a passage meant one video; it means the other four singings of Psalm 110 are files nobody can reach.");
  ("★ NOTHING IS GROUPED HERE, AND THAT IS THE WHOLE DIFFERENCE. Grouping is what forced a choice between takes, and a choice between takes is a listening decision there is nobody here to make. Handing every recording back leaves the passage each one sings written on it, so a caller that wants them gathered can gather them and a caller that wants one address per recording already has one.");
  ("What makes a file name a song is handed in rather than decided here, because a whole chapter and a stanza are read differently and neither is this walk's business. A name the reader refuses is passed over rather than reported as a fault: the folder is somebody's download folder and holds far more than songs.");
  ("They come back in the order the folder handed them over, unsorted. Putting them in the order of a psalter is a thing only a caller that knows what these passages are can do.");
  let file_names = await folder_read_files(folder_audio);
  let recordings = [];
  for (let file_name of file_names) {
    let read = read_or_null(file_name);
    let refused = equal(read, null);
    if (refused) {
      continue;
    }
    let path_audio = path_join([folder_audio, file_name]);
    list_add(recordings, {
      read,
      path_audio,
    });
  }
  return recordings;
}
