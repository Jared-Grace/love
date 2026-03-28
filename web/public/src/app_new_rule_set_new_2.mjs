export function app_new_rule_set_new_2() {
  let r = {
    name: "Statement variable",
    rules: [
      "vs > vk vdg ;",
      "vdg > vd",
      "vdg > vdg , vd",
      "vd > id",
      "vd > id = ex",
    ],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
