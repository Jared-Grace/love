import { error } from "../../../love/public/src/error.mjs";
export function not_assert(b) {
  if (b) {
    error();
  }
}
