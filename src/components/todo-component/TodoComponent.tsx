import type {FC} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";

type PropType = {todo:TodoModel}
export const TodoComponent:FC<PropType> = ({todo: {title, id, completed}}) => {
    return (
        <div>{id} {title} {completed.toString()}</div>
    );
};