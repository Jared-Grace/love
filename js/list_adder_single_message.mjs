import { list_adder } from "./list_adder.mjs";
import { list_single_message } from "./list_single_message.mjs";
export function list_adder_single_message(lambda, message) {
  "Gathers whatever the given work adds and answers the one thing it added, complaining in the caller's own words when it added any other number";
  let list = list_adder(lambda);
  let only = list_single_message(list, message);
  return only;
}
