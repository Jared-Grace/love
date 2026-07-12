import { js_parse_generic } from "./js_parse_generic.mjs";
export async function js_parse_async(code) {
  let acorn = await import("acorn");
  let v = js_parse_generic(acorn, code);
  return v;
}
