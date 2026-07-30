import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_firefox } from "./playwright_firefox.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function playwright_url_firefox_console(url) {
  arguments_assert(arguments, 1);
  ("load one address in a real headless Firefox and hand back every uncaught error, every console line, and the text the page ended up showing - so a fault that only appears in that engine can be READ here instead of guessed at from the outside");
  ("The three together are what make it a diagnosis rather than a hint: the errors say what broke, the console lines say how far the page got before it broke, and the visible text says whether anything the reader was promised actually arrived. Any one of them alone leaves the same question open.");
  let launcher = await playwright_firefox();
  let engine = await launcher.launch({
    headless: true,
  });
  let lines = [];
  let shown = "";
  try {
    let page = await engine.newPage();
    function error_each(err) {
      let line = text_combine_multiple(["uncaught  ", err.message]);
      list_add(lines, line);
    }
    page.on("pageerror", error_each);
    function console_each(message) {
      let v = message.type();
      let v2 = message.text();
      let line = text_combine_multiple([v, "  ", v2]);
      list_add(lines, line);
    }
    page.on("console", console_each);
    await page.goto(url);
    await page.waitForTimeout(8000);
    shown = await page.innerText("body");
  } finally {
    await engine.close();
  }
  let told = {
    url,
    lines,
    shown,
  };
  return told;
}
