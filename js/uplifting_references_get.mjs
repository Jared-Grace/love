import { http_json_memoized_on_success } from "./http_json_memoized_on_success.mjs";
import { uplifting_references_url } from "./uplifting_references_url.mjs";
export async function uplifting_references_get() {
  "fetch the list of uplifting verse references from firebase (memoized, caching only on success so a transient failure retries). Returns null when it cannot be loaded — the caller decides what to do offline.";
  let key = "references";
  let url = uplifting_references_url();
  let references = await http_json_memoized_on_success(
    uplifting_references_get,
    key,
    url,
  );
  return references;
}
