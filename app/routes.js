import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("Layout/Layout.jsx", [
        index("routes/Home/Home.jsx"),
        route("/courses", "routes/Courses.jsx"),
        route("/about", "routes/About.jsx"),
        route("/contact", "routes/Contact.jsx"),
    ])
];
