import { firebase_apps_frozen_unchanged_assert_deploy } from "./firebase_apps_frozen_unchanged_assert_deploy.mjs";
import { firebase_deploy_locked_generic } from "./firebase_deploy_locked_generic.mjs";
export async function firebase_deploy() {
  "Sends out what is already waiting in the folder that goes live, one sending at a time on this machine, and only once every frozen app is proved to be exactly what prod is already serving. Nothing new is put there on the way past.";
  "It asks nothing about whether the code is correct, and that is deliberate. The folder it sends means ready to send - a build only reaches it by way of a latest that was generated and approved, and that is where the question of correctness is asked. Asked again here it would be answered about the working folder, which is not what is being sent: a peer's half-written file, or a gate somebody else turned red an hour ago, would hold back a folder that was judged and approved before either of them existed.";
  "So the only two things that may stop a sending are the two that are about the very bytes going out. One is a copy already under way - the lock is shared with the copying from latest, so a sending can never walk a folder that is half-written. The other is the proof that the frozen apps have not moved, which is a question about content and has an answer in the folder itself.";
  let published = await firebase_deploy_locked_generic(
    firebase_apps_frozen_unchanged_assert_deploy,
    firebase_deploy.name,
  );
  return published;
}
