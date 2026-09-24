import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { qa_app_commit_gate_run_reuse_at } from "./qa_app_commit_gate_run_reuse_at.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_build } from "./app_shared_build.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
import { firebase_deploy_promote_generic } from "./firebase_deploy_promote_generic.mjs";
export async function html_update_latest_promote_deploy_multiple(
  searches_comma,
) {
  "$plain searches_comma";
  "Checks several apps at the one commit we stand on when asked, builds each one that comes out sound, and sends them all live together in a single sending. Each app refused is handed back with what refused it, and the rest still go.";
  "One commit for all of them is the point. Asked one app at a time, peers commit in between, so each app stands on a commit nobody has judged yet and pays for a whole judging of its own - a quarter of an hour each on this machine. Pinned here, the first app pays for the judging and every app after it reads the same verdict.";
  "A refused app does not hold the others back, because the verdict is sorted per app: a red gate refuses only the apps that ship what it names. Holding every app back for one would send nothing for a fault most of them cannot reach.";
  "The building happens before the sending lock and the copying inside it, for the same reason as the one-app sending beside this: building is slow and leaves only the working folder changed, while copying writes the folder that is sent.";
  arguments_assert(arguments, 1);
  let searches = text_split_comma(searches_comma);
  let head = await git_head_commit();
  let sound = [];
  let refused = [];
  for (let search of searches) {
    let judged = await qa_app_commit_gate_run_reuse_at(search, head);
    let deployable = property_get(judged, "deployable");
    if (deployable) {
      sound.push(search);
    } else {
      refused.push(judged);
    }
  }
  for (let search of sound) {
    await app_shared_build(search);
  }
  async function promote() {
    let copied = {};
    for (let search of sound) {
      copied[search] = await html_public_from_latest(search);
    }
    return copied;
  }
  let published = null;
  if (greater_than(sound.length, 0)) {
    published = await firebase_deploy_promote_generic(promote);
  }
  let r = {
    head,
    sent: sound,
    refused,
    published,
  };
  return r;
}
