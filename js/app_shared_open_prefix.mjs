import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { app_shared_open_folder } from "./app_shared_open_folder.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_open_prefix() {
  "the opening every daily open's address starts with, and nothing else does";
  "The writer builds on it and the counter keeps only names starting with it, and the message reader skips them - spelled once, so none of the three can come to disagree about which files are opens.";
  let opening = messages_firebase_path();
  let folder = app_shared_open_folder();
  let prefix = text_combine(opening, folder);
  return prefix;
}
