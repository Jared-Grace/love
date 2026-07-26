import { list_single_message } from "./list_single_message.mjs";
export function list_single(list) {
  "The one thing in a list, for a caller with nothing of its own to add about why there should be one";
  let only = list_single_message(list, {});
  return only;
}
