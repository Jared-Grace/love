import { webpack_config_node_builtins_names } from "./webpack_config_node_builtins_names.mjs";
export function webpack_config_node_builtins_fallback() {
  let names = webpack_config_node_builtins_names();
  let fallback = {};
  for (let name of names) {
    fallback[name] = false;
    fallback["node:" + name] = false;
  }
  fallback["node:internal/child_process"] = false;
  fallback["node:stream/web"] = false;
  return fallback;
}
