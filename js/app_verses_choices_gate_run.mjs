import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_bible_verses_counts } from "./app_shared_bible_verses_counts.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_verses_choices_gate_run() {
  "QA gate: the page that gathers encouraging verses really offers the two choices its card promises a stranger - which language, and how many - and really gives them a way to copy what it gathered.";
  "THE CARD IS A PROMISE MADE BEFORE ANYTHING IS OPENED, and it is the only thing most people will ever read, because a card is handed around where the page is not. It promises three things in one sentence: you choose a language, you choose how many, and what comes back is ready to copy and send to someone. Each of those is a control that could quietly stop being drawn, and nothing anywhere connects the drawing of it to the sentence.";
  "THE ONE CLAIM IN THAT SENTENCE THIS CANNOT PROVE IS WHICH VERSES THEY ARE. The list of references to draw from lives away from this repo as data, so that it can change without anything being rebuilt, and reading it means asking over the network. A check that has to fetch before it can answer is a check nobody can afford to run, so it is not a check. What is left is everything the page decides for itself, which is both of the choices and the copying.";
  "THE ROW OF AMOUNTS IS READ FOR WHETHER IT IS A CHOICE AT ALL. A single amount is not a choice however the sentence words it, and the same amount twice is two buttons doing one thing. The amounts also have to climb, because a reader reads the row left to right and takes the order to mean something; one going backwards reads as a mistake even where every amount in it is fine on its own.";
  "WHICH CONTROLS THE PAGE DRAWS IS READ OFF ITS OWN SOURCE, not gathered by running it. Running it would mean a browser and the fetch above, and the question is only whether the page still reaches for the chooser, the row and the copying - which is a thing its own imports say plainly.";
  arguments_assert(arguments, 0);
  let wrong = [];
  let app_name = "verses";
  let sentence = app_shared_description(app_name);
  let said = text_lower_to(sentence);
  let promises = ["language", "how many", "copy"];
  for (let promise of promises) {
    let made = text_includes(said, promise);
    if (not(made)) {
      list_add(wrong, {
        fault:
          "the card for this page no longer promises this, so the part of this gate that proves it is proving something nobody is handed - point it at whatever the card promises instead",
        promise,
        sentence,
      });
    }
  }
  ("The amounts a reader is offered as something to press, which is the second of the two choices.");
  let counts = app_shared_bible_verses_counts();
  let offered = list_size(counts);
  let one_only = less_than(offered, 2);
  if (one_only) {
    list_add(wrong, {
      fault:
        "the page offers fewer than two amounts of verses, so asking how many somebody would like is not a choice they can make",
      counts,
    });
  }
  let previous = 0;
  for (let count of counts) {
    let written = text_from_number(count);
    let whole = text_digits_is(written);
    if (not(whole)) {
      list_add(wrong, {
        fault:
          "this is offered as an amount of verses and is not a whole number of them",
        count,
      });
    }
    let climbing = less_than(previous, count);
    if (not(climbing)) {
      list_add(wrong, {
        fault:
          "this amount does not come after the one before it in the row, so either it is the same amount offered twice or the row goes backwards where a reader is reading it forwards",
        count,
        previous,
      });
    }
    previous = count;
  }
  ("Whether the page still reaches for each control the card promises.");
  let first_screen = fn_name("app_verses_counts");
  let drawn = [
    {
      control: "choosing which language or languages the verses come in",
      page: first_screen,
      reached: fn_name("app_shared_bible_languages_gear"),
    },
    {
      control: "choosing how many verses",
      page: first_screen,
      reached: fn_name("app_shared_bible_verses_counts"),
    },
    {
      control: "copying what was gathered, so it can be sent to somebody",
      page: fn_name("app_verses"),
      reached: fn_name("app_verses_copy"),
    },
  ];
  for (let one of drawn) {
    let page = property_get(one, "page");
    let reached = property_get(one, "reached");
    let control = property_get(one, "control");
    let imports = await function_imports(page);
    let there = list_includes(imports, reached);
    if (not(there)) {
      list_add(wrong, {
        fault:
          "this page no longer reaches for the one thing that gives a reader this control, so the card promises something the page has stopped offering",
        control,
        page,
        reached,
      });
    }
  }
  list_empty_is_assert_json(wrong, {
    hint: "these are the ways the page that gathers encouraging verses would stop offering what its card promises, and the card is what a stranger reads before deciding whether to open anything at all",
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    app_name,
    promises: list_size(promises),
    counts: offered,
    controls: list_size(drawn),
  };
  return r;
}
