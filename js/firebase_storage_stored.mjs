import { firebase_storage_stored_query } from "./firebase_storage_stored_query.mjs";
export async function firebase_storage_stored(prefix) {
  "$plain prefix";
  "What storage already holds under one prefix, folders inside it included: for each name, the checksum of its bytes and the two settings it was written with.";
  let query = {
    prefix,
  };
  let stored = await firebase_storage_stored_query(query);
  return stored;
}
