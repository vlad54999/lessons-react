import {Link, Outlet} from "react-router-dom";

export const PostsComponent = () => {
    return (
        <div>
            <h2>Posts components</h2>
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