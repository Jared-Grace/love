import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
export function folder_private_root() {
  "The folder on this machine where what other people have written is kept - their own words, brought down out of the cloud to be read and looked after here. Nothing under it is ever copied anywhere else.";
  "It is outside every repo, and that is the first half of why it exists. A copy kept anywhere under a working folder is one sweep away from being committed, and this repo is a public one, so a message somebody sent in confidence would be published by a command whose whole job is to commit whatever it finds. Nobody has to remember not to commit a folder git cannot see.";
  "It is outside the one root the backup covers, and that is the second half. The decision is that this is never backed up, anywhere, ever - and a decision like that kept as a line in a settings file is a decision somebody has to remember while writing the next settings file. Kept as a place instead, it is remembered by the folder: a backup told to take everything under the gathering root takes nothing from here, because there is nothing of this under it.";
  "So it sits in the home folder beside the keys, rather than under the root everything else was gathered into. That gathering was worth doing and is not being undone - what is being said is that two kinds of thing are deliberately not part of it, and both for the same reason. A key must not leave this machine. Somebody else's words must not either. The folder that must never be copied is the one folder that must not live where the copying looks.";
  "Named for what may be done with it rather than for what put it there, and said at the top where every later reader and writer of it walks past the word.";
  let home = folder_home();
  let joined = path_join([home, "private"]);
  return joined;
}
