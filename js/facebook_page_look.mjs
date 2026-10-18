import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
import { sleep } from "./sleep.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function facebook_page_look(url, click_label) {
  "$plain url";
  "$plain click_label";
  "Opens a facebook address with no window in the signed-in page profile, optionally clicks the first thing whose name or text holds click_label, then leaves a picture of the page and answers every button, text box and file box on it. It reads; it never posts.";
  "★ IT EXISTS SO A PROGRAM THAT POSTS CAN BE WRITTEN FROM WHAT THE PAGE REALLY SHOWS. Facebook's class names are scrambled and change, so the only steady handles are the names a page gives its buttons for screen readers - and those can only be learned by asking the page.";
  "Pass '-' as click_label to click nothing.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let puppeteer = await import("puppeteer");
  let browser = await puppeteer.launch({
    headless: true,
    executablePath: youtube_studio_chrome_path(),
    ignoreDefaultArgs: ["--enable-automation"],
    userDataDir: facebook_page_user_data_path(),
    defaultViewport: {
      width: 1400,
      height: 1000,
    },
  });
  try {
    let pages = await browser.pages();
    let page = pages[0];
    let agent = await browser.userAgent();
    let v = agent.replace("HeadlessChrome", "Chrome");
    await page.setUserAgent(v);
    await page.goto(url);
    await sleep(6000);
    let clicked = null;
    if (click_label !== "-") {
      clicked = await page.evaluate(
        "(function(w){var es=[].slice.call(document.querySelectorAll('[role=button],[role=link],a,button,[role=menuitem],[role=radio],[role=option]'));var e=es.find(function(x){return ((x.getAttribute('aria-label')||'')+' '+(x.innerText||'')).indexOf(w)>=0});if(!e)return null;e.click();return (e.getAttribute('aria-label')||'')+' | '+(e.innerText||'').slice(0,80)})(" +
          JSON.stringify(click_label) +
          ")",
      );
      await sleep(5000);
    }
    let picture = folder_gitignore_join(
      text_combine_multiple([fn_name("facebook_page_look"), ".png"]),
    );
    await page.screenshot({
      path: picture,
    });
    let things = await page.evaluate(
      "[].slice.call(document.querySelectorAll('[role=button],button,[role=textbox],input[type=file],[contenteditable=true],[role=dialog],[role=radio],[role=switch]')).filter(function(e){var r=e.getBoundingClientRect();return e.type==='file'||(r.width>0&&r.height>0)}).map(function(e){return [e.tagName,e.getAttribute('role')||'',e.getAttribute('aria-label')||'',(e.innerText||'').slice(0,60).replace(/\\n/g,' / '),e.getAttribute('accept')||''].join(' | ')}).slice(0,150)",
    );
    let r = {
      address: page.url(),
      clicked,
      picture,
      things,
    };
    return r;
  } finally {
    await browser.close();
  }
}
