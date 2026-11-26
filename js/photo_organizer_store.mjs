import { text_frozen } from "./text_frozen.mjs";
export function photo_organizer_store() {
  "the one store inside the photo organizer's database: each folder under its own key. frozen for the same reason its database is";
  let v = text_frozen("folders");
  return v;
}
