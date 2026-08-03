import { fn_name } from "./fn_name.mjs";
import { firebase_chapter_upload_folders } from "./firebase_chapter_upload_folders.mjs";
import { firebase_chapter_upload_folders_unfrozen } from "./firebase_chapter_upload_folders_unfrozen.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function firebase_chapter_upload_folders_gate_run() {
  "Gate: every folder a chapter's upload address is built out of is held by a function the frozen list is watching.";
  "This ratchets against zero rather than against a baseline, because the whole set was already clean when it was written - eight sites, eight watched getters. There is nothing here to grandfather, and one site let back in is a bucket folder that can be retyped without anything anywhere saying what moved.";
  "It says what the sibling gates cannot. The frozen record catches a change to a value it is already watching, and the both-ways gate catches a word marked as a reference and as frozen at once; neither can see a folder that never had a function in the first place, because a value with no function holding it has nothing to freeze and nothing to contradict. That gap is exactly what this closes, and it is the gap the last four entries on the frozen list were sitting in.";
  "Every pair is printed when nothing is wrong, for the reason the operator gate prints its names: a clean answer and a question that asked nothing look the same, and here they look the same to a reader who would find eight easy to believe. Seeing each caller beside the function its folder came from is what tells them apart.";
  let sites = await firebase_chapter_upload_folders();
  let offenders = await firebase_chapter_upload_folders_unfrozen();
  let size = list_size(offenders);
  let any = greater_than(size, 0);
  if (any) {
    let joined = list_join_comma(offenders);
    let f_name = fn_name("literals_frozen_names");
    let combined = text_combine_multiple([
      "chapter upload folder gate: ",
      joined,
      " - each of these hands a bucket folder to the address builder without a watched function holding the word, so retyping it moves every future read while the uploaded files stay where they are; give the word a function of its own and add that function to ",
      f_name,
    ]);
    throw new Error(combined);
  }
  for (let site of sites) {
    let caller = property_get(site, "caller");
    let held_by = property_get(site, "held_by");
    console.log(caller + " -> " + held_by);
  }
  let checked = list_size(sites);
  let r = {
    checked,
    unfrozen: 0,
  };
  return r;
}
