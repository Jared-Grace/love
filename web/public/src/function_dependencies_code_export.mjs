import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { global_name } from "../../../love/public/src/global_name.mjs";
import { js_code_export_wrapped } from "../../../love/public/src/js_code_export_wrapped.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
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
      const blob = new Blob([code], {
        type: "text/javascript",
      });
      const url = URL.createObjectURL(blob);
      const mod = await import(url);
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
