import { marker } from "../../../love/public/src/marker.mjs";
import { js_parse_generic } from "../../../karate_code/public/src/js_parse_generic.mjs";
export async function js_parse_async(code) {
  const acorn = await import("acorn");
  marker("1");
  let v = js_parse_generic(acorn, code);
  return v;
}
