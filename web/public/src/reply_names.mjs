import { marker } from "../../../love/public/src/marker.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_names() {
  marker("1");
  let names = ["***REMOVED***", "***REMOVED***", "***REMOVED***"];
  let fn = reply_choice(names);
  return fn;
}
