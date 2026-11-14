import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function calendar_e2e_guest_walk(url) {
  "$plain url";
  "Walks the calendar booking page at url (a host's link, #host=<name>) as guests do, in a fresh browser each time: books on WhatsApp and books on Messenger, checks the numbered steps after booking, opens the private link, cancels, and checks the freed day can be picked again; then checks Host sign in clears the booking screen. Answers {ok, failures, flows}.";
  "Meant for before a release (human: \"this site will need E2E testing to confirm everything still works when releasing new versions\"). It needs a page whose spam check passes in a headless browser - the dev build and the test Worker do; a real Turnstile key will not.";
  "Each booking is real and is cancelled at once, so it leaves only a cancelled row. A walk stopped part way leaves a booking waiting for its code, which the server drops after 24 hours; it is named E2E Test so the host can tell.";
  "It picks the first open weekday, date and time rather than naming them, because which ones are open changes every day.";
  let failures = [];
  let flows = [];
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  async function book_walk(via) {
    let flow = {
      via,
      reached: "start",
      code: null,
    };
    flows.push(flow);
    async function on_page(page) {
      async function step(name, run) {
        flow.reached = name;
        await run();
      }
      try {
        await page.goto(url);
        async function lambda() {
          await page.getByText("How do you want to meet?").waitFor({
            timeout: 30000,
          });
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
        await step("choice", lambda);
        let picked_weekday = null;
        async function lambda2() {
          for (let weekday of weekdays) {
            let button = page.getByRole("button", {
              name: weekday,
              exact: true,
            });
            let a = await button.count();
            if (greater_than(a, 0)) {
              picked_weekday = weekday;
              await button.first().click();
              return;
            }
          }
          throw new Error("no open weekday");
        }
        await step("weekday", lambda2);
        async function lambda3() {
          await page
            .getByRole("button", {
              name: /^[A-Z][a-z]{2}, [A-Z][a-z]{2} \d{1,2}$/,
            })
            .first()
            .click({
              timeout: 10000,
            });
        }
        await step("date", lambda3);
        async function lambda4() {
          await page
            .getByRole("button", {
              name: /^\d{1,2}:\d{2} (AM|PM)$/,
            })
            .first()
            .click({
              timeout: 10000,
            });
          await page.getByText("Chosen:").waitFor({
            timeout: 10000,
          });
        }
        await step("time", lambda4);
        async function lambda5() {
          await page.getByPlaceholder("Your name").fill("E2E Test");
          if (equal(via, "messenger")) {
            await page
              .getByPlaceholder("facebook.com/your.name")
              .fill("facebook.com/e2e.test");
          } else {
            await page
              .getByPlaceholder("+1 555 123 4567")
              .first()
              .fill("+1 904 555 0100");
          }
        }
        await step("form", lambda5);
        async function lambda6() {
          await page
            .getByRole("button", {
              name: "Book",
              exact: true,
            })
            .click();
          await page.getByText("Next steps:").waitFor({
            timeout: 60000,
          });
        }
        await step("book", lambda6);
        let app_name = equal(via, "messenger") ? "Messenger" : "WhatsApp";
        async function lambda7() {
          let shown = await page.innerText("body");
          let code = shown.match(/PRAY-[A-Z0-9]{4}/);
          flow.code = code ? code[0] : null;
          let wanted = [
            "1. Copy this code:",
            "Copy code",
            "2. Send this code to me on " + app_name,
            "Open " + app_name,
            "3. I will send you a confirmation message.",
            "confirmation message from me on " + app_name,
            "4. To change or cancel this meeting",
            "Copy link",
          ];
          for (let words of wanted) {
            let b = shown.includes(words);
            if (not(b)) {
              failures.push(via + ': after booking, missing "' + words + '"');
            }
          }
          if (equal(code, null)) {
            failures.push(via + ": after booking, no PRAY- code");
          }
          if (shown.includes("Book a meeting with")) {
            failures.push(via + ": the booking form still shows after booking");
          }
        }
        await step("steps screen", lambda7);
        let link = null;
        async function lambda8() {
          link = await page
            .locator("a[href*='key=']")
            .first()
            .getAttribute("href", {
              timeout: 10000,
            });
        }
        await step("private link", lambda8);
        async function lambda9() {
          await page.goto(link);
          await page
            .getByRole("button", {
              name: "Cancel",
              exact: true,
            })
            .first()
            .click({
              timeout: 30000,
            });
          await page.getByText("None yet.").waitFor({
            timeout: 30000,
          });
        }
        await step("cancel", lambda9);
        async function lambda10() {
          let button = page.getByRole("button", {
            name: picked_weekday,
            exact: true,
          });
          await button.first().waitFor({
            timeout: 30000,
          });
        }
        await step("freed day", lambda10);
        flow.reached = "done";
      } catch (err) {
        function lambda11() {
          let r2 = "";
          return r2;
        }
        let shown = await page.innerText("body").catch(lambda11);
        failures.push(
          via +
            ": stopped at " +
            flow.reached +
            " - " +
            err.message.split("\n")[0] +
            " | page: " +
            shown.slice(0, 300),
        );
      }
    }
    await playwright_test_blank(on_page);
  }
  await book_walk("whatsapp");
  await book_walk("messenger");
  async function host_walk(page) {
    let flow = {
      via: "host sign in",
      reached: "start",
      code: null,
    };
    flows.push(flow);
    try {
      await page.goto(url);
      await page.getByText("How do you want to meet?").waitFor({
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
