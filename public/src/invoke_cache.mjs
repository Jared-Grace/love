import { json_to } from "../../../love/public/src/json_to.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function invoke_cache(f_name, args) {
  let key_get = function lambda() {
    let json = json_to(object);
  };
  let result = await cache_generic(
    key_get,
    url,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  marker("1");
}
