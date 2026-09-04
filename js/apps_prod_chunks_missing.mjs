import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_names } from "./apps_published_names.mjs";
import { app_shared_prod_chunks_missing } from "./app_shared_prod_chunks_missing.mjs";
import { list_map_unordered_async_filter_property_list_empty_not_is } from "./list_map_unordered_async_filter_property_list_empty_not_is.mjs";
export async function apps_prod_chunks_missing() {
  "Every app waiting to be sent that will send for an extra script of its own and not find it, each answered beside the scripts it is missing.";
  "This is the whole of that fault stated in one place, so that clearing it is a thing that can be finished rather than a thing that is looked for app by app.";
  "Each answer carries its own app's name rather than relying on the order they come back in, because they are asked all at once and the order they finish in is not the order they were asked.";
  "An app missing nothing is left out entirely, so an empty answer means the fault is nowhere - which is the shape a gate can be built on. Asking all at once and then keeping only the answers that found something is one helper now, shared with the sweep that reads a stage folder's built files for the same shape of fault.";
  arguments_assert(arguments, 0);
  let app_names = await apps_published_names();
  async function app_lambda(app_name) {
    let missing = await app_shared_prod_chunks_missing(app_name);
    let r = {
      app_name,
      missing,
    };
    return r;
  }
  let faulty = await list_map_unordered_async_filter_property_list_empty_not_is(
    app_names,
    app_lambda,
    "missing",
  );
  return faulty;
}
