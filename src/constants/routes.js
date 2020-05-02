import React from "react";
import Posts from "../pages/Posts";

export default [
    {
        label: 'Posts',
        path: '/posts',
        render: <Posts/>,
    },
    {
        label: 'About',
        path: '/about',
        render: null
    },
];