import { ebible_versions_english_choices_upload_path } from "./ebible_versions_english_choices_upload_path.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { ebible_versions_english_choices } from "./ebible_versions_english_choices.mjs";
export async function ebible_versions_english_choices_upload() {
  "Works out the English versions and puts them where a browser can reach them. Run here because a screen cannot work them out for itself - reaching the sources is a job for this side, so the answer has to be sent up before any page can offer it.";
  let cs = await ebible_versions_english_choices();
  let destination = ebible_versions_english_choices_upload_path();
  await firebase_upload_object(destination, cs);
}
