import { function_read } from "./function_read.mjs";
import { marker } from "./marker.mjs";
export async function firebase_deploy_function() {
  marker("1");
  let prefix = "jared-grace-firebase-adminsdk-";
  let v = await function_read(f_name);
}
