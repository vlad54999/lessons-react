import {Link, Outlet} from "react-router-dom";

export const CommentsComponent = () => {


    return (
        <div>
            <h2>Comments component</h2>
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
                </li>
                <li>
                    <Link to={'dummyjson'}>dummyjson</Link>
                </li>
            </ul>

            <Outlet/>
        </div>
    );
};