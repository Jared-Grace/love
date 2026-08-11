import { app_prod_chunks_missing } from "./app_prod_chunks_missing.mjs";
import { apps_names } from "./apps_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
export async function apps_prod_chunks_missing() {
  "Every app waiting to be sent that will send for an extra script of its own and not find it, each answered beside the scripts it is missing.";
  "This is the whole of that fault stated in one place, so that clearing it is a thing that can be finished rather than a thing that is looked for app by app.";
  "Each answer carries its own app's name rather than relying on the order they come back in, because they are asked all at once and the order they finish in is not the order they were asked.";
  "An app missing nothing is left out entirely, so an empty answer means the fault is nowhere - which is the shape a gate can be built on.";
  let app_names = await apps_names();
  async function app_lambda(app_name) {
    let missing = await app_prod_chunks_missing(app_name);
    let r = {
      app_name,
      missing,
    };
    return r;
  }
  let all = await list_map_unordered_async(app_names, app_lambda);
  function faulty_lambda(r) {
    let any = property_list_empty_not_is(r, "missing");
    return any;
  }
  let faulty = list_filter(all, faulty_lambda);
  return faulty;
}
