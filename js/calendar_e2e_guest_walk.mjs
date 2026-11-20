import { modulo } from "./modulo.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
import { playwright_test_blank_device } from "./playwright_test_blank_device.mjs";
export async function calendar_e2e_guest_walk(url) {
  "$plain url";
  "Walks the calendar booking page at url (a host's link, #host=<name>) as new guests do, in a fresh browser each time: on WhatsApp on a desktop (first checking a mistyped number is refused plainly), on Messenger as an iPhone and on WhatsApp as an Android phone. Each gets a code, checks the screen says plainly there is no meeting yet and shows no times, opens the private link and finds the same code waiting, and finds the form again behind Change it; then checks that Host sign in clears the booking screen. Answers {ok, failures, flows}.";
  "Meant for before a release (human: \"this site will need E2E testing to confirm everything still works when releasing new versions\"). It needs a page whose spam check passes in a headless browser - the dev build and the test Worker do; a real Turnstile key will not.";
  "★ IT STOPS AT THE CODE. Since 2026-11-20 a guest proves who they are before any time shows, and only the host can confirm a code - so the times, Book and the limit per guest are not walked here; the server's own handling of them is what a proven guest reaches.";
  "Each walk deletes the guest it made, through the private link's key, so the host's page is left with no E2E Test waiting for a code. A walk stopped before that leaves one, named E2E Test so the host can tell, listed for 7 days.";
  let failures = [];
  let flows = [];
  ("Each run uses its own number and profile link, within 555-0100 to 555-0199, which are set aside for fiction.");
  let left = date_now_milliseconds();
  let run_pair = modulo(left, 50);
  let p = multiply(run_pair, 2);
  let run_number = "+1 904 555 01" + String(p).padStart(2, "0");
  let run_profile = "facebook.com/e2e.test." + run_pair;
  let api_base = url.includes("christarose.org/")
    ? new URL(url).origin + "/calendar/api/"
    : "https://calendar.christarose.workers.dev/calendar/api/";
  async function step_run(flow, name, run) {
    flow.reached = name;
    await run();
  }
  async function page_text_or_empty(page) {
    function lambda11() {
      let r2 = "";
      return r2;
    }
    let shown = await page.innerText("body").catch(lambda11);
    return shown;
  }
  function stopped_push(flow, err, shown) {
    failures.push(
      flow.via +
        ": stopped at " +
        flow.reached +
        " - " +
        err.message.split("\n")[0] +
        " | page: " +
        shown.slice(0, 300) +
        " ... " +
        shown.slice(-300),
    );
  }
  async function form_fill(page, via, contact) {
    "contact is the WhatsApp number, or for Messenger the Facebook profile link. A host taking Messenger asks which app first.";
    let shown = await page.innerText("body");
    if (shown.includes("How do you want to meet?")) {
      let words = equal(via, "messenger")
        ? "Facebook Messenger meeting"
        : "WhatsApp meeting";
      await page
        .getByRole("button", {
          name: words,
          exact: true,
        })
        .click();
    }
    await page.getByPlaceholder("Your name").fill("E2E Test");
    if (equal(via, "messenger")) {
      await page.getByPlaceholder("facebook.com/your.name").fill(contact);
    } else {
      await page.getByPlaceholder("+1 555 123 4567").first().fill(contact);
    }
  }
  async function code_press_until(page, wanted, wait_ms) {
    "The spam check takes a few seconds to pass after the page opens, and Get my code pressed before it only says to wait - so it is pressed again while that is all it says, and any other answer throws, leaving the page as it is for the caller to read.";
    for (let tries = 0; less_than(tries, 20); tries++) {
      await page
        .getByRole("button", {
          name: "Get my code",
          exact: true,
        })
        .click({
          timeout: 10000,
        });
      try {
        await page.getByText(wanted).waitFor({
          timeout: wait_ms,
        });
        return;
      } catch (err) {
        let shown_now = await page.innerText("body");
        let b = shown_now.includes("Wait for the check above to finish.");
        if (not(b)) {
          throw err;
        }
      }
    }
    throw new Error("the spam check never passed");
  }
  async function guest_delete(key) {
    let answer = await fetch(api_base + "delete_me", {
      method: "POST",
      headers: {
        authorization: "Bearer " + key,
        "content-type": "application/json",
      },
      body: "{}",
    });
    let read = await answer.json();
    let r3 = read.ok;
    return r3;
  }
  async function prove_walk(via, device_name) {
    "device_name is a phone from Playwright's device list, walked in the engine that phone runs, or \"desktop\" for a plain desktop Chromium. Guests mostly open the link from a chat on a phone, so phones are walked too (human: \"goal with testing is no issue for other people\").";
    let flow = {
      via: via + " on " + device_name,
      reached: "start",
      code: null,
    };
    flows.push(flow);
    let contact = equal(via, "messenger") ? run_profile : run_number;
    let app_name = equal(via, "messenger") ? "Messenger" : "WhatsApp";
    let key = null;
    async function on_page(page) {
      try {
        await page.goto(url);
        async function lambda_open() {
          await page.getByText("Before you pick a time").waitFor({
            timeout: 30000,
          });
          let shown = await page.innerText("body");
          if (shown.includes("Pick a day of the week")) {
            failures.push(flow.via + ": times show before any code");
          }
        }
        await step_run(flow, "form", lambda_open);
        async function lambda_bad_number() {
          "A guest who mistypes their number must be told so plainly and given no code.";
          await form_fill(page, via, "12");
          await code_press_until(
            page,
            "That WhatsApp number does not look right.",
            3000,
          );
        }
        if (equal(via, "whatsapp") && equal(device_name, "desktop")) {
          await step_run(flow, "bad number", lambda_bad_number);
        }
        async function lambda_code() {
          await form_fill(page, via, contact);
          await code_press_until(page, "No meeting yet", 5000);
        }
        await step_run(flow, "get code", lambda_code);
        async function lambda_screen() {
          let shown = await page.innerText("body");
          let code = shown.match(/PRAY-[A-Z0-9]{4}/);
          flow.code = code ? code[0] : null;
          let wanted = [
            "⚠️ No meeting yet. You cannot pick a time yet.",
            "1. Send me this code on " + app_name,
            "Send code on " + app_name,
            "Copy code",
            "2. I will message you back on " + app_name,
            "3. Then open this page again and pick a time.",
            "Copy link",
          ];
          for (let words of wanted) {
            let b2 = shown.includes(words);
            if (not(b2)) {
              failures.push(flow.via + ': code screen missing "' + words + '"');
            }
          }
          if (equal(code, null)) {
            failures.push(flow.via + ": code screen has no PRAY- code");
          }
          for (let words of [
            "Pick a day of the week",
            "Booked",
            "Get my code",
          ]) {
            if (shown.includes(words)) {
              failures.push(
                flow.via + ': code screen still shows "' + words + '"',
              );
            }
          }
        }
        await step_run(flow, "code screen", lambda_screen);
        let link = null;
        async function lambda_link() {
          link = await page
            .locator("a[href*='key=']")
            .first()
            .getAttribute("href", {
              timeout: 10000,
            });
          let v = link.split("#")[1].replaceAll(",", "&");
          key = new URLSearchParams(v).get("key");
        }
        await step_run(flow, "private link", lambda_link);
        async function lambda_back() {
          "The private link differs from the booking page only after the #, and going to such a link never reloads the page - so it is reloaded.";
          await page.goto(link);
          await page.reload();
          await page.getByText("No meeting yet").waitFor({
            timeout: 30000,
          });
          let shown = await page.innerText("body");
          if (flow.code && not(shown.includes(flow.code))) {
            failures.push(
              flow.via + ": the private link shows a different code",
            );
          }
        }
        await step_run(flow, "back with link", lambda_back);
        async function lambda_change() {
          let words = equal(via, "messenger")
            ? "Wrong profile link? Change it"
            : "Wrong number? Change it";
          await page
            .getByRole("button", {
              name: words,
              exact: true,
            })
            .click({
              timeout: 10000,
            });
          await page
            .getByRole("button", {
              name: "Get my code",
              exact: true,
            })
            .waitFor({
              timeout: 30000,
            });
        }
        await step_run(flow, "change it", lambda_change);
        flow.reached = "done";
      } catch (err) {
        let shown = await page_text_or_empty(page);
        stopped_push(flow, err, shown);
      }
    }
    if (equal(device_name, "desktop")) {
      await playwright_test_blank(on_page);
    } else {
      await playwright_test_blank_device(device_name, on_page);
    }
    if (key) {
      function lambda() {
        return false;
      }
      let deleted = await guest_delete(key).catch(lambda);
      if (not(deleted)) {
        failures.push(
          flow.via +
            ": the E2E Test guest could not be deleted, so the host sees it waiting",
        );
      }
    }
  }
  await prove_walk("whatsapp", "desktop");
  await prove_walk("messenger", "iPhone 13");
  await prove_walk("whatsapp", "Pixel 7");
  async function host_walk(page) {
    let flow = {
      via: "host sign in",
      reached: "start",
      code: null,
    };
    flows.push(flow);
    try {
      await page.goto(url);
      await page.getByText("Before you pick a time").waitFor({
        timeout: 30000,
      });
      flow.reached = "press";
      await page
        .getByRole("button", {
          name: "Host sign in",
          exact: true,
        })
        .click();
      await page.waitForTimeout(3000);
      let shown = await page.innerText("body");
      if (shown.includes("Book a meeting with")) {
        failures.push("host sign in: the booking screen still shows");
      }
      flow.reached = "done";
    } catch (err) {
      failures.push(
        "host sign in: stopped at " +
          flow.reached +
          " - " +
          err.message.split("\n")[0],
      );
    }
  }
  await playwright_test_blank(host_walk);
  let r = {
    ok: equal(failures.length, 0),
    failures,
    flows,
  };
  return r;
}
