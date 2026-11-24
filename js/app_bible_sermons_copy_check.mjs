import { text_includes_not } from "./text_includes_not.mjs";
import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { playwright_url_buttons_press_copied } from "./playwright_url_buttons_press_copied.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { equal } from "./equal.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
export async function app_bible_sermons_copy_check() {
  "Opens the sermons app on the dev server at a link naming one verse of a passage, presses every copy and share button, and throws if any of them copies the wrong thing. Answers what each one copied.";
  "What is checked is how the copies fit together, never the words of the sermon, so rewriting a sermon cannot break it: the link has to turn into the passage's run; the Bible copy has to open with the passage's reference; the sermon copy has to have no reference in it; the Bible-and-sermon copy has to be exactly the Bible copy with the sermon copy after it; and the shared link has to name the passage's run.";
  "Romans 1 is the chapter because it is written and approved, and its first passage runs 1-4, so a link to verse 4 is one verse inside a passage that does not start there.";
  "THE PAGE IS BUILT FIRST, because the dev server serves whatever was last built, and nobody builds it on every commit. Unbuilt, this would judge the code as it stood at the last build, and could pass while the code under it was broken.";
  await app_shared_dev_build("bible_sermons");
  let url = "http://omnibook5ml.local:8080/dev/bible_sermons.html#c=ROM01,v=4";
  let labels = [
    "📋 Copy",
    "📋 Copy Bible and sermon",
    "📋 Copy sermon",
    "🔗 Share",
  ];
  let buttons = list_join_comma(labels);
  let r = await playwright_url_buttons_press_copied(url, buttons);
  let hash = property_get(r, "hash");
  let copied = property_get(r, "copied");
  let [bible, both, sermon, shared] = copied;
  let reference = "Romans 1:1-4";
  let failures = [];
  function check(ok, message) {
    if (not(ok)) {
      list_add(failures, message);
    }
  }
  let i = text_includes(hash, "v=1-4");
  check(i, "the link to verse 4 did not turn into 1-4");
  let sw = text_starts_with(bible, reference + "\n");
  check(sw, "Copy does not open with the reference");
  let n = text_includes_not(sermon, reference);
  check(n, "Copy sermon carries the reference");
  let ne = text_empty_not_is(sermon);
  check(ne, "Copy sermon copied nothing");
  let eq = equal(both, bible + "\n\n" + sermon);
  check(eq, "Copy Bible and sermon is not the Bible then the sermon");
  let i2 = text_includes(shared, "Romans+1:1-4");
  check(i2, "Share does not name the passage");
  let v = {
    hash,
    bible,
    sermon,
    shared,
    failures,
  };
  if (list_empty_not_is(failures)) {
    let message2 = json_to(v);
    error(message2);
  }
  return v;
}
