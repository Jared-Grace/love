import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
export function folder_private_root() {
  "The folder on this machine holding everything that must never leave it - what other people have written, brought down out of the cloud, and the keys and tokens this machine acts as itself with. Nothing under it is ever copied anywhere else.";
  "It is outside every repo, and that is the first half of why it exists. A copy kept anywhere under a working folder is one sweep away from being committed, and this repo is a public one, so a message somebody sent in confidence would be published by a command whose whole job is to commit whatever it finds. Nobody has to remember not to commit a folder git cannot see.";
  "It is outside the one root the backup covers, and that is the second half. The decision is that this is never backed up, anywhere, ever - and a decision like that kept as a line in a settings file is a decision somebody has to remember while writing the next settings file. Kept as a place instead, it is remembered by the folder: a backup told to take everything under the gathering root takes nothing from here, because there is nothing of this under it.";
  "So it sits in the home folder rather than under the root everything else was gathered into. That gathering was worth doing and is not being undone - what is being said is that one kind of thing is deliberately not part of it, and that kind is everything a copy of which would be a harm rather than a safeguard.";
  "The keys used to keep the same promise from a folder of their own beside this one. One promise kept in two places is one that whoever writes the next backup has to be told about twice, and being told once is the only version of that which survives being forgotten. They are a step inside now, under their own name, because a key is a private thing with extra rules rather than a different kind of thing.";
  "Each kind of thing gets a named step inside rather than the run of the top, so a new kind arrives beside the others instead of having to be told apart from them.";
  let home = folder_home();
  let joined = path_join([home, "private"]);
  return joined;
}
