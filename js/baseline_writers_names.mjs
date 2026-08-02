import { baseline_names_ending } from "./baseline_names_ending.mjs";
export async function baseline_writers_names() {
  "every function in the repo that puts a ratchet's record on disk, found by what it is called";
  "its neighbour holds the finding itself, because the paths are found the same way and only the ending differs - so what is left here is the one word that says which of them is wanted, and the one sentence that says where to look if nobody answers to it";
  let writers = await baseline_names_ending(
    "_write",
    "no ratchet writer was found at all, so whatever asked has learned nothing - the repo is not this small, so the sweep itself is what has stopped working",
  );
  return writers;
}
