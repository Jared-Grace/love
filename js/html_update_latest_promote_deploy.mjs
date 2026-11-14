import { qa_app_commit_gate_run_reuse } from "./qa_app_commit_gate_run_reuse.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { app_shared_build } from "./app_shared_build.mjs";
import { app_release_walk_run } from "./app_release_walk_run.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
import { firebase_deploy_promote_generic } from "./firebase_deploy_promote_generic.mjs";
import { cloudflare_pages_deploy } from "./cloudflare_pages_deploy.mjs";
export async function html_update_latest_promote_deploy(search) {
  "$plain search";
  "Checks this app - only the gates that can reach what it ships, reusing the newest judged commit's verdict when nothing this app ships has changed since, and judging the commit we stand on only when something has - then builds it, copies what was built into the folder that gets published and publishes it. Both halves are reported, because they can each fail on their own.";
  "The building happens out here and the copying inside, because they leave different things behind. Building writes the two bundles in the folder people work in, which is wanted whether or not anything is ever sent, and it takes long enough that holding the sending lock through it would keep everybody else waiting on a compile. Copying writes the folder that gets sent, and that must not happen until the answer is yes.";
  "The copy used to happen first, and a refused run left this build sitting in the published folder matching nothing anybody had judged - so the next person to ask to send anything at all was refused because of it. Twenty seven apps were found waiting in that state at once, some of them for weeks. Whoever owns the deploy was the one to move it, and moving it is what this is.";
  "THE SAME FOLDER IS THEN SENT TO CLOUDFLARE, after Firebase has let go of the sending lock, because people open the site at the Cloudflare address and a publish that reached only Firebase left that address showing an older app with nothing saying so. It goes second and not first, because the Cloudflare send checks the folder Firebase has just sent, and it runs after the lock is let go because it takes the same lock itself. Rejected: a separate command for Cloudflare, which was the shape it had, and which a publish of one app never remembered to run.";
  let judged = await qa_app_commit_gate_run_reuse(search);
  let deployable = property_get(judged, "deployable");
  true_is_assert_json(deployable, judged);
  await app_shared_build(search);
  ("An app with a browser walk must pass it before anything is copied or sent, and the walk runs here because the build just above has made the dev bundle from the same source about to ship - a walk run earlier would be checking the previous build.");
  await app_release_walk_run(search);
  async function promote() {
    let copied = await html_public_from_latest(search);
    return copied;
  }
  let firebase = await firebase_deploy_promote_generic(promote);
  let cloudflare = await cloudflare_pages_deploy();
  let r = {
    firebase,
    cloudflare,
  };
  return r;
}
