import { error } from "./error.mjs";
export function assert(b) {
  if (!b) {
    error();
  }
}
