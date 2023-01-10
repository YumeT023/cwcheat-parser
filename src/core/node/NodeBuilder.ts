import $ from "parsimmon";
import { Assignment, Comment, Condition, Node, NodeType, Title } from "./Node";

const builderWrapper = <Type extends Node>(builder: (pValue: any) => Type) => {
  return (parser: $.Parser<any>) => {
    return $.seqMap($.index, parser, $.index, (start, $value: any, end) => {
      const $node = builder($value) as Type;

      return Object.freeze({
        ...$node,
        start,
        end,
      });
    });
  };
};

const COMMENT = builderWrapper<Comment>((comment) => {
  return {
    type: NodeType.COMMENT,
    ...comment,
  };
});

const ASSIGNMENT = builderWrapper<Assignment>((assignment) => {
  return {
    type: NodeType.ASSIGNMENT,
    ...assignment,
  };
});

const CONDITION = builderWrapper<Condition>((condition) => {
  return {
    type: NodeType.CONDITION,
    ...condition,
  };
});

const TITLE = builderWrapper<Title>((title) => {
  return {
    type: NodeType.TITLE,
    ...title,
  };
});

export const NodeBuilder = {
  COMMENT,
  ASSIGNMENT,
  CONDITION,
  TITLE,
};
