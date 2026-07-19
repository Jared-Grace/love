import { g_verses_pool_upload } from "./g_verses_pool_upload.mjs";
import { g_verses_hs_warning_name } from "./g_verses_hs_warning_name.mjs";
import { g_verses_hs_warning } from "./g_verses_hs_warning.mjs";
export async function g_verses_hs_warning_upload() {
  "resolve + upload the Holy-Spirit-warning verse pool as one batched file (run once, or whenever g_verses_hs_warning changes): node scripts/r.mjs g_verses_hs_warning_upload";
  let name = g_verses_hs_warning_name();
  let references = g_verses_hs_warning();
  await g_verses_pool_upload(name, references);
}
