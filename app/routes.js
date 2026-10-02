import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("Layout/Layout.jsx", [
        index("routes/Home/Home.jsx"),
        route("/courses", "routes/Courses/Courses_Comp.jsx"),
        route("/about", "routes/About.jsx"),
        route("/contact-us", "routes/ContactUs/ContactUs.jsx"),
        route("/testimonial", "routes/Testimonial/Testimonial.jsx"),
    ])
];


