import { function_name_to_path } from "./function_name_to_path.mjs";
import { marker } from "./marker.mjs";
import { function_exists_inner } from "./function_exists_inner.mjs";
export async function function_exists_strict(f_name) {
  marker("1");
  const f_path = function_name_to_path(f_name);
  let e = await function_exists_inner({
    f_path,
  });
  return e;
}
