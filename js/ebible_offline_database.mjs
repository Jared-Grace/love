import { ebible_offline_database_name } from "./ebible_offline_database_name.mjs";
import { ebible_offline_store } from "./ebible_offline_store.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
export async function ebible_offline_database() {
  "one database holds every bible kept for reading with no internet.";
  "opening it is the same act as opening any other one-store database here, and it is spelled once rather than here as well: remembered under the database's own name so many chapters starting at once open it only once, given up on within a bounded time so a database wedged by another tab cannot hang a save at its first step forever, and forgotten on failure so the next save tries again instead of being poisoned by this one. Written out twice, every one of those has to be got right twice, and a repair to either copy leaves the other holding the fault.";
  "so all that is left to say here is which database, and which store inside it - both from their own getter and neither from an app, because a name-only import of an app entry point was measured at 410 KiB on one bundle while a getter holding one word costs nothing";
  let name = ebible_offline_database_name();
  let store = ebible_offline_store();
  let database = await indexeddb_database_open(name, store);
  return database;
}
