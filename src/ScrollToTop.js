import { useEffect } from "react";
import { useLocation } from "react-router";

// The component below will make sure everytime a router page changes, displays the new one at the top of the page.
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}