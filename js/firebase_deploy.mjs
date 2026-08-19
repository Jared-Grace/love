import { firebase_deploy_promote_generic } from "./firebase_deploy_promote_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function firebase_deploy() {
  "Puts this repo's pages live, but only after the whole check passes and every frozen app is proved unchanged, and only one such deploy may run on this machine at a time. Sends what is already waiting and puts nothing new there.";
  "Its pair puts one more build into the folder on the way past, between the check and the sending, and everything else about the two is the same. Written out twice, the copy without the build was the one that stayed right, and the one with it kept the older order - asking after it had already written - which is how a refused run still changed what would go out next time.";
  async function promote() {
    "nothing is put in place by this one, and the sending is told so rather";
    "than left to work it out from an absent answer";
    return null;
  }
  let done = await firebase_deploy_promote_generic(promote);
  let published = property_get(done, "published");
  return published;
}
