import { app_message_provide_housing } from "./app_message_provide_housing.mjs";
import { app_message_provide_food } from "./app_message_provide_food.mjs";
import { app_message_provide_travel } from "./app_message_provide_travel.mjs";
export function app_message_flow_travel() {
  let v = [
    {
      fn: app_message_provide_travel,
    },
    {
      fn: app_message_provide_food,
    },
    {
      fn: app_message_provide_housing,
    },
  ];
  return v;
}
