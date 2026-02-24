import { firebase_name } from "../../../love/public/src/firebase_name.mjs";
import { firebase_storage_url_project } from "../../../love/public/src/firebase_storage_url_project.mjs";
import { firebase_service_account } from "../../../love/public/src/firebase_service_account.mjs";
export async function firebase_admin_get() {
  const admin = (await import("firebase-admin")).default;
  let service_account = await firebase_service_account();
  let project_name = await firebase_name();
  const sb = firebase_storage_url_project(project_name);
  admin.initializeApp({
    credential: admin.credential.cert(service_account),
    storageBucket: sb,
  });
  return admin;
}
