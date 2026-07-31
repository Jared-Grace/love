import { text_frozen } from "./text_frozen.mjs";
export function ebible_offline_store() {
  "the one store inside the offline bible database, holding every chapter that was kept.";
  "frozen for the same reason the database name is, and for one more: this is an ordinary word, so the day anybody writes a function called bible the canonicalizing pass would read this as a reference to it and a value already sitting in readers' browsers would start following a rename.";
  let store = text_frozen("bible");
  return store;
}
