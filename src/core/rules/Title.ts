import $, { Language } from "parsimmon";
import { _ } from "../../utils/cwcheat";
import { NodeBuilder } from "../node";

const Sign = $.string("_C");
const Status = $.oneOf("01");

export const Title = ({ Label }: Language) => {
  return $.seqObj<any>(Sign, ["status", Status], _.atLeast(1), [
    "content",
    Label,
  ]).thru(NodeBuilder.TITLE);
};
