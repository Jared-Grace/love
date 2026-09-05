import { folder_user } from "./folder_user.mjs";
export function folder_private_root() {
  "The folder on this machine where what other people have written is kept - their own words, brought down out of the cloud to be read and looked after here.";
  "It is outside every repo on purpose, and that is the whole of why it exists. A copy kept anywhere under a working folder is one sweep away from being committed, and this repo is a public one, so a message somebody sent in confidence would be published by a command whose whole job is to commit whatever it finds. Nobody has to remember not to commit a folder git cannot see.";
  "Named for what may be done with it rather than for what put it there. What lands here is somebody else's life said in their own words, so the folder says so once, at the top, where every later reader and writer of it walks past the word.";
  "It sits under the one root the human's own files already sit under, rather than loose in the home folder, because everything on this machine outside the repos was gathered there on purpose and a second root would start that gathering over.";
  let folder = folder_user("private");
  return folder;
}
