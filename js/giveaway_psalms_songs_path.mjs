import { path_join } from "./path_join.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
export function giveaway_psalms_songs_path() {
  "Where the record pairing each sung-psalm recording on this disk with the name it is given away under is kept.";
  "It is kept in the repo rather than worked out when wanted, because the disk name it pairs from is not stable and the given-away name it pairs to cannot be changed once it has been published. The song-take function says why the disk name moves.";
  let p = path_join([data_given_folder(), "giveaway_psalms_songs.json"]);
  return p;
}
