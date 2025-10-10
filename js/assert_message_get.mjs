import { marker } from "../../../love/public/src/marker.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function assert_message_get(b, lambda) {
  marker("1");
  if (not(b)) {
    let message = lambda();
    error(message);
  }
}
