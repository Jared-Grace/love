import { firebase_storage_url_project } from "./firebase_storage_url_project.mjs";
import { firebase_service_account } from "./firebase_service_account.mjs";
import { marker } from "./marker.mjs";
export async function firebase_admin_get() {
  const admin = (await import("firebase-admin")).default;
  marker("1");
  let service_account = await firebase_service_account();
  admin.initializeApp({
    credential: admin.credential.cert(service_account),
    storageBucket: firebase_storage_url_project(),
  });
  return admin;
}
