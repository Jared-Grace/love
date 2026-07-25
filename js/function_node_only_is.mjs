import { marker } from "./marker.mjs";
import { file_read } from "./file_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_any } from "./list_any.mjs";
import { node_module_import_markers } from "./node_module_import_markers.mjs";
export async function function_node_only_is(f_path) {
  "True when this file reaches for a Node built-in and offers the browser no branch to take instead.";
  let code = await file_read(f_path);
  let guard = fn_name("browser_is");
  let guarded = text_includes(code, guard);
  if (guarded) {
    return false;
  }
  let markers = node_module_import_markers();
  function lambda(marker) {
    let hit = text_includes(code, marker);
    return hit;
  }
  let any = list_any(markers, lambda);
  return any;
}
