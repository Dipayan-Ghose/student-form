import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import AddStudent from "../Pages/AddStudent/AddStudent";
import ManageStudent from "../Pages/ManageStudent/ManageStudent";
import Logout from "../Pages/Logout/Logout";
import EditStudents from "../Pages/ManageStudent/EditStudents";

export const Routes= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AddStudent></AddStudent>
            },
            {
                path: 'manageStudent',
                loader: ()=> fetch('https://student-form-server-chi.vercel.app/info'),
                element: <ManageStudent></ManageStudent>
            },
            {
                path: 'logout',
                element: <Logout></Logout>
            },
            {
                path: '/editStudent',
                element: <EditStudents></EditStudents>
            }
        ]
    }
])