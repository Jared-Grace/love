import { playwright_firefox } from "./playwright_firefox.mjs";
export async function app_receipts_convert_browser_check() {
  "Opens the receipts dev page in real headless Firefox over a folder nobody uses, presses the converter button, types in each box, goes back, and hands back what each step showed, with a picture of the converter saved under the ignored folder.";
  "A folder's name only; nothing is added to it, so nothing is sent.";
  let url = "http://localhost:8080/dev/receipts.html#folder=rates_check";
  let launcher = await playwright_firefox();
  let engine = await launcher.launch({
    headless: true,
  });
  let answer = {};
  try {
    let context = await engine.newContext({
      viewport: {
        width: 390,
        height: 800,
      },
    });
    let page = await context.newPage();
    let errors = [];
    function on_error(err) {
      errors.push(err.message);
    }
    page.on("pageerror", on_error);
    await page.goto(url);
    let button = page.getByText("Convert currency");
    await button.waitFor({
      timeout: 60000,
    });
    answer.first_button = await page.locator("button").first().innerText();
    await button.click();
    await page.waitForTimeout(6000);
    let inputs = page.locator("input");
    answer.boxes = await inputs.count();
    answer.body = await page.innerText("body");
    let php = inputs.nth(0);
    let usd = inputs.nth(1);
    await php.pressSequentially("1000");
    answer.php_typed = {
      php: await php.inputValue(),
      usd: await usd.inputValue(),
    };
    await usd.fill("");
    await usd.pressSequentially("10");
    answer.usd_typed = {
      php: await php.inputValue(),
      usd: await usd.inputValue(),
    };
    await usd.fill("");
    answer.usd_emptied = {
      php: await php.inputValue(),
      usd: await usd.inputValue(),
    };
    await usd.pressSequentially("10");
    let picture = "gitignore/app_receipts_convert.png";
    await page.screenshot({
      path: picture,
    });
    answer.picture = picture;
    await page.getByText("Back").first().click();
    await page.waitForTimeout(500);
    answer.after_back = await page.innerText("body");
    answer.errors = errors;
  } catch (e) {
    answer.error = e.message;
  } finally {
    await engine.close();
  }
  return answer;
}
