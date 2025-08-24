import {storage_local_set} from "./storage_local_set.mjs";
export function storage_local_set_context(context, key, value) {
  let {app_fn} = context;
  storage_local_set(app_fn, key, value);
}
