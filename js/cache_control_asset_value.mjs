export function cache_control_asset_value() {
  "How long a browser may keep a picture, and what it does with the copy it kept.";
  "IT KEEPS THE PICTURE FOR A YEAR AND NEVER ASKS AGAIN. An asset address names one file that will not change under it, because the address carries a stamp that is bumped whenever the assets are sent up; so there is nothing a second ask could ever learn, and asking anyway was the whole of what made a load slow.";
  "It used to say max-age=0 with stale-while-revalidate for a year, meaning answer from the kept copy at once and ask afterwards. Browsers do not do that for a picture. max-age=0 is read as the copy being out of date the moment it lands, so the kept copy was never used - measured on a reload of the prayer game, 212 pictures were fetched and not one came from the store the browser already had, the last of them arriving 14 seconds in.";
  "It was not only between loads. Nothing may be reused inside ONE load either, so the same address was asked for again every time a second picture on the page happened to want it: 59 addresses were fetched more than once in a single load and one of them five times, against 86 pictures that actually exist.";
  "The files are around four kilobytes each, which is what says the cost is WAITING and not downloading. A page holding 1772 pictures drawn from 86 files spends its whole opening minute queueing round trips through the handful of connections a browser will open at a time, and every one of those round trips is now avoidable rather than merely small.";
  "An edited picture still arrives, and immutable does not stop it. The promise is about an address, the stamp gives new art a new address, and a browser has no kept copy of an address it has never seen.";
  let value = "public, max-age=31536000, immutable";
  return value;
}
