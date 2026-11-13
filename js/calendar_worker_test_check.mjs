import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_worker_test_check() {
  arguments_assert(arguments, 0);
  ("Asks the calendar Worker's workers.dev test address the questions whose answers need no host and leave nothing behind: an unknown host's openings (404), a list without a key (401), the start of Facebook sign-in (302 to Facebook), and 14 quick bookings for a host that does not exist — each passes Turnstile's test secret and is refused as no_host, until the rate limit answers 429.");
  let site = "https://calendar.christarose.workers.dev";
  let free = await fetch(site + "/calendar/api/free?host=nobody");
  let upcoming = await fetch(site + "/calendar/api/upcoming");
  let login = await fetch(site + "/calendar/login/facebook", {
    redirect: "manual",
  });
  let location = login.headers.get("location") ?? "";
  let booking = JSON.stringify({
    turnstile: "XXXX.DUMMY.TOKEN.XXXX",
    host: "nobody",
    name: "T",
    whatsapp: "+1 555 000 0000",
    timezone: "UTC",
    day: "2026-11-20",
    start_minute: 540,
    weekly: false,
  });
  let books = [];
  for (let i = 0; i < 14; i++) {
    let answer = await fetch(site + "/calendar/api/book", {
      method: "POST",
      body: booking,
    });
    let read = await answer.json();
    books.push(answer.status + " " + read.reason);
  }
  let r = {
    free: free.status + " " + (await free.json()).reason,
    upcoming: upcoming.status + " " + (await upcoming.json()).reason,
    login: login.status + " " + location.slice(0, 40),
    login_cookie: (login.headers.get("set-cookie") ?? "").slice(0, 18),
    books,
  };
  return r;
}
