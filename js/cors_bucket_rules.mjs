import { list_first_property } from "./list_first_property.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function cors_bucket_rules() {
  "The reading rules the file store is actually keeping right now, asked of the store itself.";
  "This is the only honest source for them. What we would send is worked out from this machine, and what was sent last is not written down anywhere - so the one place the truth lives is the store, and it is asked every time rather than remembered.";
  let bucket = await firebase_bucket();
  let got = await bucket.getMetadata();
  let cors = list_first_property(got, "cors");
  return cors;
}
