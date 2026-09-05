import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web_dev } from "./folder_web_dev.mjs";
import { path_join } from "./path_join.mjs";
import { bible_pronunciation_choices } from "./bible_pronunciation_choices.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_pronunciation_choices_page_write() {
  "Writes the page that puts both sayings of each name still in question side by side, with a play button on each, so the decision can be made by ear from a phone.";
  "★ THE PAGE IS BUILT FROM THE SAME LIST THE SOUNDS WERE SPOKEN FROM, WHICH IS THE ONLY THING KEEPING THE BUTTON AND THE FILE TOGETHER. A page written by hand beside a list spoken by machine drifts the first time a name is added or a saying is changed, and it drifts silently: the button still plays, it just plays the wrong pair.";
  "★ WHICH SIDE IS WHICH IS SAID OUT LOUD RATHER THAN HIDDEN. A blind test would be the better instrument if the question were which sounding is nicer, but it is not - it is whether nine hundred recordings should be made again, and that cannot be answered without knowing which side the nine hundred are already on.";
  "The counts are on the page for the same reason: the six small names together are worth less than a quarter of Israel, so an answer that settles Israel has settled most of it whatever the rest say.";
  arguments_assert(arguments, 0);
  let dev = folder_web_dev();
  let folder = path_join([dev, "sound_test"]);
  let path = path_join([folder, "names.html"]);
  let choices = bible_pronunciation_choices();
  function lambda(choice) {
    let word = choice.word;
    let section = list_join(
      [
        "<section><h2>" + word + "</h2>",
        '<p class="ask">Spoken ' +
          choice.times +
          " times. &ldquo;" +
          choice.sentence +
          "&rdquo;</p>",
        '<div class="row"><span class="tag">A</span><span class="what"><b>' +
          choice.was_heard +
          "</b><span>what the recordings say</span></span>" +
          '<button class="play" data-src="' +
          word +
          '_was.mp3">Play</button></div>',
        '<div class="row"><span class="tag">B</span><span class="what"><b>' +
          choice.now_heard +
          "</b><span>what the reading says now</span></span>" +
          '<button class="play" data-src="' +
          word +
          '_now.mp3">Play</button></div>',
        "</section>",
      ],
      "\n",
    );
    return section;
  }
  let sections = list_map(choices, lambda);
  let head = list_join(
    [
      "<!doctype html>",
      '<html lang="en">',
      "<head>",
      '<meta charset="utf-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1">',
      "<title>A or B?</title>",
      "<style>",
      "  :root { --ground:#ffffff; --ink:#16181d; --quiet:#5d6470;",
      "          --line:#dfe3ea; --card:#f6f8fb; --accent:#1f5f8b; }",
      "  @media (prefers-color-scheme: dark) {",
      '    :root:not([data-theme="light"]) { --ground:#14161a; --ink:#eef1f5;',
      "      --quiet:#98a1ae; --line:#2b3038; --card:#1c1f25; --accent:#6fb3dc; } }",
      "  * { box-sizing: border-box; }",
      "  body { margin:0; padding:20px 16px 64px; background:var(--ground);",
      '    color:var(--ink); font:17px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }',
      "  h1 { font-size:22px; margin:0 0 6px; }",
      "  p.lead { color:var(--quiet); margin:0 0 28px; max-width:34em; }",
      "  section { margin:0 0 30px; }",
      "  h2 { font-size:18px; margin:0 0 4px; }",
      "  .ask { color:var(--quiet); margin:0 0 12px; font-size:15px; }",
      "  .row { display:flex; align-items:center; gap:14px; padding:12px 14px;",
      "    border:1px solid var(--line); border-radius:10px; background:var(--card);",
      "    margin-bottom:10px; }",
      "  .tag { flex:0 0 auto; width:34px; height:34px; display:grid;",
      "    place-items:center; border-radius:50%; background:var(--accent);",
      "    color:#fff; font-weight:700; }",
      "  .what { flex:1 1 auto; min-width:0; }",
      "  .what b { display:block; font-size:17px; }",
      "  .what span { color:var(--quiet); font-size:14px; }",
      "  button.play { flex:0 0 auto; font:inherit; padding:9px 18px;",
      "    border-radius:8px; border:1px solid var(--accent); background:transparent;",
      "    color:var(--accent); }",
      "</style>",
      "</head>",
      "<body>",
      "<h1>A or B?</h1>",
      '<p class="lead">Seven names are said one way in the recordings and another way in the reading now. Play A, then B, and tell me which letter sounds right. Israel is the one that matters; the rest are small.</p>',
    ],
    "\n",
  );
  let foot = list_join(
    [
      "<script>",
      "  var sounding = null;",
      '  document.addEventListener("click", function (e) {',
      '    var button = e.target.closest("button.play");',
      "    if (!button) return;",
      "    if (sounding) { sounding.pause(); }",
      '    sounding = new Audio(button.getAttribute("data-src"));',
      "    sounding.play();",
      "  });",
      "</script>",
      "</body>",
      "</html>",
    ],
    "\n",
  );
  let joined = list_join(sections, "\n");
  let page = list_join([head, joined, foot], "\n");
  await file_overwrite(path, page);
  return path;
}
