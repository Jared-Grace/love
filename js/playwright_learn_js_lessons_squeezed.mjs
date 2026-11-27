import { app_learn_js_lesson_ids_short } from "./app_learn_js_lesson_ids_short.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_learn_js_lessons_squeezed() {
  "every code lesson whose examples screen has two plain paragraphs next to each other in a box whose gap is under two pixels - the box a program card narrowed - so the lessons whose writing runs together can be counted rather than guessed";
  let short = app_learn_js_lesson_ids_short();
  let ids = Object.values(short);
  let squeezed = [];
  let failed = [];
  async function on_page(page) {
    await page.setViewportSize({
      width: 400,
      height: 900,
    });
    function measure() {
      let found = [];
      for (let element of document.querySelectorAll("div")) {
        let gap = parseFloat(getComputedStyle(element).rowGap);
        if (!(gap < 2)) {
          continue;
        }
        let run = 0;
        let best = 0;
        let texts = [];
        for (let child of element.children) {
          let paragraph =
            child.tagName === "DIV" &&
            child.querySelector("div") === null &&
            child.textContent.trim() !== "";
          if (paragraph) {
            run = run + 1;
            let v = child.textContent.slice(0, 40);
            texts.push(v);
          } else {
            run = 0;
          }
          best = Math.max(best, run);
        }
        if (best >= 2) {
          found.push({
            gap,
            texts: texts.slice(0, 3),
          });
        }
      }
      return found;
    }
    for (let id of ids) {
      try {
        await page.goto("about:blank");
        await page.goto(
          "http://localhost:8080/dev/learn_js.html#lesson=" +
            id +
            ",screen=examples",
        );
        await page.waitForLoadState("networkidle");
        let found = await page.evaluate(measure);
        if (found.length > 0) {
          squeezed.push({
            id,
            boxes: found,
          });
        }
      } catch (e) {
        failed.push({
          id,
          error: String(e).slice(0, 100),
        });
      }
    }
  }
  await playwright_test_blank(on_page);
  let r = {
    lessons: ids.length,
    squeezed_count: squeezed.length,
    squeezed,
    failed,
  };
  return r;
}
