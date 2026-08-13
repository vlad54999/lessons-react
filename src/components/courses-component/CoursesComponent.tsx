import {coursesArray} from "../../data/data.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import './CoursesComponent.css'
export const CoursesComponent = () => {
    return (
        <div>
            {
                coursesArray.map(course => <CourseComponent item={course}>

                </CourseComponent>)
            }
        </div>
    );
};