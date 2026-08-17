export function http_head_options() {
  "Ask for an address's answer without its body - the far end says whether the thing is there and how big it is, and sends none of it.";
  let v = {
    method: "HEAD",
  };
  return v;
}
