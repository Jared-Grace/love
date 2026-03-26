export function app_replace_rule_set_unary_to_binary_equations() {
  let r = {
    name: "Unary To Binary Equations",
    rules: [
      "e = b > c e = b c",
      "c c > c + b c",
      "d b > b d",
      "d c > a d",
      "d e = > = d",
      "d + > + d",
      "b a > b 1",
      "1 a > a 0",
      "0 a > 1",
    ],
    goals: [
      {
        start: "d b c e = b c",
        end: "b d c e = b c",
      },
      {
        start: "d b c e = b c",
        end: "b a d e = b c",
      },
      {
        start: "d b c e = b c",
        end: "b 1 d e = b c",
      },
      {
        start: "d b c e = b c",
        end: "b 1 = d b c",
      },
      {
        start: "d b c e = b c",
        end: "b 1 = b d c",
      },
      {
        start: "d b c e = b c",
        end: "b 1 = b a d",
      },
      {
        start: "d b c e = b c",
        end: "b 1 = b 1 d",
      },
      {
        start: "d b c e = b c",
        end: "d b c c e = b c c",
      },
      {
        start: "d b c e = b c",
        end: "d b c c c e = b c c c",
      },
      {
        start: "d b c e = b c",
        end: "d b c c c c e = b c c c c",
      },
      {
        start: "d b c e = b c",
        end: "d b c c c c c e = b c c c c c",
      },
      {
        start: "d b c c c e = b c c c",
        end: "d b c c c c c c c e = b c c c c c c c",
      },
      {
        start: "d b c c e = b c c",
        end: "d b c + b c e = b c c",
      },
      {
        start: "d b c c c e = b c c c",
        end: "d b c + b c c e = b c c c",
      },
      {
        start: "d b c c c c e = b c c c c",
        end: "d b c c + b c c e = b c c c c",
      },
      {
        start: "d b c c c c c e = b c c c c c",
        end: "d b c + b c c c + b c e = b c c c + b c c",
      },
      {
        start: "d b c c c c c c c e = b c c c c c c c",
        end: "d b c c c + b c c c c e = b c c c c c c c",
      },
      {
        start: "d b c c + b c e = b c c c",
        end: "b a a d + b c e = b c c c",
      },
      {
        start: "d b c c c + b c c c c e = b c c c c c c c",
        end: "b a a a d + b c c c c e = b c c c c c c c",
      },
      {
        start: "b a d + b c c e = b c c c",
        end: "b a + b a a d e = b c c c",
      },
      {
        start: "b a a a d + b c c c c e = b c c c c c c c",
        end: "b a a a + b a a d c c e = b c c c c c c c",
      },
      {
        start: "b a a a + b a a d c c e = b c c c c c c c",
        end: "b a a a + b a a a a d e = b c c c c c c c",
      },
      {
        start: "b a a d + b c e = b c c c",
        end: "b a a + b a = b a a a d",
      },
      {
        start: "b a a a + b a a a a d e = b c c c c c c c",
        end: "b a a a + b a a a a = b a a a d c c c c",
      },
      {
        start: "b a a a a + b a a a = b a a a d c c c c",
        end: "b a a a a + b a a a = b a a a a a a a d",
      },
      {
        start: "b a a + b a a = b a a a a d",
        end: "b 1 0 + b 1 0 = b a a a a d",
      },
      {
        start: "b 1 0 + b 1 0 = b a a a a d",
        end: "b 1 0 + b 1 0 = b 1 0 0 d",
      },
      {
        start: "b a a a + b a a a a = b a a a a a a a d",
        end: "b 1 1 + b a a a a = b a a a a a a a d",
      },
      {
        start: "b 1 1 + b a a a a = b a a a a a a a d",
        end: "b 1 1 + b 1 0 0 = b a a a a a a a d",
      },
      {
        start: "b 1 1 + b 1 0 0 = b a a a a a a a d",
        end: "b 1 1 + b 1 0 0 = b 1 1 a a a a d",
      },
      {
        start: "b 1 1 + b 1 0 0 = b 1 1 a a a a d",
        end: "b 1 1 + b 1 0 0 = b 1 0 0 a a a d",
      },
      {
        start: "b 1 1 + b 1 0 0 = b 1 0 0 a a a d",
        end: "b 1 1 + b 1 0 0 = b 1 0 1 a a d",
      },
      {
        start: "b 1 1 + b 1 0 0 = b 1 0 1 a a d",
        end: "b 1 1 + b 1 0 0 = b 1 1 1 d",
      },
    ],
  };
  return r;
}
