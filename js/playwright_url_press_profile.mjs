import { arguments_assert } from "./arguments_assert.mjs";
import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_press_profile(url, text) {
  arguments_assert(arguments, 2);
  url_opened_unasked_assert(url);
  ("Where the time goes during one press of one button, in a headless browser: opens the address, presses the button whose whole text ends with the given text, records what the page was running until it went quiet, and hands back the functions that took the most time - each by its own time, spent in its own lines, and by its total time, which counts everything it called as well.");
  ("Own time says which function is the slow one; total time says which call started the slowness. Both are given because the slow one is usually a small helper called a great many times, and the fix is usually in whoever called it that often.");
  ("BROWSER-SERIALIZED - the code run inside the page is handed over as text, so nothing rewriting this file can reach into it");
  let result = null;
  async function on_page(page) {
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    let cdp = await page.context().newCDPSession(page);
    await cdp.send("Profiler.enable");
    await cdp.send("Profiler.setSamplingInterval", {
      interval: 200,
    });
    await page.evaluate(
      "window.__changed = performance.now(); new MutationObserver(function () { window.__changed = performance.now(); }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true });",
    );
    await cdp.send("Profiler.start");
    let press =
      "(function (wanted) { let found = Array.from(document.querySelectorAll('button')).filter(function (b) { return b.offsetParent !== null && b.innerText.trim().endsWith(wanted); }); if (found.length === 0) { return false; } window.__changed = performance.now(); found[0].click(); return true; })";
    let pressed = await page.evaluate(press + "(" + JSON.stringify(text) + ")");
    while (pressed) {
      await page.waitForTimeout(100);
      let quiet = await page.evaluate("performance.now() - window.__changed");
      if (quiet > 500) {
        break;
      }
    }
    let stopped = await cdp.send("Profiler.stop");
    let profile = stopped.profile;
    let nodes = profile.nodes;
    let by_id = new Map();
    for (let node of nodes) {
      by_id.set(node.id, node);
    }
    let interval_ms =
      (profile.endTime - profile.startTime) / 1000 / profile.samples.length;
    let hits = new Map();
    for (let id of profile.samples) {
      hits.set(id, (hits.get(id) || 0) + 1);
    }
    let parent = new Map();
    for (let node of nodes) {
      for (let child of node.children || []) {
        parent.set(child, node.id);
      }
    }
    let own = new Map();
    let total = new Map();
    function name_of(node) {
      let f = node.callFrame;
      let r2 =
        (f.functionName || "(anonymous)") +
        " " +
        f.url.split("/").pop() +
        ":" +
        f.lineNumber;
      return r2;
    }
    for (let [id, count] of hits) {
      let node = by_id.get(id);
      let name = name_of(node);
      own.set(name, (own.get(name) || 0) + count);
      let seen = new Set();
      let at = id;
      while (at !== undefined) {
        let v = by_id.get(at);
        let n = name_of(v);
        if (!seen.has(n)) {
          seen.add(n);
          total.set(n, (total.get(n) || 0) + count);
        }
        at = parent.get(at);
      }
    }
    function top(map) {
      let v2 = map.entries();
      let rows = Array.from(v2);
      function lambda(a, b) {
        let r3 = b[1] - a[1];
        return r3;
      }
      rows.sort(lambda);
      function lambda2(r) {
        let r4 = Math.round(r[1] * interval_ms) + " ms " + r[0];
        return r4;
      }
      let r5 = rows.slice(0, 30).map(lambda2);
      return r5;
    }
    result = {
      pressed,
      ms: Math.round((profile.endTime - profile.startTime) / 1000),
      own: top(own),
      total: top(total),
    };
  }
  await playwright_test_blank(on_page);
  return result;
}
