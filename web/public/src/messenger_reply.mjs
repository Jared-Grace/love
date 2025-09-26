import { messenger_reply_puppeteer } from "./messenger_reply_puppeteer.mjs";
import { marker } from "./marker.mjs";
export async function messenger_reply() {
  marker("1");
  let v = await messenger_reply_puppeteer();
  return v;
}
