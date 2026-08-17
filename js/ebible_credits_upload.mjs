import { ebible_credits_name } from "./ebible_credits_name.mjs";
import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
import { ebible_languages_credits } from "./ebible_languages_credits.mjs";
export async function ebible_credits_upload() {
  "Publishes the credit for every translation this app ships, so a reader can be shown who a text belongs to and on what terms.";
  "One file rather than one per translation, because a page crediting them all would otherwise ask storage two hundred and seventy six separate times to draw itself once.";
  "Kept out of the app itself rather than built into it, because a credit nobody has opened costs a reader nothing to leave on the shelf, and built in it would be carried by every reader on every visit.";
  let credits = await ebible_languages_credits();
  let name = ebible_credits_name();
  await ebible_firebase_upload(name, name, {
    credits,
  });
  return credits;
}
