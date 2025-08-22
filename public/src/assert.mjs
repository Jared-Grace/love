import { not } from "./not.mjs";
import { error } from "./error.mjs";
export function assert(b) {
  if (not(b)) {
    error();
  }
}
