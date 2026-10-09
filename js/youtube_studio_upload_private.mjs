import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { youtube_studio_user_data_path } from "./youtube_studio_user_data_path.mjs";
import { sleep } from "./sleep.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function youtube_studio_upload_private(channel_id, file_path) {
  "$plain channel_id";
  "$plain file_path";
  "Puts one film up as private through youtube studio's own upload page, in the browser profile a person has already signed in to, and answers the new video's id.";
  "★ IT EXISTS BECAUSE THE API ALLOWS ABOUT SIX UPLOADS A DAY AND STUDIO DOES NOT COUNT AGAINST THAT. An upload through the API costs 1600 of 10000 daily units; the same film put up through studio's page costs none of them, so with dozens of songs waiting the API's limit, not the rendering, is what decides how fast they go up. Measured 2026-10-09.";
  "★ THE BROWSER READS THE FILM OFF THE DISK ITSELF. The film is handed to the page's file box by its path, so nothing carries its bytes on the way in - which is what a tool that ferries files through messages could not do past ten megabytes.";
  "★ IT DOES AS LITTLE IN THE PAGE AS IT CAN: the file, not made for children, private, save. Title and words are written afterwards through the API, which costs a few dozen units rather than sixteen hundred, because every field filled by clicking is a field that breaks silently the day studio moves a button.";
  "★ WHAT RUNS INSIDE THE PAGE IS WRITTEN AS TEXT, NEVER AS A FUNCTION. Puppeteer sends a function to the page as its own source, and this repo's canonicalizer rewrites every comparison in a function into a call to a helper imported from a file - a helper the page has never heard of. As text, the canonicalizer leaves it alone and the page gets exactly what was written.";
  "The channel is named in the address rather than taken from whichever one the profile last had open, so a film can never land on a sibling channel the same person also owns.";
  "★ IT KEEPS THE WINDOW OPEN UNTIL STUDIO SAYS THE UPLOAD IS FINISHED. Studio lets a person press save while the film is still going up, and carries on in the background - but closing the browser stops it, and what is left is a video with no film in it.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let puppeteer = await import("puppeteer");
  ("★ IT RUNS WITH NO WINDOW, AND SAYS IT IS ORDINARY CHROME. A window jumping over the person's screen for every song was asked away on 2026-10-09. Without a window chrome names itself 'HeadlessChrome' to every page it visits, which is the one word a site looks for to turn a driven browser away, so the page is told the name the same chrome gives when it has a window.");
  let browser = await puppeteer.launch({
    headless: true,
    executablePath: youtube_studio_chrome_path(),
    ignoreDefaultArgs: ["--enable-automation"],
    userDataDir: youtube_studio_user_data_path(),
    defaultViewport: {
      width: 1400,
      height: 1000,
    },
    protocolTimeout: 600000,
  });
  ("★ A STEP THAT STOPS SAYS WHICH ONE IT WAS, AND LEAVES A PICTURE OF THE PAGE. With no window there is nothing to look at afterwards, and a bare 'timed out after 120000ms' named none of the eight waits it could have come from - on 2026-10-09 the copy had landed fine both times, so the failure was somewhere after the film started going up, and nothing said where.");
  let step = "launch";
  let page = null;
  try {
    let pages = await browser.pages();
    page = pages[0];
    let agent = await browser.userAgent();
    let v = agent.replace("HeadlessChrome", "Chrome");
    await page.setUserAgent(v);
    page.setDefaultTimeout(120000);
    step = "open the upload page";
    await page.goto(
      "https://studio.youtube.com/channel/" +
        channel_id +
        "/videos/upload?d=ud",
    );
    step = "hand over the film";
    let input = await page.waitForSelector("input[type=file]");
    await input.uploadFile(file_path);
    step = "not made for kids";
    let not_for_kids = await page.waitForSelector(
      'tp-yt-paper-radio-button[name="VIDEO_MADE_FOR_KIDS_NOT_MFK"]',
    );
    await not_for_kids.click();
    step = "video link";
    let link = await page.waitForFunction(
      "(document.querySelector('ytcp-video-info a') || {}).href || false",
    );
    let href = await link.jsonValue();
    let video_id = href.split("/").pop();
    ("★ BETWEEN STEPS IT PAUSES, IT DOES NOT WAIT FOR A QUIET NETWORK. The film is still going up while the steps are clicked through, so on a big film the network is never quiet - an 88 MB film timed out there twice on 2026-10-09 and left a private copy behind, where a 34 MB one had already finished and passed.");
    step = "next";
    await page.click("#next-button");
    await sleep(2000);
    await page.click("#next-button");
    await sleep(2000);
    await page.click("#next-button");
    step = "private";
    let private_button = await page.waitForSelector(
      'tp-yt-paper-radio-button[name="PRIVATE"]',
    );
    await private_button.click();
    step = "upload finished";
    await page.waitForFunction(
      "/upload complete|processing|checks complete|checking/i.test((document.querySelector('ytcp-video-upload-progress') || {}).innerText || '')",
      {
        timeout: 1800000,
      },
    );
    let progress = await page.evaluate(
      "document.querySelector('ytcp-video-upload-progress').innerText",
    );
    step = "save";
    await page.click("#done-button");
    await page.waitForNetworkIdle({
      idleTime: 3000,
    });
    let r = {
      video_id,
      address: href,
      progress,
    };
    return r;
  } catch (e) {
    let picture = folder_gitignore_join("youtube_studio_upload_stopped.png");
    if (page) {
      await page.screenshot({
        path: picture,
      });
    }
    throw new Error(
      "studio upload stopped at step '" +
        step +
        "', page picture at " +
        picture +
        ": " +
        e.message,
    );
  } finally {
    await browser.close();
  }
}
