import { data_generate } from "./data_generate.mjs";
import { null_is } from "./null_is.mjs";
export function data_generate_get() {
  let data = null;
  let data_get_fn = async function lambda() {
    if (null_is(data)) {
      data = {};
      await data_generate(data);
    }
    return data;
  };
  return data_get_fn;
}
