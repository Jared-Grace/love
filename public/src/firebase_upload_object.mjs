import { log } from "../../../love/public/src/log.mjs";
import { firebase_upload_string } from "../../../love/public/src/firebase_upload_string.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function firebase_upload_object(object, destination) {
  const app = firebase.initializeApp(firebaseConfig);
  const storage = storageMod.getStorage(app);
  const data = {
    name: "J",
    age: 42,
    active: true,
  };
  const jsonRef = ref(storage, "data/user.json");
  let v = JSON.stringify(data);
  await uploadString(jsonRef, v, "raw", {
    contentType: "application/json",
  });
  console.log("✅ JSON uploaded successfully");
  let content = json_to(object);
  await firebase_upload_string(content, destination);
}
