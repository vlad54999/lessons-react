import type {ICourse} from "../../models/ICourse.ts";
import type {ReactNode} from "react";
import './CourseComponent.css'

interface CourseComponentProps {
    item: ICourse,
    children?: ReactNode
}

export const CourseComponent = ({item}: CourseComponentProps) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <h3>{item.monthDuration} {item.hourDuration}</h3>
            <ul>{item.modules.map((module) => (<li key={module}>{module}</li>))}</ul>
        </div>
    );
};