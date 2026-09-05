import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
export async function songs_folder_passage_takes(
  folder_audio,
  read_or_null,
  key_of,
) {
  arguments_assert(arguments, 3);
  ("$plain folder_audio");
  ("Every passage a folder of downloaded songs holds a singing of, as the reader handed in reads them, each with one recording to work from and how many recordings of it there are.");
  ("★ WHICH RECORDING IS NAMED IS A RULE RATHER THAN A PREFERENCE, AND IT LIVES HERE SO THAT TWO KINDS OF PASSAGE CANNOT COME TO ANSWER IT DIFFERENTLY. The renditions of a passage differ in length, so times tapped against one of them fit none of the others; picking is a listening decision and there is nobody here to make it. The earliest is picked because it is the only one that can be picked without pretending to have listened, and how many there are travels out beside it so that a person choosing differently knows there is something to choose. A whole chapter and a stanza are found by different readings of a file name, but they are the same question about takes, and two copies of that rule would drift without anything going red.");
  ("The reading is handed in rather than named here, because what makes a file name a passage is the one thing that genuinely differs. What a passage is keyed by is handed in for the same reason: a chapter is said by a number and a part of one is said by a number and two verse ends, and neither is the other's business.");
  ("The folder is somebody's download folder and holds far more than songs, so a name the reader refuses is passed over rather than reported as a fault. A song of another book and a picture are both perfectly good files that this question is simply not about.");
  ("They come back in the order the folder handed them over, unsorted. Putting them in the order of a psalter is a thing only a caller that knows what these passages are can do, and sorting them here by a key that was handed in would be sorting them by how the key happens to spell itself.");
  let file_names = await folder_read_files(folder_audio);
  let held_by_key = {};
  let keys = [];
  for (let file_name of file_names) {
    let read = read_or_null(file_name);
    if (equal(read, null)) {
      continue;
    }
    let key = key_of(read);
    let held = held_by_key[key];
    if (not(held)) {
      held = {
        read: read,
        file_name: file_name,
        take: read.take,
        takes: 0,
      };
      held_by_key[key] = held;
      keys.push(key);
    }
    held.takes = held.takes + 1;
    let earlier = less_than(read.take, held.take);
    if (earlier) {
      held.file_name = file_name;
      held.take = read.take;
      held.read = read;
    }
  }
  function passage_of(key) {
    let held = held_by_key[key];
    let passage = {
      read: held.read,
      path_audio: path_join([folder_audio, held.file_name]),
      takes: held.takes,
    };
    return passage;
  }
  let passages = list_map(keys, passage_of);
  return passages;
}
