import {NodeSpec, MarkSpec, SchemaSpec, Schema} from "prosemirror-model"

const nodes: NodeSpec = {
    text: {},
    doc: {content: "text*"}
}

const marks: MarkSpec = {

}

export const mySchemaSpec: SchemaSpec = {
    nodes,
    marks
}

export const mySchema = new Schema(mySchemaSpec)