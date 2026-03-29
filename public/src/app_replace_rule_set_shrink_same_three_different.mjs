export function app_replace_rule_set_shrink_same_three_different() {
  let r = {
    name: "Shrink Same Three Different",
    rules: ["c e = b c > e = b"],
    goals: [
      {
        start: "c c e = b c c",
        end: "e = b",
      },
      {
        start: "c c c c e = b c c c c",
        end: "e = b",
      },
    ],
    why: "The rules demonstrate a grammar that reduces sequences where three or more identical 'c's surround 'e = b' to just 'e = b', effectively shrinking repeated patterns of 'c' around a core expression.",
    rules_used: [
      [
        {
          left: ["c", "e", "=", "b", "c"],
          right: ["e", "=", "b"],
          original: "c e = b c > e = b",
        },
      ],
      [
        {
          left: ["c", "e", "=", "b", "c"],
          right: ["e", "=", "b"],
          original: "c e = b c > e = b",
        },
      ],
    ],
  };
  return r;
}
