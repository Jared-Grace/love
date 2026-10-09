import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { songs_folder_refused } from "./songs_folder_refused.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function psalms_songs_refused_write(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Write down every recording in a folder of downloaded songs that the reading of a sung psalm's name cannot place.");
  ("★ IT IS WRITTEN DOWN RATHER THAN PRINTED, BECAUSE THE FAULT THIS IS FOR IS A FILE NOBODY NOTICED ARRIVING. A list printed to a terminal is read by whoever ran the command and then gone, and the thing worth catching is a recording that appeared after the last time anybody looked. Kept in the repo, the list has a previous version: the next writing of it shows up as a difference, and a recording that arrived is a line somebody has to account for rather than a silence. The record of what will be given away could not do this job, because a file it never read is a file it has no row for and a missing row looks exactly like a file that does not exist.");
  ("★ EVERY NAME HERE IS EITHER SOMETHING THAT SHOULD NOT BE GIVEN AWAY OR A FAULT, AND NOTHING SAYS WHICH. That is the point rather than a shortcoming. The folder holds songs filed under their titles instead of their passages, a seven-second clip, and recordings of other songs entirely, all of which belong here; it also held nine edited recordings that belonged in the record. Telling those apart needs somebody who knows what the songs are, so the list is kept short enough for that somebody to read all of it.");
  ("The order is alphabetical rather than the order the folder handed the names over, because the order of a folder read is not promised and a list that reshuffles between writings reads as a change when nothing changed.");
  ("The folder is read once and the one listing is handed on, so the answer is about a single moment rather than about a folder read twice.");
  let file_names = await folder_read_files(folder_audio);
  let refused = songs_folder_refused(file_names, psalms_song_file_read_or_null);
  let sorted = list_sort_text(refused);
  let folder = data_given_folder();
  let path = path_join([folder, "psalms_songs_refused.json"]);
  await file_overwrite_json(path, sorted);
  return sorted;
}
