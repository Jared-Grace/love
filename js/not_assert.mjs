import { error } from "./error.mjs";
export function not_assert(b) {
  if (b) {
    error();
  }
}
