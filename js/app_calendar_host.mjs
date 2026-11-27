import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { html_clear } from "./html_clear.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { calendar_host_openings_current } from "./calendar_host_openings_current.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { calendar_page_url } from "./calendar_page_url.mjs";
import { app_calendar_host_about } from "./app_calendar_host_about.mjs";
import { app_calendar_host_hours } from "./app_calendar_host_hours.mjs";
import { app_calendar_host_rules } from "./app_calendar_host_rules.mjs";
import { app_calendar_host_share } from "./app_calendar_host_share.mjs";
import { calendar_host_link } from "./calendar_host_link.mjs";
import { app_calendar_meetings } from "./app_calendar_meetings.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_steps } from "./app_shared_steps.mjs";
export async function app_calendar_host(parent, key, signed_out) {
  arguments_assert(arguments, 3);
  ("The host's page, for a signed-in host's session key, as screens in the order a host sets up: About you (name, WhatsApp, link name), Free hours, Rules, then Share. Home lists them all with what each holds, and shows every upcoming meeting below, the ones waiting for a code on top of what to do.");
  ('SCREENS, NEXT, HOME (human, 2026-11-22: "each section is a button/screen", "a next button that goes to the next unfinished screen", "a link would be last?", "you can go home and see everything?", "and jump to any screen?"). About you is finished once the person and the link name are saved, Free hours once any hour is set, Rules once saved even as they start (human, 2026-11-22: "Rules should also be configured? and initially be unconfigured?"); Share has nothing to finish, and stays locked until the other three are finished (human: "share button should be disabled until everything is configured"); Next goes to what is unfinished first, then on in order. signed_out() is called by the Sign out button at the foot of home.');
  ("Answers false when the key is no longer a host session, so the page can sign in again; true once drawn.");
  let read = await calendar_api_call("GET", "settings", {}, key);
  if (not(read.body.ok)) {
    return false;
  }
  ("Whatever stood in parent while the settings were fetched - the page's loading line - goes once they arrive.");
  html_clear(parent);
  let settings = read.body.settings;
  let today = date_today_iso();
  async function refresh() {
    let again = await calendar_api_call("GET", "settings", {}, key);
    if (again.body.ok) {
      settings = again.body.settings;
    }
  }
  function no_link_name() {
    let r = "Save your booking link name in About you first";
    return r;
  }
  function about_done() {
    let r = Boolean(settings.person && settings.host);
    return r;
  }
  function about_summary() {
    let person = settings.person;
    if (not(person)) {
      let r = "Not yet";
      return r;
    }
    let host = settings.host;
    let line = person.name + " · " + person.whatsapp;
    if (host) {
      line = line + " · link name " + host.slug;
    }
    return line;
  }
  function hours_done() {
    let openings = calendar_host_openings_current(settings, today);
    let r = greater_than(openings.length, 0);
    return r;
  }
  function hours_summary() {
    let openings = calendar_host_openings_current(settings, today);
    let minutes = 0;
    for (let opening of openings) {
      minutes = subtract(minutes + opening.end_minute, opening.start_minute);
    }
    if (equal(minutes, 0)) {
      let r = "No hours yet";
      return r;
    }
    let hours = divide(minutes, 60);
    let r2 = hours + (equal(hours, 1) ? " hour" : " hours") + " a week";
    return r2;
  }
  function never_unfinished() {
    return null;
  }
  function rules_done() {
    let host = settings.host;
    let r = Boolean(host && host.rules_saved_at);
    return r;
  }
  function never_locked() {
    return false;
  }
  function share_locked() {
    let r = not(about_done() && hours_done() && rules_done());
    return r;
  }
  function rules_summary() {
    let host = settings.host;
    if (not(host)) {
      let r = no_link_name();
      return r;
    }
    if (not(host.rules_saved_at)) {
      let r3 = "Not yet - look them over and press Save rules";
      return r3;
    }
    let parts = [
      host.messenger ? "WhatsApp and Messenger" : "WhatsApp only",
      equal(host.max_per_day, null)
        ? "no daily limit"
        : "at most " + host.max_per_day + " a day",
      equal(host.max_per_guest, null)
        ? "no limit per guest"
        : "at most " + host.max_per_guest + " per guest",
    ];
    let r2 = parts.join(" · ");
    return r2;
  }
  function share_summary() {
    if (share_locked()) {
      let r2 = "Finish the screens above first";
      return r2;
    }
    let host = settings.host;
    let r = host ? calendar_page_url() + "#host=" + host.slug : no_link_name();
    return r;
  }
  let steps = [
    {
      key: "about",
      title: "About you",
      done: about_done,
      locked: never_locked,
      summary: about_summary,
      draw: function lambda(area) {
        let r3 = app_calendar_host_about(area, key, settings);
        return r3;
      },
    },
    {
      key: "hours",
      title: "Free hours",
      done: hours_done,
      locked: never_locked,
      summary: hours_summary,
      draw: function lambda2(area) {
        let r4 = app_calendar_host_hours(area, key, settings);
        return r4;
      },
    },
    {
      key: "rules",
      title: "Rules",
      done: rules_done,
      locked: never_locked,
      summary: rules_summary,
      draw: function lambda3(area) {
        let r5 = app_calendar_host_rules(area, key, settings);
        return r5;
      },
    },
    {
      key: "share",
      title: "Share",
      done: never_unfinished,
      locked: share_locked,
      summary: share_summary,
      draw: function lambda4(area) {
        let r6 = app_calendar_host_share(area, key, settings);
        return r6;
      },
    },
  ];
  async function cancelled() {
    "The host page draws its hours as openings, not as the times left free, so a cancel changes nothing else on it.";
  }
  async function meetings_draw(area) {
    let host_now = settings.host;
    let link = host_now ? calendar_host_link(host_now.slug) : null;
    await app_calendar_meetings(area, key, link, cancelled, true);
    ('Sign out sits at the foot of home (human, 2026-11-22: "Sign out"); signed_out is the page\'s, since the host key is kept by the page.');
    app_shared_button_uncolored(area, "Sign out", signed_out);
  }
  await app_shared_steps(parent, steps, "share", refresh, meetings_draw);
  return true;
}
