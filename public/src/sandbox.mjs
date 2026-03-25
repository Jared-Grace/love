import { server_url } from "../../../love/public/src/server_url.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export async function sandbox() {
  log_keep(sandbox.name, "Static server running at: " + server_url());
}
