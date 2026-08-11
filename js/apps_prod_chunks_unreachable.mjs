import { app_shared_prod_chunks_unreachable } from "./app_shared_prod_chunks_unreachable.mjs";
import { firebase_prod_app_names } from "./firebase_prod_app_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
export async function apps_prod_chunks_unreachable() {
  "Every live app that sends for an extra script whoever is being served cannot get, each answered beside the scripts they cannot get";
  "This is the one thing that asks the network, and it is the only proof there is that a piece is actually there. Everything else about this fault reads a folder, and a folder can be right about a sending that has not happened yet";
  "Each answer carries its own app's name rather than relying on the order they come back in, because they are asked all at once and the order they finish in is not the order they were asked";
  "An app missing nothing is left out entirely, so an empty answer means what is being served is whole";
  let app_names = await firebase_prod_app_names();
  async function app_lambda(app_name) {
    let unreachable = await app_shared_prod_chunks_unreachable(app_name);
    let r = {
      app_name,
      unreachable,
    };
    return r;
  }
  let all = await list_map_unordered_async(app_names, app_lambda);
  function faulty_lambda(r) {
    let any = property_list_empty_not_is(r, "unreachable");
    return any;
  }
  let faulty = list_filter(all, faulty_lambda);
  return faulty;
}
