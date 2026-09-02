import { each_async } from "./each_async.mjs";
import { firebase_prod_app_public_live_restore } from "./firebase_prod_app_public_live_restore.mjs";
export async function firebase_prod_app_public_live_restore_multiple(list) {
  await each_async(list, async function lambda(item) {
    await firebase_prod_app_public_live_restore(item);
  });
}
