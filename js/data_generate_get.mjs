import { data_generate } from "./data_generate.mjs";
import { null_is } from "./null_is.mjs";
import { data_get } from "./data_get.mjs";
export function data_generate_get() {
  let data = null;
  let data_get = async function lambda() {
    if (null_is(data)) {
      data = {};
      await data_generate(data);
    }
    return data;
  };
  return data_get;
}
