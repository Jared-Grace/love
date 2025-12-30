import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { global_name } from "../../../love/public/src/global_name.mjs";
import { js_code_export_wrapped } from "../../../love/public/src/js_code_export_wrapped.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
export async function function_dependencies_code_export(f_name) {
  marker("1");
  let global_init = js_code_global_init();
  let v = await function_dependencies_code(f_name);
  let externals = object_property_get(v, "externals");
  let v2 = {
    fn_get: async function lambda() {
      let dependencies = object_property_get(v, "code");
      let e = js_code_export_wrapped(f_name);
      let f_name2 = global_name();
      let g = js_code_export_wrapped(f_name2);
      let parts = [global_init, dependencies, e, g];
      let code = list_join_newline(parts);
      log(code);
      const blob = new Blob([code], {
        type: "text/javascript",
      });
      const url = URL.createObjectURL(blob);
      const mod = await import(url);
      let fn = object_property_get(mod, f_name);
      return fn;
    },
    externals,
  };
  return v2;
}
