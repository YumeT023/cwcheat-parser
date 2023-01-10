import $, { Language } from "parsimmon";
import { NodeBuilder } from "../node";
import { _$ } from "../../utils/cwcheat";

const Sign = $.string("//");

export const Comment = ({ Label }: Language) => {
  return $.seqObj<any>(Sign, _$, ["content", Label]).thru(NodeBuilder.COMMENT);
};
