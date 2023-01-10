import $, { Language } from "parsimmon";
import { _, _$ } from "../../../utils/cwcheat";

export const Statement = (
  lang: Language,
  $1: [string, $.Parser<{}>],
  $2: [string, $.Parser<{}>]
) => {
  const { Line, Pre, Comment } = lang;
  return $.seqObj<any>(
    Line,
    $.whitespace.atLeast(1),
    Pre,
    $1,
    _.atLeast(1),
    Pre,
    $2,
    _$,
    ["comment", $.alt(Comment, $.string(""))]
  );
};
