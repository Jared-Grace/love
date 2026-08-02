import { equal } from "./equal.mjs";
export function localhost_is() {
  let li =
    equal(location.hostname, "localhost") ||
    equal(location.hostname, "127.0.0.1") ||
    equal(location.hostname, "::1");
  return li;
}
