import { app_shared_build } from "./app_shared_build.mjs";
import { firebase_deploy_promote_generic } from "./firebase_deploy_promote_generic.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
export async function html_update_latest_promote_deploy(search) {
  "$plain search";
  "Builds this app, and then - only if the whole check passes - copies what was built into the folder that gets published and publishes it. Both halves are reported, because they can each fail on their own.";
  "The building happens out here and the copying inside, because they leave different things behind. Building writes the two bundles in the folder people work in, which is wanted whether or not anything is ever sent, and it takes long enough that holding the sending lock through it would keep everybody else waiting on a compile. Copying writes the folder that gets sent, and that must not happen until the answer is yes.";
  "The copy used to happen first, and a refused run left this build sitting in the published folder matching nothing anybody had judged - so the next person to ask to send anything at all was refused because of it. Twenty seven apps were found waiting in that state at once, some of them for weeks. Whoever owns the deploy was the one to move it, and moving it is what this is.";
  await app_shared_build(search);
  async function promote() {
    let copied = await html_public_from_latest(search);
    return copied;
  }
  let r = await firebase_deploy_promote_generic(promote);
  return r;
}
