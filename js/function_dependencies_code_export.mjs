import { list_join_newline } from "./list_join_newline.mjs";
import { global_name } from "./global_name.mjs";
import { js_code_export_wrapped } from "./js_code_export_wrapped.mjs";
import { mod } from "./mod.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_global_init } from "./js_code_global_init.mjs";
import { function_dependencies_code } from "./function_dependencies_code.mjs";
export async function function_dependencies_code_export(f_name) {
  let global_init = js_code_global_init();
  let i = 10;
  let v = await function_dependencies_code(f_name);
  let externals = property_get(v, "externals");
  let v2 = {
    get: async function lambda() {
      let dependencies = property_get(v, "code");
      let e = js_code_export_wrapped(f_name);
      let gn = global_name();
      let g = js_code_export_wrapped(gn);
      let parts = [global_init, dependencies, e, g];
      let code = list_join_newline(parts);
      let blob = new Blob([code], {
        type: "text/javascript",
      });
      let url = URL.createObjectURL(blob);
      let mod = await import(url);
      let fn = property_get(mod, f_name);
      let global = property_get(mod, gn);
      let v3 = {
        fn,
        global,
      };
      return v3;
    },
    externals,
  };
  return v2;
}
