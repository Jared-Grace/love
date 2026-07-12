import { list_concat } from "./list_concat.mjs";
import { js_keyword_await } from "./js_keyword_await.mjs";
import { js_keyword_break } from "./js_keyword_break.mjs";
import { js_keyword_case } from "./js_keyword_case.mjs";
import { js_keyword_catch } from "./js_keyword_catch.mjs";
import { js_keyword_class } from "./js_keyword_class.mjs";
import { js_keyword_const } from "./js_keyword_const.mjs";
import { js_keyword_continue } from "./js_keyword_continue.mjs";
import { js_keyword_debugger } from "./js_keyword_debugger.mjs";
import { js_keyword_default } from "./js_keyword_default.mjs";
import { js_keyword_delete } from "./js_keyword_delete.mjs";
import { js_keyword_do } from "./js_keyword_do.mjs";
import { js_keyword_else } from "./js_keyword_else.mjs";
import { js_keyword_enum } from "./js_keyword_enum.mjs";
import { js_keyword_export } from "./js_keyword_export.mjs";
import { js_keyword_extends } from "./js_keyword_extends.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_finally } from "./js_keyword_finally.mjs";
import { js_keyword_for } from "./js_keyword_for.mjs";
import { js_keyword_function } from "./js_keyword_function.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_keyword_import } from "./js_keyword_import.mjs";
import { js_keyword_in } from "./js_keyword_in.mjs";
import { js_keyword_instanceof } from "./js_keyword_instanceof.mjs";
import { js_keyword_new } from "./js_keyword_new.mjs";
import { js_keyword_null } from "./js_keyword_null.mjs";
import { js_keyword_return } from "./js_keyword_return.mjs";
import { js_keyword_super } from "./js_keyword_super.mjs";
import { js_keyword_switch } from "./js_keyword_switch.mjs";
import { js_keyword_this } from "./js_keyword_this.mjs";
import { js_keyword_throw } from "./js_keyword_throw.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_try } from "./js_keyword_try.mjs";
import { js_keyword_typeof } from "./js_keyword_typeof.mjs";
import { js_keyword_var } from "./js_keyword_var.mjs";
import { js_keyword_void } from "./js_keyword_void.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_keyword_with } from "./js_keyword_with.mjs";
import { js_keyword_yield } from "./js_keyword_yield.mjs";
import { js_keyword_let } from "./js_keyword_let.mjs";
import { js_keyword_static } from "./js_keyword_static.mjs";
import { js_keyword_implements } from "./js_keyword_implements.mjs";
import { js_keyword_interface } from "./js_keyword_interface.mjs";
import { js_keyword_package } from "./js_keyword_package.mjs";
import { js_keyword_private } from "./js_keyword_private.mjs";
import { js_keyword_protected } from "./js_keyword_protected.mjs";
import { js_keyword_public } from "./js_keyword_public.mjs";
export function js_identifier_words_invalid() {
  let r = [
    js_keyword_await(),
    js_keyword_break(),
    js_keyword_case(),
    js_keyword_catch(),
    js_keyword_class(),
    js_keyword_const(),
    js_keyword_continue(),
    js_keyword_debugger(),
    js_keyword_default(),
    js_keyword_delete(),
    js_keyword_do(),
    js_keyword_else(),
    js_keyword_enum(),
    js_keyword_export(),
    js_keyword_extends(),
    js_keyword_false(),
    js_keyword_finally(),
    js_keyword_for(),
    js_keyword_function(),
    js_keyword_if(),
    js_keyword_import(),
    js_keyword_in(),
    js_keyword_instanceof(),
    js_keyword_new(),
    js_keyword_null(),
    js_keyword_return(),
    js_keyword_super(),
    js_keyword_switch(),
    js_keyword_this(),
    js_keyword_throw(),
    js_keyword_true(),
    js_keyword_try(),
    js_keyword_typeof(),
    js_keyword_var(),
    js_keyword_void(),
    js_keyword_while(),
    js_keyword_with(),
    js_keyword_yield(),
    js_keyword_let(),
    js_keyword_static(),
    js_keyword_implements(),
    js_keyword_interface(),
    js_keyword_package(),
    js_keyword_private(),
    js_keyword_protected(),
    js_keyword_public(),
  ];
  let invalid = list_concat(["arguments", "eval"], r);
  return invalid;
}
