import {coursesArray} from "../../data/data.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import './CoursesComponent.css'

// #yiugR7&TF
//
// з arrays.js взяти масиви coursesArray. Створити необхідні моделі та компоненти для того, щоб повноцінно відобразити його
//
// Стилізація довільна, але обов'язково підключена і мінімально зроблена (хоча б один стиль, який працює).
//
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