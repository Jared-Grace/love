import { each_object } from "../../../love/public/src/each_object.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export function storage_local_set_dictionary(context, dictionary) {
  let { app_fn: af } = context;
  function lambda4(object, property) {
    storage_local_set(af, property, object);
  }
  each_object(dictionary, lambda4);
}
