import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_calendar } from "./app_calendar.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_choice_row } from "./app_shared_choice_row.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
import { calendar_turnstile_widget } from "./calendar_turnstile_widget.mjs";
import { app_shared_problem_mark } from "./app_shared_problem_mark.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { html_loading } from "./html_loading.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export async function app_calendar_guest_proof_form(
  card,
  slug,
  host,
  key,
  on_key,
  on_started,
  via_fixed,
) {
  arguments_assert(arguments, 7);
  ("via_fixed is the app this code is for, when the guest is already proven on an app and so has chosen already - asking to meet on the other one, or changing the number or link of this one; null asks which. With it set there is no choice to make, and the button says which code it gets and that a time comes after (human, 2026-11-24: \"Then there doesn't need to be a choice which to meet? or if they haven't confirmed anything then they need choice?\").");
  ("The first thing a new guest sees on a host's link: which app to send a code from, WhatsApp or Messenger, and a Get my code button. No time is picked here; the code they get is sent to the host from that app, and only once the host has seen it arrive can they pick a time.");
  ('★ PROVE FIRST, THEN BOOK (human, 2026-11-20: "100% knowing their FB url/wa# so they don\'t book, enter something wrong, expect me to show up"). Many guests do not read English well, so the words are short and the screen asks for one thing: the code.');
  ("key is the guest's session key, or null; a first code answers a new key, handed to on_key. on_started is called once the code is made, to draw the page again.");
  ("The app the guest picked last time on this device is picked again.");
  let b4 = equal(via_fixed, null);
  let intro_first = not(b4)
    ? "Before you pick a time, send me a code from your " +
      (equal(via_fixed, "messenger") ? "Facebook Messenger" : "WhatsApp") +
      ". Then I know I can reach you."
    : host.messenger
      ? "Before you pick a time, send me a code from your WhatsApp or Facebook Messenger. Then I know I can reach you."
      : "Before you pick a time, send me a code from your WhatsApp. Then I know I can reach you.";
  let intro = html_div_text(card, intro_first);
  html_style_assign(intro, {
    "font-weight": "bold",
  });
  ("marked is the problem now ringed in red, or null - declared above every button, since a press can land while the spam check below is still loading.");
  let marked = null;
  let via_area = app_shared_field(card);
  ('NO NAME IS ASKED (human, 2026-11-24: "FB name could be to find the profile by name - goal is collect less info to have less PIN or PII"): the number or profile link already reaches the guest, and the app shows their name when the code arrives, so a name would be personal data stored for nothing. The host\'s lists show the contact instead.');
  ('★ NO WHATSAPP NUMBER IS ASKED (human, 2026-11-27: "Do they need to enter their wa#? I receive their wa# with the code from whatever # they\'re logged into"): the number the code arrives from is the one proven, typed by the host on Confirm, so a typed number could only disagree with it.');
  ('★ NO PROFILE LINK IS ASKED EITHER (human, 2026-11-28, chose "Treat Messenger the same as WhatsApp" over keeping the typed link): the host pastes the profile the code came from on Confirm. So the form asks only which app, when there is a choice.');
  let via = host.messenger ? null : "whatsapp";
  let last = storage_local_get(app_calendar, "guest_details");
  if (last) {
    if (host.messenger) {
      via = last.via;
    }
  }
  let b5 = equal(via_fixed, null);
  if (not(b5)) {
    via = via_fixed;
  }
  function via_draw() {
    html_clear(via_area);
    if (not(host.messenger)) {
      return;
    }
    let b6 = equal(via_fixed, null);
    if (not(b6)) {
      return;
    }
    ('MARKED THE SHARED WAY (human, 2026-11-21: "DRY with buttons that are like radio buttons?"): the host\'s invite card asks the same question, so both draw it with one row.');
    ("CONFIRMING, NOT YET CHOOSING A MEETING (human, 2026-11-24: \"they shouldn't choose how to meet yet they're just confirming\"): this row picks only which app the code is sent from, so it is asked that way. Read as words, not as dropping the row: the code still has to come from one app. The other reading - no row at all, both fields asked, a code per field filled - was not built.");
    let choices = [
      {
        key: "whatsapp",
        text: "WhatsApp",
      },
      {
        key: "messenger",
        text: "Facebook Messenger",
      },
    ];
    app_shared_choice_row(
      via_area,
      "Send your code from:",
      choices,
      via,
      choice_pick,
    );
  }
  function choice_pick(value) {
    via = value;
    problems_recheck();
    intro_set();
    via_draw();
    button_refresh();
  }
  function code_text() {
    'The button names the code it gets and that the time is picked only after the host confirms it, so pressing it is not read as booking (human, 2026-11-24: "should say \\"get my Messenger code and wait for confirmation before scheduling\\"").';
    if (equal(via, null)) {
      let r7 = "Get your code";
      return r7;
    }
    ('ONE VOICE: "your" (human, 2026-11-26, asked "Should first/second person be consistent?" after "Your meetings" over "Cancel my meeting", and chose "your"): the page is the host speaking to the guest, buttons included.');
    let r6 =
      "Get your " +
      (equal(via, "messenger") ? "Messenger" : "WhatsApp") +
      " code and wait for confirmation before scheduling";
    return r6;
  }
  function intro_set() {
    'MESSENGER, IN THE HOST\'S OWN WORDS (human, 2026-11-25: "First provide a link to your profile. Then I will confirm the link works. After you wait for confirmation, then if God wills you can schedule a meeting."). Set again whenever the app changes. WhatsApp says the same three steps for a number, so both apps read alike (human, 2026-11-25, chose "matching WhatsApp words"). With no app picked yet, the older words stay, as they name both apps.';
    if (equal(via, "messenger")) {
      html_text_content_set(
        intro,
        "First send me a code from your Facebook Messenger. Then I will confirm I got it. After you wait for confirmation, then if God wills you can schedule a meeting.",
      );
      return;
    }
    if (equal(via, "whatsapp")) {
      html_text_content_set(
        intro,
        "First send me a code from your WhatsApp. Then I will confirm I got it. After you wait for confirmation, then if God wills you can schedule a meeting.",
      );
      return;
    }
    html_text_content_set(intro, intro_first);
  }
  intro_set();
  via_draw();
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  ('THE BUTTON WAITS FOR THE CHECK (human, 2026-11-26: "while cloudflare is verifying ... should the green button be disabled" ... "Waiting for Cloudflare check..."): faded and naming what it waits for, so a press before the check passes is not met by a small line under it. Named after Cloudflare, whose name the box above shows. code_button is null until drawn, below the check, since the check may answer before then.');
  let check_ready = false;
  let code_button = null;
  function button_refresh() {
    if (equal(code_button, null)) {
      return;
    }
    let words = check_ready ? code_text() : "Waiting for Cloudflare check…";
    html_text_content_set(code_button, words);
    let disabled = not(check_ready);
    app_shared_button_disabled_set(code_button, disabled);
  }
  function check_ready_set(ready) {
    check_ready = ready;
    button_refresh();
  }
  let check = await calendar_turnstile_widget(card, check_ready_set);
  let status = html_div_text(card, "");
  function form_problem() {
    if (equal(via, null)) {
      let r = {
        field: via_area,
        words: "Pick WhatsApp or Messenger first.",
      };
      return r;
    }
    return null;
  }
  function problem_show(problem) {
    problem_clear();
    marked = problem;
    app_shared_problem_mark(problem.field, true);
    html_text_content_set(status, problem.words);
    html_style_assign(status, {
      color: app_shared_color_red(),
    });
    html_style_assign(code_button, {
      border: "4px solid " + app_shared_color_red(),
    });
    html_component_element_get(problem.field).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  function problem_clear() {
    if (equal(marked, null)) {
      return;
    }
    app_shared_problem_mark(marked.field, false);
    marked = null;
    html_text_content_set(status, "");
    html_style_assign(status, {
      color: "",
    });
    html_style_assign(code_button, {
      border: "",
    });
  }
  function problems_recheck() {
    if (equal(marked, null)) {
      return;
    }
    let problem = form_problem();
    if (equal(problem, null) || not(equal(problem.words, marked.words))) {
      problem_clear();
    }
  }
  async function code_get() {
    let problem = form_problem();
    let b = equal(problem, null);
    if (not(b)) {
      problem_show(problem);
      return;
    }
    problem_clear();
    let token = check.token();
    if (equal(token, "")) {
      html_text_content_set(status, "Wait for the check above to finish.");
      return;
    }
    let prove_body = {
      turnstile: token,
      host: slug,
      name: "",
      timezone: zone,
      via,
    };
    async function prove_send() {
      let r5 = await calendar_api_call("POST", "prove", prove_body, key);
      return r5;
    }
    let started = await html_loading(prove_send);
    check.reset();
    if (not(started.body.ok)) {
      let words = {
        messenger:
          "This host does not take Messenger calls now. Pick WhatsApp.",
        timezone: "Your time zone could not be read. Try another browser.",
        rate: "Too many tries. Wait a minute and try again.",
        turnstile: "The check failed. Try again.",
        network: "No connection. Try again.",
      };
      let text = property_get_or(
        words,
        started.body.reason,
        "Could not get a code. Try again.",
      );
      html_text_content_set(status, text);
      html_style_assign(status, {
        color: app_shared_color_red(),
      });
      return;
    }
    storage_local_set(app_calendar, "guest_details", {
      via,
    });
    if (started.body.key) {
      on_key(started.body.key);
    }
    await on_started();
  }
  let text2 = code_text();
  code_button = app_shared_button_green(card, text2, code_get);
  button_refresh();
}
