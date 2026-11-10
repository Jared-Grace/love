import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
export async function facebook_browser_shared_connect_or_null() {
  "Attaches to the facebook browser left open in the signed-in profile and answers it, or null when none is open. It starts nothing and takes no turn - the caller holds the profile's lock.";
  "★ THE BROWSER SAYS WHERE IT LISTENS: started with a debugging port of 0, chrome picks a free port and writes it as the first line of DevToolsActivePort in the profile folder. A file left by a browser that has since died answers null, and is removed.";
  let fs = await import("node:fs/promises");
  let path = await import("node:path");
  let puppeteer = await import("puppeteer");
  let v = facebook_page_user_data_path();
  let port_file = path.join(v, "DevToolsActivePort");
  let text = null;
  try {
    text = await fs.readFile(port_file, "utf8");
  } catch (e) {
    return null;
  }
  let port = text.split("\n")[0].trim();
  try {
    let browser = await puppeteer.connect({
      browserURL: "http://127.0.0.1:" + port,
      defaultViewport: {
        width: 1400,
        height: 1000,
      },
      protocolTimeout: 600000,
    });
    return browser;
  } catch (e) {
    await fs.rm(port_file, {
      force: true,
    });
    return null;
  }
}
