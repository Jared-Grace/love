import { error } from "../../../love/public/src/error.mjs";
export function assert_not(b) {
  if (b) {
    error();
  }
}
