import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersComponent} from "./components/UsersComponent/UsersComponent.tsx";
import {PostsComponent} from "./components/PostsComponents/PostsComponent.tsx";
import {CommentsComponent} from "./components/CommentsComponent/CommentsComponent.tsx";
import {ProductsComponent} from "./components/ProductsComponent.tsx";
import App from "./App.tsx";
import {CCjsonplaceholder} from "./components/CommentsComponent/CCjsonplaceholder.tsx";
import {CCdummyjson} from "./components/CommentsComponent/CCdummyjson.tsx";
import {UCjsonplaceholder} from "./components/UsersComponent/UCjsonplaceholder.tsx";
import {UCdummyjson} from "./components/UsersComponent/UCdummyjson.tsx";
import {PCdummyjson} from "./components/PostsComponents/PCdummyjson.tsx";
import {PCjsonplaceholder} from "./components/PostsComponents/PCjsonplaceholder.tsx";





createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route path={'users'} element={<UsersComponent/>}>
                    <Route path={'jsonplaceholder'} element={<UCjsonplaceholder/>}/>
                    <Route path={'dummyjson'} element={<UCdummyjson/>}/>
                </Route>
                <Route path={'posts'} element={<PostsComponent/>}>
                    <Route path={'jsonplaceholder'} element={<PCjsonplaceholder/>}/>
                    <Route path={'dummyjson'} element={<PCdummyjson/>}/>
                </Route>
                <Route path={'comments'} element={<CommentsComponent/>}>
                    <Route path={'jsonplaceholder'} element={<CCjsonplaceholder/>}/>
                    <Route path={'dummyjson'} element={<CCdummyjson/>}/>
                </Route>
                <Route path={'products'} element={<ProductsComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>);
