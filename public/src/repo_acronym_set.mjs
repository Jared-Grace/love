import { lambda_get } from "./lambda_get.mjs";
import { data_set } from "./data_set.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
import { marker } from "./marker.mjs";
export async function repo_acronym_set() {
  marker("1");
  let f_path = data_path_generic("", "about");
  let lambda$previous = lambda_get(value);
  await data_set(lambda$previous, "acronym", f_path);
}
