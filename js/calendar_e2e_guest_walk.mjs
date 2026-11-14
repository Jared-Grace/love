import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
import { playwright_test_blank_device } from "./playwright_test_blank_device.mjs";
export async function calendar_e2e_guest_walk(url) {
  "$plain url";
  "Walks the calendar booking page at url (a host's link, #host=<name>) as guests do, in a fresh browser each time: books on WhatsApp on a desktop (first checking a mistyped number is refused plainly), on Messenger as an iPhone and on WhatsApp as an Android phone; checks the numbered steps after booking, opens the private link, cancels, and checks the freed day can be picked again; then checks the host's limit per guest, and that Host sign in clears the booking screen. Answers {ok, failures, flows}.";
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
  async function step_run(flow, name, run) {
    flow.reached = name;
    await run();
  }
  async function time_pick(page, flow, via) {
    "Chooses the app, then the first open weekday, date and time; answers the weekday picked.";
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
    await step_run(flow, "choice", lambda);
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
    await step_run(flow, "weekday", lambda2);
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
    await step_run(flow, "date", lambda3);
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
    await step_run(flow, "time", lambda4);
    return picked_weekday;
  }
  async function form_fill(page, via, contact) {
    "contact is the WhatsApp number, or for Messenger the Facebook profile link.";
    await page.getByPlaceholder("Your name").fill("E2E Test");
    if (equal(via, "messenger")) {
      await page.getByPlaceholder("facebook.com/your.name").fill(contact);
    } else {
      await page.getByPlaceholder("+1 555 123 4567").first().fill(contact);
    }
  }
  async function book_press_until(page, wanted, wait_ms) {
    "The spam check takes a few seconds to pass after the page opens, and Book pressed before it only says to wait - so Book is pressed again while that is all it says, and any other answer throws, leaving the page as it is for the caller to read.";
    for (let tries = 0; less_than(tries, 20); tries++) {
      await page
        .getByRole("button", {
          name: "Book",
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
        let waiting = shown_now.includes("Wait for the check above to finish.");
        if (not(waiting)) {
          throw err;
        }
      }
    }
    throw new Error("the spam check never passed");
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
        shown.slice(0, 300),
    );
  }
  async function book_walk(via, device_name) {
    "device_name is a phone from Playwright's device list, walked in the engine that phone runs, or \"desktop\" for a plain desktop Chromium. Guests mostly open the link from a chat on a phone, so phones are walked too (human: \"goal with testing is no issue for other people\").";
    let flow = {
      via: via + " on " + device_name,
      reached: "start",
      code: null,
    };
    flows.push(flow);
    let contact = equal(via, "messenger")
      ? "facebook.com/e2e.test"
      : "+1 904 555 0100";
    async function on_page(page) {
      try {
        await page.goto(url);
        let picked_weekday = await time_pick(page, flow, via);
        async function lambda_bad_number() {
          "A guest who mistypes their number must be told so plainly and must not end up booked. Book is pressed again while the spam check is still finishing, as for a real booking.";
          await form_fill(page, via, "12");
          try {
            await book_press_until(
              page,
              "That WhatsApp number does not look right.",
              3000,
            );
          } catch (err) {
            let shown_now = await page.innerText("body");
            if (shown_now.includes("Next steps:")) {
              failures.push(
                flow.via + ": a two digit WhatsApp number was booked",
              );
            }
            throw err;
          }
        }
        if (equal(via, "whatsapp") && equal(device_name, "desktop")) {
          await step_run(flow, "bad number", lambda_bad_number);
        }
        async function lambda5() {
          await form_fill(page, via, contact);
        }
        await step_run(flow, "form", lambda5);
        async function lambda6() {
          await book_press_until(page, "Next steps:", 5000);
        }
        await step_run(flow, "book", lambda6);
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
              failures.push(
                flow.via + ': after booking, missing "' + words + '"',
              );
            }
          }
          if (equal(code, null)) {
            failures.push(flow.via + ": after booking, no PRAY- code");
          }
          if (shown.includes("Book a meeting with")) {
            failures.push(
              flow.via + ": the booking form still shows after booking",
            );
          }
        }
        await step_run(flow, "steps screen", lambda7);
        let link = null;
        async function lambda8() {
          link = await page
            .locator("a[href*='key=']")
            .first()
            .getAttribute("href", {
              timeout: 10000,
            });
        }
        await step_run(flow, "private link", lambda8);
        async function lambda9() {
          "The private link differs from the booking page only after the #, and going to such a link never reloads the page - so it is reloaded, or the walk waits on a page that never changed.";
          flow.link = link;
          await page.goto(link);
          await page.reload();
          await page
            .getByRole("button", {
              name: "Cancel",
              exact: true,
            })
            .first()
            .click({
              timeout: 30000,
            });
          ("A guest left with no meetings sees no list at all, so the cancel is done when the list's heading has gone.");
          await page
            .getByText("Your meetings", {
              exact: true,
            })
            .waitFor({
              state: "detached",
              timeout: 30000,
            });
        }
        await step_run(flow, "cancel", lambda9);
        async function lambda10() {
          let button = page.getByRole("button", {
            name: picked_weekday,
            exact: true,
          });
          await button.first().waitFor({
            timeout: 30000,
          });
        }
        await step_run(flow, "freed day", lambda10);
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
  }
  await book_walk("whatsapp", "desktop");
  await book_walk("messenger", "iPhone 13");
  await book_walk("whatsapp", "Pixel 7");
  async function limit_walk(page) {
    "The host's limit per guest (human: \"so that you only see existing meeting, and you can cancel to schedule a new one\"): one guest books until the page says they hold the most allowed and shows no hours; then a second browser with no private link but the same number is refused at Book, since the number alone must count; then the first cancels every meeting and the hours come back.";
    "It books at most 3 times, so it needs the host's limit at 3 or less; the limit starts at 2. It uses its own number, so a booking a stopped walk left behind under the other flows' number does not count against it.";
    let flow = {
      via: "limit per guest",
      reached: "start",
      code: null,
    };
    flows.push(flow);
    let contact = "+1 904 555 0101";
    let full_words =
      "the most allowed. To book another time, cancel one first.";
    try {
      await page.goto(url);
      let full = false;
      for (let booked = 0; less_than(booked, 3) && not(full); booked++) {
        await time_pick(page, flow, "whatsapp");
        async function lambda12() {
          await form_fill(page, "whatsapp", contact);
          await book_press_until(page, "Next steps:", 5000);
        }
        await step_run(flow, "book " + (booked + 1), lambda12);
        async function lambda13() {
          "The page is opened again, as a guest coming back with their private link kept on this device. The booking page differs from where it is only after the #, so it is reloaded.";
          await page.goto(url);
          await page.reload();
          await page.getByText("Book a meeting with").waitFor({
            timeout: 30000,
          });
          await page.waitForTimeout(2000);
          let shown = await page.innerText("body");
          full = shown.includes(full_words);
        }
        await step_run(flow, "back " + (booked + 1), lambda13);
      }
      if (not(full)) {
        throw new Error(
          "3 bookings and the page never said the limit was reached",
        );
      }
      async function lambda14() {
        let shown = await page.innerText("body");
        if (shown.includes("How do you want to meet?")) {
          failures.push(flow.via + ": open hours still show at the limit");
        }
      }
      await step_run(flow, "full screen", lambda14);
      async function same_number(page2) {
        try {
          await page2.goto(url);
          await time_pick(page2, flow, "whatsapp");
          await form_fill(page2, "whatsapp", contact);
          await book_press_until(
            page2,
            "You already have the most upcoming meetings this host allows.",
            5000,
          );
        } catch (err) {
          let shown = await page_text_or_empty(page2);
          failures.push(
            flow.via +
              ": the same number from a new browser was not refused - " +
              err.message.split("\n")[0] +
              " | page: " +
              shown.slice(0, 300),
          );
        }
      }
      flow.reached = "same number";
      await playwright_test_blank(same_number);
      async function lambda15() {
        "Every meeting this guest holds is cancelled, one at a time; each cancel draws the list again.";
        let cancel = page.getByRole("button", {
          name: "Cancel",
          exact: true,
        });
        for (let tries = 0; less_than(tries, 5); tries++) {
          let count = await cancel.count();
          if (equal(count, 0)) {
            return;
          }
          await cancel.first().click();
          ("Waited on from node, not with a function sent into the page, because the repo's own rewriting turns === into a call the page does not have.");
          let now = count;
          for (
            let waits = 0;
            less_than(waits, 60) && equal(now, count);
            waits++
          ) {
            await page.waitForTimeout(500);
            now = await cancel.count();
          }
          if (equal(now, count)) {
            throw new Error("a cancel did not remove its meeting");
          }
        }
        throw new Error("meetings still left after 5 cancels");
      }
      await step_run(flow, "cancel all", lambda15);
      async function lambda16() {
        await page.getByText("How do you want to meet?").waitFor({
          timeout: 30000,
        });
      }
      await step_run(flow, "hours back", lambda16);
      flow.reached = "done";
    } catch (err) {
      let shown = await page_text_or_empty(page);
      stopped_push(flow, err, shown);
    }
  }
  await playwright_test_blank(limit_walk);
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
