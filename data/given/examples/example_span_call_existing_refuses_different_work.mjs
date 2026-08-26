import { function_span_call_existing } from "../../../js/function_span_call_existing.mjs";
export const example = {
  fn: function_span_call_existing.name,
  args: ["price_total", "number_multiply", "number_add", "price_with_tax"],
  kind: "files",
  refuses: true,
  title: "Refuse to point a run at a function that does different work",
  note: [
    { fn: function_span_call_existing.name },
    " retires a run of lines somebody wrote out by hand in favour of a function that already writes them, and the two addresses naming the run cannot say whether it really is the same work. So it is decided by cutting first and reading afterwards: the piece that comes out is held against the whole of the named function, and here the two multiply by different numbers. That is a near miss rather than an obvious one, which is the case worth writing down — a run that plainly did something else would never have been pointed at this name in the first place.",
    " ",
    "Both halves of the pair turn it away and they do it differently, which is the one thing an example can pin. The folder-sized twin has written nothing at the moment it reads the cut, so it throws and the folder is exactly as it was handed over. The whole-repo command has already cut into a real file by then, so it puts the holder back from its own text and hands back a record saying nothing was changed. The refusal is the same; only what there was to undo differs.",
  ],
  expectText:
    "refused — the run came out as a function that does different work from price_with_tax",
  before: [
    {
      name: "price_total.mjs",
      source: `export function price_total(items) {
  let subtotal = list_sum(items);
  let tax = number_multiply(subtotal, 0.2);
  let total = number_add(subtotal, tax);
  return total;
}`,
    },
    {
      name: "price_with_tax.mjs",
      source: `export function price_with_tax(subtotal) {
  let tax = number_multiply(subtotal, 0.25);
  let total = number_add(subtotal, tax);
  return total;
}`,
    },
  ],
};
