import { text_frozen } from "./text_frozen.mjs";
import { photo_organizer_store } from "./photo_organizer_store.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
export async function photo_organizer_database() {
  "the browser database on this phone holding every folder of the photo organizer, each with its photos inside it";
  "the word must not move once a phone is holding folders under it: that phone looks under this and under nothing else.";
  let name = text_frozen("photo_organizer");
  let store = photo_organizer_store();
  let database = await indexeddb_database_open(name, store);
  return database;
}
