import { tasks_run } from "../../../love/public/src/tasks_run.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
export async function playwright_by_attribute(page, name, value) {
  let result = await tasks_run();
  const inside = name + '="' + value + '"';
  let r = playwright_by_attribute_named(page, inside);
  return r;
}
