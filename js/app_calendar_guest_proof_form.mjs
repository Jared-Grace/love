import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_calendar } from "./app_calendar.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { app_shared_choice_row } from "./app_shared_choice_row.mjs";
import { calendar_turnstile_widget } from "./calendar_turnstile_widget.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { calendar_profile_url_read } from "./calendar_profile_url_read.mjs";
import { app_shared_problem_mark } from "./app_shared_problem_mark.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
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
  proven_vias,
  via_fixed,
) {
  arguments_assert(arguments, 8);
  ("via_fixed is the app this code is for, when the guest is already proven on an app and so has chosen already - asking to meet on the other one, or changing the number or link of this one; null asks which. With it set there is no choice to make, and the button says which code it gets and that a time comes after (human, 2026-11-24: \"Then there doesn't need to be a choice which to meet? or if they haven't confirmed anything then they need choice?\").");
  ("proven_vias lists the apps this guest is already proven on, whatsapp and/or messenger. The field for one of those is not asked again when the guest picks the other app: it is known and stays proven (human, 2026-11-24: \"if choose meet facebook messenger then they shouldn't be prompted to provide their whatsapp because that's already confirmed?\").");
  ("The first thing a new guest sees on a host's link: how to reach them - WhatsApp or Messenger, the number or profile link - and a Get my code button. No time is picked here; the code they get is sent to the host from that number or profile, and only once the host has seen it arrive can they pick a time.");
  ('★ PROVE FIRST, THEN BOOK (human, 2026-11-20: "100% knowing their FB url/wa# so they don\'t book, enter something wrong, expect me to show up"). Many guests do not read English well, so the words are short and the screen asks for one thing: the code.');
  ("key is the guest's session key, or null; a first code answers a new key, handed to on_key. on_started is called once the code is made, to draw the page again.");
  ("What the guest typed last time on this device fills the form again, so asking again asks for nothing twice.");
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
  let number_box = app_shared_field(card);
  let number_label = html_div_text(number_box, "");
  let whatsapp = html_input_text(number_box, "+1 555 123 4567");
  app_shared_input_style(whatsapp);
  let profile_box = app_shared_field(card);
  let profile_label = html_div_text(profile_box, "");
  let profile = html_input_text(profile_box, "facebook.com/your.name");
  app_shared_input_style(profile);
  let profile_hint = html_div_text(
    profile_box,
    "On Facebook, open your profile, then copy the link from the address bar or from Share.",
  );
  app_shared_text_deemphasized(profile_hint);
  let via = host.messenger ? null : "whatsapp";
  let last = storage_local_get(app_calendar, "guest_details");
  if (last) {
    html_value_set(whatsapp, last.whatsapp);
    html_value_set(profile, last.profile);
    if (host.messenger) {
      via = last.via;
    }
  }
  let b5 = equal(via_fixed, null);
  if (not(b5)) {
    via = via_fixed;
  }
  function field_label_set(label, words, value) {
    let need = equal(via, null)
      ? ""
      : equal(via, value)
        ? " (required)"
        : " (optional)";
    html_text_content_set(label, words + need);
  }
  function via_draw() {
    html_clear(via_area);
    field_label_set(number_label, "Your WhatsApp number", "whatsapp");
    field_label_set(profile_label, "Your Facebook profile link", "messenger");
    function shown_unless_proven(box, value) {
      let b3 = equal(via, value);
      ('With the app already picked on the screen before, the other app\'s box is not asked at all - it would only be optional, and optional personal data is still personal data (human, 2026-11-24: "goal is collect less info").');
      let known =
        not(b3) &&
        not(equal(via, null)) &&
        (list_includes(proven_vias, value) || not(equal(via_fixed, null)));
      html_component_element_get(box).style.display = known ? "none" : "";
    }
    shown_unless_proven(number_box, "whatsapp");
    shown_unless_proven(profile_box, "messenger");
    if (not(host.messenger)) {
      html_text_content_set(number_label, "Your WhatsApp number");
      html_component_element_get(profile_box).style.display = "none";
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
    let text2 = code_text();
    html_text_content_set(code_button, text2);
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
        "First provide a link to your profile. Then I will confirm the link works. After you wait for confirmation, then if God wills you can schedule a meeting.",
      );
      return;
    }
    if (equal(via, "whatsapp")) {
      html_text_content_set(
        intro,
        "First provide your WhatsApp number. Then I will confirm the number works. After you wait for confirmation, then if God wills you can schedule a meeting.",
      );
      return;
    }
    html_text_content_set(intro, intro_first);
  }
  intro_set();
  via_draw();
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let check = await calendar_turnstile_widget(card);
  let status = html_div_text(card, "");
  function form_problem() {
    if (equal(via, null)) {
      let r = {
        field: via_area,
        words: "Pick WhatsApp or Messenger first.",
      };
      return r;
    }
    if (equal(via, "whatsapp") && equal(html_value_get(whatsapp).trim(), "")) {
      let r3 = {
        field: number_box,
        words: "Type your WhatsApp number.",
      };
      return r3;
    }
    if (equal(via, "messenger") && equal(html_value_get(profile).trim(), "")) {
      let r4 = {
        field: profile_box,
        words: "Paste the link to your Facebook profile.",
      };
      return r4;
    }
    ("The link is checked here by the server's own rule, so a guest learns before sending that facebook.com alone, a feed or a post is not their profile.");
    if (
      equal(via, "messenger") &&
      equal(calendar_profile_url_read(html_value_get(profile)), null)
    ) {
      let r5 = {
        field: profile_box,
        words:
          "That is not a link to a profile. On Facebook, open your own profile and copy its link.",
      };
      return r5;
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
  for (let input of [whatsapp, profile]) {
    html_component_element_get(input).addEventListener(
      "input",
      problems_recheck,
    );
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
      whatsapp: html_value_get(whatsapp),
      profile: html_value_get(profile),
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
        whatsapp: "That WhatsApp number does not look right.",
        profile: "Paste the link to your Facebook profile.",
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
      let fields = {
        whatsapp: number_box,
        profile: profile_box,
      };
      let field = property_get_or(fields, started.body.reason, null);
      let b2 = equal(field, null);
      if (not(b2)) {
        problem_show({
          field,
          words: text,
        });
        return;
      }
      html_text_content_set(status, text);
      html_style_assign(status, {
        color: app_shared_color_red(),
      });
      return;
    }
    storage_local_set(app_calendar, "guest_details", {
      whatsapp: html_value_get(whatsapp),
      profile: html_value_get(profile),
      via,
    });
    if (started.body.key) {
      on_key(started.body.key);
    }
    await on_started();
  }
  let text3 = code_text();
  let code_button = app_shared_button_green(card, text3, code_get);
}
