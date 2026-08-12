import { server_url } from "./server_url.mjs";
import { server_url_local } from "./server_url_local.mjs";
import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
export function cors_origins() {
  "Every address a page of this repo's is really opened at, which is the list the file store is told may read from it.";
  "A browser will fetch a file from another place quite happily and then refuse to let the page read what came back, unless the store names the address the page came from. So a page opened at an address missing from here does not fail loudly - the fetch answers, the reading is refused, and the page paints nothing. That is what it looked like: the bible app showed a blank screen on a phone and the whole chapter on the machine it was built on.";
  "All three are worked out rather than written down, and the middle one is why. The name a phone reaches this machine by is different on every machine, so a list written by hand is a list that is right here and wrong on the next computer somebody runs this on - and because it is a personal machine's name, writing it down would also put it in a public record where it does not belong.";
  let here = server_url();
  let network = server_url_local();
  let published = firebase_project_url_jg();
  let r = [here, network, published];
  return r;
}
