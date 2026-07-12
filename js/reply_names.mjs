import { reply_choice } from "./reply_choice.mjs";
export function reply_names() {
  let names = ["***REMOVED***", "***REMOVED***", "***REMOVED***"];
  let fn = reply_choice(names);
  return fn;
}
