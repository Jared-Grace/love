import { g_verses_pool_upload } from "./g_verses_pool_upload.mjs";
import { g_verses_waiting_name } from "./g_verses_waiting_name.mjs";
import { g_verses_waiting_on_the_lord } from "./g_verses_waiting_on_the_lord.mjs";
export async function g_verses_waiting_upload() {
  "resolve + upload the waiting-on-the-Lord verse pool as one batched file (run once, or whenever g_verses_waiting_on_the_lord changes): node scripts/r.mjs g_verses_waiting_upload";
  let name = g_verses_waiting_name();
  let references = g_verses_waiting_on_the_lord();
  await g_verses_pool_upload(name, references);
}
