import {chromium, webkit, devices} from "playwright";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function playwright_test_blank_device(device_name, lambda) {
  arguments_assert(arguments, 2);
  ("$plain device_name");
  ('A just-built browser pretending to be the phone named device_name (a name from Playwright\'s own device list, such as "iPhone 13" or "Pixel 7"): its screen size, touch, and the engine that phone really runs - WebKit for an iPhone or iPad, Chromium for the rest. Handed over on a blank page and closed again afterwards whatever happens.');
  ("The engine follows the phone because every browser on an iPhone is WebKit underneath, so a page that works in Chromium at iPhone size can still break for every iPhone user.");
  let device = property_get(devices, device_name);
  let engine = property_get(device, "defaultBrowserType");
  let launchers = {
    chromium,
    webkit,
  };
  let launcher = property_get(launchers, engine);
  let browser = await launcher.launch({
    headless: true,
  });
  try {
    let context = await browser.newContext(device);
    let page = await context.newPage();
    await lambda(page);
  } finally {
    await browser.close();
  }
}
