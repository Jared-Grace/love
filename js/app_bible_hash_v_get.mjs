import { log } from "./log.mjs";
import { property_initialize } from "./property_initialize.mjs";
export function app_bible_hash_v_get(hash) {
  let value2 = property_initialize(hash, "v", "1");
  log(app_bible_hash_v_get.name, {
    value2,
  });
  return value2;
}
