import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { firebase_upload_generic } from "../../../love/public/src/firebase_upload_generic.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function firebase_upload_text_generic(
  content,
  destination,
  content_type,
) {
  log({
    msg: "uploading to firebase",
    destination,
  });
  if (browser_is()) {
    async function lambda2() {
      const app = await firebase_app_initialize();
      const storageMod = await import(
        "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js"
      );
      let uploadString = property_get(storageMod, "uploadString");
      let ref = property_get(storageMod, "ref");
      const storage = storageMod.getStorage(app);
      const jsonRef = ref(storage, destination);
      await uploadString(jsonRef, content, "raw", {
        contentType: "application/json",
      });
      console.log("✅ JSON uploaded successfully");
    }
    let result = await html_loading(lambda2);
    return;
  }
  let buffer = Buffer.from(content);
  const settings = {
    contentType: content_type,
    gzip: true,
  };
  await firebase_upload_generic(destination, settings, buffer);
}
