import { import_install } from "./import_install.mjs";
import { marker } from "./marker.mjs";
export async function messenger_reply_login() {
  const { chromium, firefox, webkit } = await import_install("playwright");
  marker("1");
}
