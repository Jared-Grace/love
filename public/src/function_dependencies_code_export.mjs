import { mod } from "../../../love/public/src/mod.mjs";
import { js_code_export } from "../../../love/public/src/js_code_export.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
export async function function_dependencies_code_export(f_name) {
  marker("1");
  let global_init = js_code_global_init();
  let v = await function_dependencies_code(f_name);
  let dependencies = object_property_get(v, "code");
  let externals = object_property_get(v, "externals");
  let e = js_code_export(f_name);
  const code = `${global_init}
    ${dependencies}
    ${e}`;
  const blob = new Blob([code], {
    type: "text/javascript",
  });
  const url = URL.createObjectURL(blob);
  const mod = await import(url);
  let fn = object_property_get(mod, f_name);
  let v2 = {
    fn_get: function lambda() {},
    externals,
  };
  return v2;
}
