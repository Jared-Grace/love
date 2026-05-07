import { error } from "../../../love/public/src/error.mjs";
export function throws(lambda) {
  let result = null;
  try {
    lambda();
    error();
  } catch (e) {
    result = e;
  }
  return e;
}
