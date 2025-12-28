export function js_statement_block_new(bs_body) {
  let b = {
    type: "BlockStatement",
    body: bs_body,
  };
  return b;
}
