import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_run } from "./qa_gate_run.mjs";
import { firebase_apps_frozen_unchanged_assert_deploy } from "./firebase_apps_frozen_unchanged_assert_deploy.mjs";
import { firebase_deploy_locked_generic } from "./firebase_deploy_locked_generic.mjs";
export async function firebase_deploy_promote_generic(promote) {
  "Puts this repo's pages live, putting one more build into the folder that is sent along the way - but only after the whole check passes, and only one such sending on this machine at a time. What was put there and what came back from the sending are both handed over, because either can fail on its own.";
  "Asking first and putting in place afterwards is the whole of why this exists. Done the other way round, a run whose check refused it had already overwritten the folder that gets sent, so being told no still changed what would go out the next time somebody was told yes - and the refused build sat there, matching nothing anybody had judged, holding every other app's sending until somebody noticed. Twenty seven apps were found waiting in that state at once.";
  "Both steps are inside the one lock, so nothing can be put into the folder while a sending is walking it. That was the other half of the hole: the sending was held against other sendings and against nothing else.";
  "The putting in place is received rather than written out here, because what is being put there is the only part that differs between a sending that carries a new build and one that carries nothing new. Everything around it - the check, the proof that the frozen apps have not moved, the lock, the sending itself - was already written twice.";
  arguments_assert(arguments, 1);
  async function lambda() {
    await qa_gate_run();
    let promoted = await promote();
    let published = await firebase_apps_frozen_unchanged_assert_deploy();
    let done = {
      promoted,
      published,
    };
    return done;
  }
  let r = await firebase_deploy_locked_generic(
    lambda,
    firebase_deploy_promote_generic.name,
  );
  return r;
}
