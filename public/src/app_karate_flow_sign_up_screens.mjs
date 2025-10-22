import { app_karate_email_verify } from "../../../karate_code/public/src/app_karate_email_verify.mjs";
import { app_karate_email } from "../../../karate_code/public/src/app_karate_email.mjs";
import { app_karate_computer_save_trusted } from "../../../karate_code/public/src/app_karate_computer_save_trusted.mjs";
import { app_karate_computer_save_property_value } from "../../../karate_code/public/src/app_karate_computer_save_property_value.mjs";
import { app_karate_computer_save } from "../../../karate_code/public/src/app_karate_computer_save.mjs";
import { app_karate_home } from "../../../karate_code/public/src/app_karate_home.mjs";
export function app_karate_flow_sign_up_screens(context) {
  let v = [
    {
      fn: app_karate_home,
    },
    {
      fn: app_karate_computer_save,
      skip: function lambda3() {
        let value = app_karate_computer_save_property_value(context);
        let v2 = value === app_karate_computer_save_trusted();
        return v2;
      },
    },
    {
      fn: app_karate_email,
    },
    {
      fn: app_karate_email_verify,
    },
  ];
  return v;
}
