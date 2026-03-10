export function app_replace_rule_set_binary_numbers_goals(start) {
  let r = [
    {
      start,
      end: "0",
    },
    {
      start,
      end: "1",
    },
    {
      start,
      end: "1 0",
    },
    {
      start,
      end: "1 1",
    },
    {
      start,
      end: "1 0 1",
    },
    {
      start,
      end: "1 0 1 0",
    },
  ];
  return r;
}
