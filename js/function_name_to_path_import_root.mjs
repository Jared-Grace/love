import { property_get } from "./property_get.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { text_skip } from "./text_skip.mjs";
export function function_name_to_path_import_root(import_, dictionary) {
  let value = property_get(dictionary, import_);
  "strip the leading .. so the repo-root-relative path becomes a server-absolute /repo/... url that resolves from any generated-html location";
  let root = text_skip(value, 2);
  let c = js_code_string(root);
  return c;
}
