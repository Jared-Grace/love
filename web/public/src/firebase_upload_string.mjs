import { log } from "../../../love/public/src/log.mjs";
import { firebase_config_get } from "../../../love/public/src/firebase_config_get.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { firebase_upload_generic } from "../../../love/public/src/firebase_upload_generic.mjs";
export async function firebase_upload_string(content, destination) {
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
    const jsonRef = ref(storage, destination);
    await uploadString(jsonRef, content, "raw", {
      contentType: "application/json",
    });
    console.log("✅ JSON uploaded successfully");
  }
  let buffer = Buffer.from(content);
  const settings = {
    contentType: "text/plain",
    gzip: true,
  };
  await firebase_upload_generic(destination, settings, buffer);
  return destination;
}
