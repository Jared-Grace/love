import { text_frozen } from "./text_frozen.mjs";
export function download_cache_store() {
  "the one store inside the download database. frozen for the same reason its database is: a browser already holding copies finds them under this word and no other";
  let v = text_frozen("downloads");
  return v;
}
