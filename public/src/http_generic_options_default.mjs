export function http_generic_options_default(options) {
  let method = options.method || "GET";
  let body = options.body || null;
  let r = {
    method,
    body,
  };
  return r;
}
