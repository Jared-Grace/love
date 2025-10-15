import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_names() {
  marker("1");
  let names = ["***REMOVED***", "***REMOVED***", "***REMOVED***"];
  let fn = reply_sequence(names);
  return fn;
}
