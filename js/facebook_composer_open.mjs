import { sleep } from "./sleep.mjs";
export async function facebook_composer_open(page) {
  "$plain page";
  "Opens the box for writing a new post on an already open facebook profile page, and waits until it shows.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let opened = await page.evaluate(
    "(function(){var es=[].slice.call(document.querySelectorAll('[role=button]'));var e=es.find(function(x){return (x.innerText||'').indexOf(\"What's on your mind\")>=0});if(!e)return false;e.click();return true})()",
  );
  if (!opened) {
    throw new Error("no 'What's on your mind' box");
  }
  await page.waitForSelector('[role=dialog][aria-label="Create post"]');
  await sleep(3000);
}
