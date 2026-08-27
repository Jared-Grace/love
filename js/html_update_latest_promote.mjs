import { app_shared_build } from "./app_shared_build.mjs";
import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { qa_app_e2e_happy_run } from "./qa_app_e2e_happy_run.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
import { firebase_deploy_locked_generic } from "./firebase_deploy_locked_generic.mjs";
export async function html_update_latest_promote(search) {
  "$plain search";
  "build the app (latest AND dev, together) before promoting the latest bundle to prod, so shipping an app to prod never leaves its local dev copy behind";
  "The copying holds the sending lock, and the building does not. A sending puts out whatever is in the published folder at the moment it walks it, so a copy running loose beside one sends half of this app and half of the last - and neither half is anything anybody judged. The building writes nowhere the sending looks and takes minutes, so holding the lock through it would only make everybody else wait on a compile.";
  "This is the whole reason the sending itself is allowed to ask so little. It asks nothing about whether the code is correct, because a correct build is what generating latest is for; what it does insist on is that nothing is writing the folder underneath it, and that insisting only works if every writer takes the same lock. This was the one that did not.";
  await app_shared_build(search);
  ("Before anything is copied out, the app is walked the whole way through as somebody who gets every question right. It happens here and not after, so an app that cannot be finished never reaches the folder the sending reads from - being told no then costs nothing, where a walk run afterwards would already have overwritten whatever was waiting to go.");
  ("What is walked is the dev copy the build just above has made, out of the same code as the latest copy about to be moved up. An app with no walk of its own goes straight past.");
  let app_name = await app_shared_name_search(search);
  await qa_app_e2e_happy_run(app_name);
  ("The copying writes down what it copied, and it does that itself rather than being followed by a line here that says so. That note is what turns promoting into approving: a sending later reads it and refuses a folder holding anything else. Written here it was written by this way of promoting and by neither of the other two, so the two that ship an app straight to people left the note describing the build before - and the next sending of anything at all was refused, naming apps that were exactly what somebody had approved.");
  async function lambda() {
    let copied = await html_public_from_latest(search);
    return copied;
  }
  let r = await firebase_deploy_locked_generic(
    lambda,
    html_update_latest_promote.name,
  );
  return r;
}
