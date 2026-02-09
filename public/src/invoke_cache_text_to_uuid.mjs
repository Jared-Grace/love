import { invoke_cache_generic } from "../../../love/public/src/invoke_cache_generic.mjs";
import { text_to_uuid_set } from "../../../love/public/src/text_to_uuid_set.mjs";
import { text_to_uuid_set_exists } from "../../../love/public/src/text_to_uuid_set_exists.mjs";
import { text_to_uuid_get } from "../../../love/public/src/text_to_uuid_get.mjs";
export async function invoke_cache_text_to_uuid(fn, args) {
  let cached_exists = text_to_uuid_set_exists;
  let cached_get = text_to_uuid_get;
  let cache_save = async function lambda4(key, value) {
    await text_to_uuid_set(text);
  };
  let r = await invoke_cache_generic(
    fn,
    args,
    cached_exists,
    cached_get,
    cache_save,
  );
  return r;
}
