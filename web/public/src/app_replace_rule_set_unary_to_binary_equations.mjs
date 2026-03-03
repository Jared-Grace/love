export function app_replace_rule_set_unary_to_binary_equations() {
  let r = {
    name: "Unary to Binary Equations",
    rules: [
      "e = b > c e = b c",
      "c c > c + b c",
      "d b > b d",
      "d c > a d",
      "d e = > = d",
      "d + > + d",
      "0 a > 1",
      "1 a > a 0",
      "b a > b 1",
    ],
    goals: [
      {
        start: "dbce=bc",
        end: "bdce=bc",
      },
      {
        start: "dbce=bc",
        end: "bade=bc",
      },
      {
        start: "dbce=bc",
        end: "b1de=bc",
      },
      {
        start: "dbce=bc",
        end: "b1=dbc",
      },
      {
        start: "dbce=bc",
        end: "b1=bdc",
      },
      {
        start: "dbce=bc",
        end: "b1=bad",
      },
      {
        start: "dbce=bc",
        end: "b1=b1d",
      },
      {
        start: "dbce=bc",
        end: "dbcce=bcc",
      },
      {
        start: "dbce=bc",
        end: "dbccce=bccc",
      },
      {
        start: "dbce=bc",
        end: "dbccccce=bccccc",
      },
      {
        start: "dbcce=bcc",
        end: "dbc+bce=bcc",
      },
      {
        start: "dbccccce=bccccc",
        end: "dbc+bccc+bce=bccc+bcc",
      },
      {
        start: "dbcc+bce=bccc",
        end: "baad+bce=bccc",
      },
    ],
  };
  return r;
}
