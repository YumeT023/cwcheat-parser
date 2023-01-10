export enum NodeType {
  CONDITION = "Condition",
  ASSIGNMENT = "Assignment",
  TITLE = "Title",
  COMMENT = "Comment",
}

export interface Node {
  type: NodeType;
}

/**
 * @interface LabelNode
 * @description LabelNode is a node which is used for description
 */
interface LabelNode extends Node {
  content: string;
}

/**
 * @interface Comment is for label, which is used to write note anywhere after statement or after any line (<i>like every comment in programming lang</i>)
 */
export interface Comment extends LabelNode {}

/**
 * @interface Title is for label, but is a bit specific because it has <i>status</i> the status is used to enable or disable a block of code
 */
export interface Title extends LabelNode {
  status: string;
}

/**
 * @interface Expression is each 8 digitized value after <span>0x</span>
 */
export interface Expression extends Node {}

/**
 * @interface Statement is the combination of two expression to accomplish an action with an address
 */
export interface Statement extends Node {
  comment?: Comment;
}

/**
 * @interface Condition is a statement that is used to check a value through a logical comparator through a value pointed by an address
 */
export interface Condition extends Statement {
  expected: LCondition;
  actual: RCondition;
}

export interface LCondition extends Expression {
  byte: string;
  lineNumber: string;
  value: string;
}

export interface RCondition extends Expression {
  method: string;
  address: string;
}

/**
 * @interface Assignment is a statement that is used to assign a value to an address
 */
export interface Assignment extends Statement {
  identifier: LAssignment;
  value: RAssignment;
}

export interface LAssignment extends Expression {
  byte: string;
  address: string;
}

export interface RAssignment extends Expression {
  data: string;
}
