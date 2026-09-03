import { arguments_assert } from "./arguments_assert.mjs";
export function image_url_warm(url) {
  "$plain url";
  "Fetches one picture into the browser's own store ahead of anything asking to see it, and says when it has landed.";
  "BESPOKE (new Image) - do NOT auto-canonicalize.";
  "IT GOES THROUGH A DETACHED IMAGE RATHER THAN THROUGH FETCH, because that is what a picture on the page goes through. A browser files the same address asked for as a picture and asked for as data under two separate entries, so warming with a fetch would download the whole thing twice and show the reader nothing sooner.";
  "A PICTURE THAT WILL NOT LOAD FINISHES JUST THE SAME. Warming is an offer of speed and never something the page depends on, so one address that has gone bad must not leave a count stuck one short of the end for as long as the reader looks at it.";
  arguments_assert(arguments, 1);
  function start(resolve) {
    function landed() {
      resolve(true);
    }
    let image = new Image();
    image.onload = landed;
    image.onerror = landed;
    image.src = url;
  }
  let promise = new Promise(start);
  return promise;
}
