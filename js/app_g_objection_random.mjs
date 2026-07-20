import { g_objection_generate_property } from "./g_objection_generate_property.mjs";
import { app_g_openai_split } from "./app_g_openai_split.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_objection_random(passage) {
  "one of a passage's generated objections, picked at random — what the NPC voices in the gospel-share quiz";
  let property = g_objection_generate_property();
  let objections = property_get(passage, property);
  let split = app_g_openai_split(objections);
  let ob = list_random_item(split);
  return ob;
}
