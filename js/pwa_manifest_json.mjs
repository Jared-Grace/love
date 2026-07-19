import { json_to } from "./json_to.mjs";
import { pwa_manifest_object } from "./pwa_manifest_object.mjs";
export function pwa_manifest_json(name) {
  let object = pwa_manifest_object(name);
  let r = json_to(object);
  return r;
}
