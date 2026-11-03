import { app_receipts_purchases_database_name } from "./app_receipts_purchases_database_name.mjs";
import { app_receipts_purchases_store } from "./app_receipts_purchases_store.mjs";
import { json_to } from "./json_to.mjs";
import { playwright_firefox } from "./playwright_firefox.mjs";
export async function app_receipts_rates_browser_check() {
  "Opens the receipts dev page in real headless Firefox over a folder nobody uses, with purchases from three months placed in the browser's own store, and hands back what happened: which rate requests went out and in what order, and what the lines said before and after the rates came.";
  "Four visits, each answering one question. A new phone with the rate service slowed by three seconds: does the list draw first? A second new phone: does it read the finished months from the store and ask the service only for the running month? That phone again: does it ask nothing about months? A third new phone with the rate service failing: does it stop after the first month?";
  "Nothing is sent to the folder, because purchases placed in the store directly are never marked as waiting to send. A finished month it asks for really is kept in the shared store, which is what the first phone anywhere would do.";
  let folder = "rates_check";
  let url = "http://localhost:8080/dev/receipts.html#" + folder;
  let database = app_receipts_purchases_database_name();
  let store = app_receipts_purchases_store();
  function purchase_make(key, date) {
    let r = {
      key,
      folder_code: folder,
      date,
      time: "12:00",
      price: "1000",
      description: "",
      notes: "",
      color: "blue",
      payment: "credit",
      photos: [],
    };
    return r;
  }
  let v = purchase_make("rates_check_a", "2026-11-02");
  let v2 = purchase_make("rates_check_b", "2026-10-15");
  let v3 = purchase_make("rates_check_c", "2026-08-15");
  let purchases = [v, v2, v3];
  let seed =
    "new Promise(function (resolve, reject) {" +
    " let open = indexedDB.open(" +
    json_to(database) +
    ");" +
    " open.onerror = function () { reject(open.error); };" +
    " open.onsuccess = function () {" +
    " let tx = open.result.transaction(" +
    json_to(store) +
    ", 'readwrite');" +
    " let s = tx.objectStore(" +
    json_to(store) +
    ");" +
    " for (let p of " +
    json_to(purchases) +
    ") { if (s.keyPath) { s.put(p); } else { s.put(p, p.key); } }" +
    " tx.oncomplete = function () { resolve(true); };" +
    " tx.onerror = function () { reject(tx.error); };" +
    " }; })";
  let launcher = await playwright_firefox();
  let engine = await launcher.launch({
    headless: true,
  });
  async function visit_new(on_route) {
    let context = await engine.newContext();
    let page = await context.newPage();
    let errors = [];
    let asked = [];
    function on_error(err) {
      errors.push(err.message);
    }
    page.on("pageerror", on_error);
    async function on_response(response) {
      let address = response.url();
      if (
        address.includes("frankfurter") ||
        address.includes("currency_rate")
      ) {
        asked.push(
          response.request().method() +
            " " +
            response.status() +
            " " +
            address.slice(0, 150),
        );
      }
    }
    page.on("response", on_response);
    function on_failed(request) {
      let address = request.url();
      if (address.includes("frankfurter")) {
        asked.push("failed " + address.slice(0, 150));
      }
    }
    page.on("requestfailed", on_failed);
    await page.goto(url);
    await page.waitForTimeout(4000);
    await page.evaluate(seed);
    if (on_route !== null) {
      await page.route("**/api.frankfurter.dev/**", on_route);
    }
    asked.length = 0;
    let r2 = {
      page,
      errors,
      asked,
      context,
    };
    return r2;
  }
  async function reload_read(visit, wait) {
    let began = Date.now();
    await visit.page.reload();
    await visit.page.getByText("₱").first().waitFor({
      timeout: 60000,
    });
    let first_ms = Date.now() - began;
    let first = await visit.page.innerText("body");
    await visit.page.waitForTimeout(wait);
    let after = await visit.page.innerText("body");
    let r3 = {
      first_ms,
      first,
      after,
      asked: [...visit.asked],
      errors: [...visit.errors],
    };
    return r3;
  }
  async function delay(route) {
    await new Promise(function delay_wait(resolve) {
      setTimeout(resolve, 3000);
    });
    await route.continue();
  }
  async function fail(route) {
    await route.abort();
  }
  let answer = {};
  try {
    let slow = await visit_new(delay);
    answer.slow = await reload_read(slow, 15000);
    await slow.page.getByText("₱").first().click();
    await slow.page.waitForTimeout(1000);
    answer.slow_card = await slow.page.innerText("body");
    await slow.context.close();
    let second = await visit_new(null);
    answer.second = await reload_read(second, 10000);
    second.asked.length = 0;
    answer.second_again = await reload_read(second, 6000);
    await second.context.close();
    let failing = await visit_new(fail);
    answer.failing = await reload_read(failing, 40000);
    await failing.context.close();
  } finally {
    await engine.close();
  }
  return answer;
}
