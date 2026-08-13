// #gi01MZ6v
//
// з arrays.js взяти масив coursesTitleArray. Вивести кожен його елемент, створивши необхідні моделі та компоненти
//
// Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).

import './App.css'

const coursesTitleArray: string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

const App = () => {
    return (
    <>
        <ul>
            {
                coursesTitleArray.map((course, index) => <li key={index}>{course}</li>)
            }
        </ul>
    </>
  );

}


export default App
