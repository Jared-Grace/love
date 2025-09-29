import { functions_names_from_path } from "./functions_names_from_path.mjs";
import { repos_names } from "./repos_names.mjs";
import { sleep } from "./sleep.mjs";
import { marker } from "./marker.mjs";
import { functions_path } from "./functions_path.mjs";
export async function functions_names() {
  marker("1");
  let path = functions_path();
  let v = functions_names_from_path(path);
  return v;
  await sleep(ms);
  let rns = await repos_names();
}
