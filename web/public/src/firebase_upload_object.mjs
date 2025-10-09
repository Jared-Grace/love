import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { firebase_config_get } from "../../../love/public/src/firebase_config_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { firebase_upload_string } from "../../../love/public/src/firebase_upload_string.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function firebase_upload_object(object, destination) {
  if (browser_is()) {
    const firebase = await import(
      "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
    );
    const storageMod = await import(
      "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js"
    );
    const { ref, uploadString } = firebaseStorage;
    let firebase_config = firebase_config_get();
    const app = firebase.initializeApp(firebase_config);
    const storage = storageMod.getStorage(app);
    const data = {
      name: "J",
      age: 42,
      active: true,
    };
    const jsonRef = ref(storage, destination);
    let v = JSON.stringify(object);
    await uploadString(jsonRef, v, "raw", {
      contentType: "application/json",
    });
    console.log("✅ JSON uploaded successfully");
  }
  let content = json_to(object);
  await firebase_upload_string(content, destination);
}
