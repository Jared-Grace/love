import { properties_delete_if_exists } from "./properties_delete_if_exists.mjs";
import { property_get } from "./property_get.mjs";
import { data_generate } from "./data_generate.mjs";
import { data_path } from "./data_path.mjs";
import { data_save } from "./data_save.mjs";
import { data_all } from "./data_all.mjs";
export async function data_files_update() {
  "Switched off at the top, so running it does nothing at present; the work standing below the return is what it did, kept for whoever decides to turn it back on.";
  return;
  let d_path = data_path();
  var d = await data_all(d_path);
  let data = property_get(d, "data");
  let properties = ["identifiers", "functions"];
  properties_delete_if_exists(data, properties);
  await data_generate(data);
  await data_save(d);
}
