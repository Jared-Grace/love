import { indexed_get_generic } from "./indexed_get_generic.mjs";
export function text_get(s, index) {
  let item = indexed_get_generic(s, index, "text", object_get);
  function object_get() {
    let v = {
      s,
      index,
    };
    return v;
  }
  return item;
}
