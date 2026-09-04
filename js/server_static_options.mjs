import { arguments_assert } from "./arguments_assert.mjs";
import { server_cache_headers } from "./server_cache_headers.mjs";
export function server_static_options() {
  "What to tell the web server about every folder it serves out of a file, which today is the one header that decides how long a browser keeps what it was given.";
  "It is one object shared by every mount rather than one written per mount, because a browser holding a stale copy of one stage and a fresh copy of another is the hardest kind of fault to see: the page works, and works out of two different builds at once.";
  "Deciding the header per file rather than per folder is what the web server's own hook is for, so what is named here is that hook and nothing else - the deciding itself belongs beside the naming of the files it reads.";
  arguments_assert(arguments, 0);
  function cache_headers(res, file_path) {
    let r = server_cache_headers(res, file_path);
    return r;
  }
  let static_options = {
    setHeaders: cache_headers,
  };
  return static_options;
}
