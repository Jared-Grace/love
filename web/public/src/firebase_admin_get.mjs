import { log } from "../../../love/public/src/log.mjs";
import { firebase_storage_url_project } from "../../../love/public/src/firebase_storage_url_project.mjs";
import { firebase_service_account } from "../../../love/public/src/firebase_service_account.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_admin_get() {
  const admin = (await import("firebase-admin")).default;
  marker("1");
  let service_account = await firebase_service_account();
  const sb = await firebase_storage_url_project();
  log(message);
  admin.initializeApp({
    credential: admin.credential.cert(service_account),
    storageBucket: sb,
  });
  return admin;
}
