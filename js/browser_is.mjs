import { not_equal } from "./not_equal.mjs";
export function browser_is() {
  let b =
    not_equal(typeof window, "undefined") &&
    not_equal(typeof window.document, "undefined");
  return b;
}
