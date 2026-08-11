import { folder_repo_love } from "./folder_repo_love.mjs";
import { functions_lift_captured_locals } from "./functions_lift_captured_locals.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_lift_captured_locals_gate_run() {
  "QA gate: no function ever moved out of another one still reads a name that belonged to where it came from";
  "A lift is supposed to turn what a function reached out of itself for into parameters, and where it does not there are two endings. Either nothing answers to that name and the file throws the first time that line runs, or a repo function happens to answer to it, and then the repairing pass imports that function and the moved code goes on running against something it was never written against. The second ending passes every other check there is, which is why this one exists";
  "It ratchets against zero rather than against a baseline. The six broken moves were repaired and the whole history was swept clean on 2026-08-03, so there is nothing here to grandfather, and a baseline would only be a place for the next one to be added quietly";
  "It asks the history rather than the disk, so it needs no list handed to it and cannot drift from what was really done. The sweep costs a few seconds over the whole repo, which is why it can stand in the gate at all rather than staying a command somebody remembers to run";
  "Throws so the dispatcher seam exits nonzero";
  let folder = folder_repo_love();
  let faulty = await functions_lift_captured_locals(folder);
  for (let offender of faulty) {
    let lifted = property_get(offender, "lifted");
    let dropped = property_get(offender, "dropped");
    console.log("DROPPED  " + lifted + "  -> " + list_join_comma(dropped));
  }
  let size = list_size(faulty);
  let any = greater_than(size, 0);
  if (any) {
    throw new Error(
      "lift captured locals gate: " +
        size +
        " moved functions read a name that belonged to the function they came out of - hand each name in as a parameter at every call, the way the move was supposed to",
    );
  }
  let r = {
    dropped: 0,
  };
  return r;
}
