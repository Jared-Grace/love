import { storage_local_exists_context } from "../../../love/public/src/storage_local_exists_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_paste(choices) {
  marker("1");
  let exists = storage_local_exists_context(context, app_a_paste.name);
}
