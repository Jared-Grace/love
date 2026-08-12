import { list_first_property } from "./list_first_property.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { cors_rules } from "./cors_rules.mjs";
export async function cors_upload() {
  "Tell the file store which addresses its files may be read from, and hand back what it says they are afterwards.";
  "The rules go straight from the function that works them out to the store, with no file in between. The file exists for a command-line tool that is not installed here, and this repo already holds the key that lets it speak to the store directly - so the whole detour through a file on disk, and through a tool somebody has to install first, is simply not needed.";
  "What the store reports back is returned rather than what was sent, because those are different claims. The first says the store agrees; the second only says the asking did not throw.";
  let bucket = await firebase_bucket();
  let rules = cors_rules();
  await bucket.setCorsConfiguration(rules);
  let got = await bucket.getMetadata();
  let cors = list_first_property(got, "cors");
  let r = {
    sent: rules,
    cors,
  };
  return r;
}
