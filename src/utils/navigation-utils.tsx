import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const handleNavigation = (target: string, navigate: any) => {
    if (target.startsWith('#')) {
        const sectionId = target.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // Navigate to Home page and scroll to section
            navigate('/', { state: { scrollTo: sectionId } });
        }
    } else {
        navigate(target);
    }
};

// Hook to handle scroll on navigation with state and top scroll on new pages
export const useScrollOnNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { state } = location;
        if (state?.scrollTo) {
            const section = document.getElementById(state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            // Scroll to top on new page load if no scrollTo state
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location, navigate]);
};