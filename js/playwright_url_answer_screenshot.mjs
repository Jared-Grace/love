import { number_from_text } from "./number_from_text.mjs";
import { playwright_happy_answer_wait } from "./playwright_happy_answer_wait.mjs";
import { playwright_quiz_correct_count } from "./playwright_quiz_correct_count.mjs";
import { playwright_happy_answer_selector } from "./playwright_happy_answer_selector.mjs";
import { playwright_happy_step } from "./playwright_happy_step.mjs";
import { property_get } from "./property_get.mjs";
import { playwright_happy_answered_wait } from "./playwright_happy_answered_wait.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_answer_screenshot(
  url,
  f_path,
  width,
  height,
) {
  "$plain url";
  "$plain f_path";
  "$plain width";
  "$plain height";
  "Opens a quiz page at a window of the size asked for, answers its question right by pressing the controls the page marks as right, and saves a picture of the screen the moment the answer is taken - the success showing - along with how wide the page became.";
  "It exists for faults that only appear after answering. A picture of a page as it opens never shows them, because nothing on that screen has been pressed yet.";
  "The width travels out as numbers as well as a picture: a page wider than its window scrolls sideways, and the widest thing sticking out is named, and so is every element that sticks out of a parent that does not - the place the overflow starts - so the fault can be found without reading the picture.";
  let presses_max = 40;
  let wait_ms = 2000;
  let result = null;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: number_from_text(height),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await playwright_happy_answer_wait(page, wait_ms);
    let count_before = await playwright_quiz_correct_count(page);
    let selector = playwright_happy_answer_selector();
    let presses = 0;
    let count = count_before;
    while (count === count_before && presses < presses_max) {
      let step = await playwright_happy_step(page, selector);
      let none = property_get(step, "none");
      if (none) {
        break;
      }
      presses = presses + 1;
      let url_before = page.url();
      count = await playwright_happy_answered_wait(
        page,
        count_before,
        url_before,
        wait_ms,
      );
    }
    let options = {
      path: f_path,
      fullPage: true,
    };
    await page.screenshot(options);
    function measure() {
      let view = document.documentElement.clientWidth;
      let widest = null;
      let widest_right = view;
      for (let el of document.body.querySelectorAll("*")) {
        let right = el.getBoundingClientRect().right;
        if (right > widest_right) {
          widest_right = right;
          widest = el.tagName + " " + (el.textContent || "").slice(0, 60);
        }
      }
      let sticking_out = [];
      for (let el of document.body.querySelectorAll("*")) {
        let box = el.getBoundingClientRect();
        let parent_box = el.parentElement.getBoundingClientRect();
        let parent_inside = parent_box.right <= view;
        if (box.right > view && parent_inside) {
          let style = getComputedStyle(el);
          sticking_out.push({
            tag: el.tagName,
            text: (el.textContent || "").slice(0, 40),
            left: box.left,
            width: box.width,
            white_space: style.whiteSpace,
            display: style.display,
            visibility: style.visibility,
            position: style.position,
          });
        }
      }
      let r = {
        scroll_width: document.documentElement.scrollWidth,
        view,
        widest,
        widest_right,
        sticking_out,
      };
      return r;
    }
    let measured = await page.evaluate(measure);
    result = {
      presses,
      answered: count !== count_before,
      measured,
    };
  }
  await playwright_test_blank(on_page);
  return result;
}
