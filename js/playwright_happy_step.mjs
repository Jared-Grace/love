import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_first } from "./list_first.mjs";
import { playwright_by_attribute_named_all } from "./playwright_by_attribute_named_all.mjs";
import { qa_attribute_test_happy } from "./qa_attribute_test_happy.mjs";
import { qa_attribute_test_happy_end } from "./qa_attribute_test_happy_end.mjs";
export async function playwright_happy_step(page) {
  ("take one step along the way somebody takes who is getting everything right: stop if this is the end, and otherwise press the one control marked as the way on");
  ("It knows nothing about the app in front of it. Every screen says which of its controls carries a person forward and whether there is anywhere further to go, so one walker serves every app that says so - and a screen added tomorrow is walked without this being touched.");
  ("The FIRST of the marked controls is pressed when there are several. Several is what an answer given in order looks like - the tokens of a line being put back together - and there the order is the answer, so the earliest is the only right one to press. A screen with several unordered ways on is a screen where either would do.");
  ("Being stuck is a failure and is thrown, because a screen with neither a way on nor an end is exactly what a walk exists to find: a right answer that cannot be pressed, a next that never appeared, a quiz nobody taught the app to mark. The address is thrown with it, since it is the whole of what somebody needs to go and look.");
  arguments_assert(arguments, 1);
  let end_key = qa_attribute_test_happy_end();
  let ends = await playwright_by_attribute_named_all(page, end_key);
  let arrived = list_empty_not_is(ends);
  let url = page.url();
  if (arrived) {
    let done = {
      end: true,
      url,
    };
    return done;
  }
  let key = qa_attribute_test_happy();
  let ways = await playwright_by_attribute_named_all(page, key);
  list_empty_not_is_assert_json(ways, {
    url,
    key,
    end_key,
    hint: "nothing on this screen is marked as the way on and nothing marks it as the end, so the walk is stuck - either the screen forgot to mark its right answer, or the answer is there and cannot be pressed",
  });
  let way = list_first(ways);
  let text = await way.textContent();
  await way.click();
  let step = {
    end: false,
    url,
    text,
  };
  return step;
}
