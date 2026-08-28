import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_dev_missing_walked } from "./apps_published_dev_missing_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function apps_published_dev_missing() {
  "Every app standing at a public address that has no working build here, said as bare names.";
  "A page that has been sent out is a page a stranger can type in and reach, and one with nothing behind it here is a page nobody can open, fix, or look at before sending it again. So each name in this answer is an address the public can reach and this repo cannot rebuild - which is the one direction of the pair that actually costs somebody something.";
  "The other direction is deliberately not a fault. An app being worked on and not yet sent is the ordinary way an app begins, and most of what is built here will sit like that for a while.";
  "The reading itself lives next door and answers this beside how many addresses it walked. A ratchet is measured against a flat list and a gate needs the count, so the narrowing is done once here rather than at each place that only wants the names.";
  arguments_assert(arguments, 0);
  let told = await apps_published_dev_missing_walked();
  let missing = property_get(told, "missing");
  return missing;
}
