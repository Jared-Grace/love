import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_promote_function_app(f_name) {
  marker("1");
  let v = await firebase_promote_function(f_name);
  return v;
}
