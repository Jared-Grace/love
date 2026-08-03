import { firebase_folder_sites } from "./firebase_folder_sites.mjs";
import { firebase_folder_sites_unfrozen } from "./firebase_folder_sites_unfrozen.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export async function firebase_folder_gate_run() {
  "Gate: every folder a shared-bucket address is built out of is either a word a watched function holds, or a value worked out while the command runs.";
  "A folder on the shared bucket is an address that has already left. Files are sitting under it now and nothing here can reach them, so a word that moves sends every later read somewhere empty while everything already uploaded stays where it was put. Renaming the function holding the word was always safe; what has to be watched is the word.";
  "This asks at the place the addresses are built rather than at one of the wrappers over it. The version before it asked about a single builder, reported its eight sites clean, and was believed - while a fifth bucket folder three functions away was spelled as a reference, which is the one spelling that says a rename SHOULD move it. Checking one builder was never checking the class.";
  "It ratchets against zero. The one site that was wrong was repaired the day this was written, so there is nothing to grandfather and a first offender is a new one - which is the only version worth having, since the whole point is to catch the writing of the next.";
  "Every pair is printed when nothing is wrong, for the reason the operator gate prints its names: a clean answer and a question that asked nothing look the same, and here they look the same to a reader who would find a dozen easy to believe. Seeing each caller beside where its folder came from is what tells them apart.";
  let sites = await firebase_folder_sites();
  for (let site of sites) {
    let caller = property_get(site, "caller");
    let held_by = property_get(site, "held_by");
    console.log(caller + " -> " + held_by);
  }
  let offenders = await firebase_folder_sites_unfrozen();
  let clean = list_empty_is(offenders);
  let repair = fn_name("literals_frozen_names");
  assert_json(clean, {
    hint: "a bucket folder is being built out of a word nothing is watching, so retyping it moves every future read while the uploaded files stay where they are - would you like to give the word a function of its own and add that function to the frozen list?",
    repair,
    offenders,
  });
  let checked = list_size(sites);
  let r = {
    checked,
    unfrozen: 0,
  };
  return r;
}
