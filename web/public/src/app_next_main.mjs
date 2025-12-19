import { html_hash_get } from "../../../love/public/src/html_hash_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_next_main() {
  marker("1");
  let hash = html_hash_get();
}
