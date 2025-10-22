import { app_message_provide_food } from "../../../love/public/src/app_message_provide_food.mjs";
import { app_message_provide_travel } from "../../../love/public/src/app_message_provide_travel.mjs";
export function app_message_flow_travel() {
  let v3 = [
    {
      fn: app_message_provide_travel,
    },
    {
      fn: app_message_provide_food,
    },
  ];
  return v3;
}
