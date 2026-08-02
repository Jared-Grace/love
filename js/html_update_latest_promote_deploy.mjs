import { firebase_deploy } from "./firebase_deploy.mjs";
import { html_update_latest_promote } from "./html_update_latest_promote.mjs";
export async function html_update_latest_promote_deploy(search) {
  "builds this app, copies what was built into the folder that gets published, and then publishes it";
  "both halves are reported, because they can each fail on their own and the caller could previously see neither. what came back used to be the copy's own answer, so a run whose publish was refused handed back exactly what a run that published cleanly did - which is how thirteen refused deploys in one afternoon were each read off the exit code rather than off the answer";
  "the copy happens BEFORE the gate that can refuse to publish, so a refused run still leaves the published folder holding this build. that is worth knowing rather than working around here - moving the copy is a change to what a deploy DOES, and belongs to whoever owns the deploy rather than to a passer-by widening a return value";
  let promoted = await html_update_latest_promote(search);
  let published = await firebase_deploy();
  let r = {
    promoted,
    published,
  };
  return r;
}
