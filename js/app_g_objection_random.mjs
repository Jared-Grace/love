import { app_g_openai_split_property } from "./app_g_openai_split_property.mjs";
import { g_objection_generate_property } from "./g_objection_generate_property.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_g_objection_random(passage) {
  "one of a passage's generated objections, picked at random — what the NPC voices in the gospel-share quiz";
  let property = g_objection_generate_property();
  let split = app_g_openai_split_property(passage, property);
  let ob = list_random_item(split);
  return ob;
}
