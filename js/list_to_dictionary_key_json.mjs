import { json_to } from "./json_to.mjs";
import { list_to_dictionary_key } from "./list_to_dictionary_key.mjs";
export function list_to_dictionary_key_json(contacts) {
  let dictionary = list_to_dictionary_key(contacts, json_to);
  return dictionary;
}
