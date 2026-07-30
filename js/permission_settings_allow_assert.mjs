import { permission_settings_allow_drift } from "./permission_settings_allow_drift.mjs";
import { permission_settings_allow_drift_verdict } from "./permission_settings_allow_drift_verdict.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function permission_settings_allow_assert() {
  "QA gate: the allow rules on disk are exactly the ones the JS list generates";
  "compared as two sets rather than two sequences, because the order of an allow list means nothing and sorting it would be a diff nobody asked for";
  "the local settings file beside the shared one is per-machine and outside version control, so it is not read here and nothing generated may reach it";
  let drift = await permission_settings_allow_drift();
  let missing = property_get(drift, "missing");
  let extra = property_get(drift, "extra");
  let arrived = property_get(drift, "arrived");
  let departed = property_get(drift, "departed");
  let counts = {
    on_disk: property_get(drift, "on_disk"),
    generated: property_get(drift, "generated"),
    missing: missing.length,
    extra: extra.length,
  };
  let verdict = permission_settings_allow_drift_verdict(drift);
  let clean = equal(verdict, "clean");
  if (clean) {
    return counts;
  }
  let grew = equal(verdict, "addition");
  if (grew) {
    let json = json_format_to({
      arrived,
      departed,
    });
    console.log(json);
    let f_name = fn_name("permission_grant_add");
    let message = text_combine_multiple([
      "permission settings gate: ",
      arrived.length,
      " function(s) hold an allow rule the JS list does not account for, so authority grew and no human gave it. A rule is added by naming the function to ",
      f_name,
      ", which asks first - never by editing the settings file or the names list directly.",
    ]);
    throw new Error(message);
  }
  ("A rename and a removal both leave authority where it was or narrower, so repairing them here would be safe in itself - and it is still not done here. Calling the regenerator from a gate makes every caller of the gate a writer of permission rules, and the deploy command reaches this through ",
    fn_name("firebase_deploy"),
    " while taking an app name of its own, so the escalation check correctly stops granting it. One command losing its standing approval is a worse price than one command being run after a rename, and the verdict below is what makes that command a single obvious step rather than a puzzle.");
  let told = json_format_to({
    verdict,
    arrived,
    departed,
  });
  console.log(told);
  let f_name2 = fn_name("permission_settings_allow_write");
  let message2 = text_combine_multiple([
    "permission settings gate: authority did not grow - this is a ",
    verdict,
    ", so the standing approvals are simply following their functions. Write the rules out again with ",
    f_name2,
    " and this passes.",
  ]);
  throw new Error(message2);
}
