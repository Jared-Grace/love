import { firebase_folder_sites_unfrozen } from "./firebase_folder_sites_unfrozen.mjs";
import { firebase_folder_baseline_path } from "./firebase_folder_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function firebase_folder_baseline_write() {
  "Rewrite the bucket-folder ratchet from what the repo carries right now. For seeding it once, and for shrinking it after one of the sites has been settled - never for blessing a new one, which is the one thing the gate exists to refuse.";
  "Settling one means finding the word a real home. Usually that is a function of its own on the frozen list; the one site here at seeding could not be given one, because the word it hands over names both the function to be built and the folder to put it under, and freezing one argument freezes both.";
  "The record is a list of sites rather than of words, because the same word can be written in two places and only one of them be wrong. A site names the function that wrote it, which is where somebody has to go.";
  let known = await firebase_folder_sites_unfrozen();
  let path = firebase_folder_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "a bucket folder is being built here out of a word nothing is watching and was not before - give the word a function of its own and add that function to the frozen list rather than recording the site as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
