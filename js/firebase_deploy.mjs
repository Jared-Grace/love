import { firebase_public_expected_unchanged_assert } from "./firebase_public_expected_unchanged_assert.mjs";
import { firebase_apps_frozen_unchanged_assert_deploy } from "./firebase_apps_frozen_unchanged_assert_deploy.mjs";
import { firebase_deploy_locked_generic } from "./firebase_deploy_locked_generic.mjs";
import { cloudflare_pages_deploy } from "./cloudflare_pages_deploy.mjs";
export async function firebase_deploy() {
  "Sends out what is already waiting in the folder that goes live, one sending at a time on this machine, and only once every frozen app is proved to be exactly what prod is already serving. Nothing new is put there on the way past.";
  "It asks nothing about whether the code is correct, and that is deliberate. The folder it sends means ready to send - a build only reaches it by way of a latest that was generated and approved, and that is where the question of correctness is asked. Asked again here it would be answered about the working folder, which is not what is being sent: a peer's half-written file, or a gate somebody else turned red an hour ago, would hold back a folder that was judged and approved before either of them existed.";
  "So the only two things that may stop a sending are the two that are about the very bytes going out. One is a copy already under way - the lock is shared with the copying from latest, so a sending can never walk a folder that is half-written. The other is the proof that the frozen apps have not moved, which is a question about content and has an answer in the folder itself.";
  "The bytes are looked at before anything leaves the machine. Every app in the folder is compared against what was written down when it was promoted, and a folder holding anything else stops the sending where it stands - the folder goes out whole, so one app nobody approved is enough to hold all of them.";
  async function lambda() {
    await firebase_public_expected_unchanged_assert();
    let sent = await firebase_apps_frozen_unchanged_assert_deploy();
    return sent;
  }
  let published = await firebase_deploy_locked_generic(
    lambda,
    firebase_deploy.name,
  );
  ("2026-11-03, at the human's asking: a standard send reaches Firebase and Cloudflare together, because people open the site at the Cloudflare address and a send that reached only Firebase left that address showing an older build with nothing saying so. Cloudflare goes second because it checks the folder Firebase has just sent, and after the lock is let go because it takes the same lock itself.");
  let cloudflare = await cloudflare_pages_deploy();
  let r = {
    published,
    cloudflare,
  };
  return r;
}
