import { firebase_folder_sites } from "./firebase_folder_sites.mjs";
import { firebase_folder_sites_unfrozen } from "./firebase_folder_sites_unfrozen.mjs";
import { firebase_folder_baseline_path } from "./firebase_folder_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function firebase_folder_gate_run() {
  "Gate: no new place may build a shared-bucket folder out of a word this repo can still change while nothing is watching that word.";
  "A folder on the shared bucket is an address that has already left. Files are sitting under it now and nothing here can reach them, so a word that moves sends every later read somewhere empty while everything already uploaded stays where it was put. Renaming the function holding the word was always safe; what has to be watched is the word.";
  "This asks at the place the addresses are built rather than at one of the wrappers over it, and it works the wrappers out for itself. The version before it asked about three seams somebody had written down; asking the code found six, and two of the three that had been missed were the outermost ones, whose callers were therefore never asked anything at all.";
  "Measured against what the repo already carried rather than against zero, which is a change from what it promised when it was written. Deriving the seams turned up a site that cannot be repaired the usual way: the word it hands over names both the function to be built and the folder to put it under, so freezing the word breaks the build and spelling it as a reference moves the folder. Which of those to give up is a design question about that seam, not a thing this can decide.";
  "Every site is printed even when nothing is new, for the reason the operator gate prints its names: a clean answer and a question that asked nothing look the same, and here they look the same to a reader who would find a dozen easy to believe. Seeing each caller beside where its folder came from is what tells them apart.";
  let sites = await firebase_folder_sites();
  for (let site of sites) {
    let caller = property_get(site, "caller");
    let held_by = property_get(site, "held_by");
    console.log(caller + " -> " + held_by);
  }
  let offenders = await firebase_folder_sites_unfrozen();
  let path = firebase_folder_baseline_path();
  let name_write = fn_name("firebase_folder_baseline_write");
  let f_name = fn_name("literals_frozen_names");
  let hint = text_combine_multiple([
    "a bucket folder is being built here out of a word nothing is watching, so retyping it moves every future read while the uploaded files stay where they are - give the word a function of its own and add that function to ",
    f_name,
  ]);
  let r = await baseline_names_gate_generic(offenders, path, hint, name_write);
  return r;
}
