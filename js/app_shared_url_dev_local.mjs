import { app_shared_url_dev } from "./app_shared_url_dev.mjs";
import { server_url } from "./server_url.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_shared_url_dev_local(app_fn) {
  "the whole address an app's dev build can be opened at on this machine - the server this repo runs joined to the path within it, so it can be handed straight to a browser instead of being pieced together again at every place that wants to open a page";
  "it ends at the hash mark, with nothing after it, so a screen's own word can simply be added on the end";
  let path = await app_shared_url_dev(app_fn);
  let left = server_url();
  let url = text_combine(left, path);
  return url;
}
