import { url_opened_unasked_assert } from "./url_opened_unasked_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_texts_click_words_count(
  url,
  texts,
  words,
) {
  "$plain url";
  "$plain texts";
  "$plain words";
  "Opens a page, presses the first thing showing each of the texts in turn, and says how many times each of the words appears on the page after the last press - texts and words are each one comma-joined word, as every list handed over a command line is.";
  "★ ONLY THE COUNTS COME BACK, NEVER THE PAGE. It exists to check a page that may hold private words without whoever asks ever reading them: asked whether a hidden thing is gone, the answer is a number, and a number carries none of what it counted.";
  url_opened_unasked_assert(url);
  let wait_ms = 1000;
  let counts = {};
  async function on_page(page) {
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    for (let text of text_split_comma(texts)) {
      await page.getByText(text).first().click();
      await page.waitForTimeout(wait_ms);
    }
    let shown = await page.innerText("body");
    for (let word of text_split_comma(words)) {
      counts[word] = shown.split(word).length - 1;
    }
  }
  await playwright_test_blank(on_page);
  return counts;
}
