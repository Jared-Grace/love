import { file_read_json } from "./file_read_json.mjs";
import { folder_find_starts_with } from "./folder_find_starts_with.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { marker } from "./marker.mjs";
import { path_join } from "./path_join.mjs";
export async function firebase_deploy_function() {
  const admin = await import("firebase-admin");
  marker("1");
  let prefix = "jared-grace-firebase-adminsdk-";
  let v = folder_previous();
  let path_folder = path_join([v, "secret"]);
  let only = folder_find_starts_with(path_folder, prefix);
  let file_path = path_join([path_folder, only]);
  let data = await file_read_json(file_path);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
  });
  const bucket = admin.storage().bucket();
  await bucket.upload("./local-file.txt", {
    destination: "uploads/file.txt",
  });
  return data;
}
