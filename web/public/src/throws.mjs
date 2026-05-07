import { error } from "../../../love/public/src/error.mjs";
export function throws(lambda) {
  let success = $1;
  let result = null;
  try {
    lambda();
    error();
  } catch (e) {
    result = e;
  }
  return e;
}
