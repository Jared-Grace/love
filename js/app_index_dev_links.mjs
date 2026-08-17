import { fn_name } from "./fn_name.mjs";
export function app_index_dev_links() {
  "The short list of places worth going straight to while something is being worked on - the one place to add a link so it can be reached from a phone without typing an address.";
  "Typing an address on a phone is the slowest thing in the whole loop: a long one takes longer to peck out than the change it was meant to check took to make, and a single wrong character sends you to a blank page that looks exactly like a broken app. A card is one tap and cannot be mistyped.";
  "These show only on a machine on this same network, so nothing here is ever seen by a reader of the deployed site. That is what makes the list safe to leave half-finished - a link to a chapter nobody has authored yet is a dead card on one phone rather than a dead card on the internet.";
  "Add a line when you want the human to look at something, and take it away once they have. It is meant to be short: a list long enough to need reading has stopped saving the taps it exists to save.";
  let r = [
    {
      app_fn: fn_name("app_ceb_bible"),
      hash: { c: "PRO31" },
      label: "Cebuano Proverbs 31",
      text: "The first Cebuano chapter with word explanations written by hand rather than generated",
    },
  ];
  return r;
}
