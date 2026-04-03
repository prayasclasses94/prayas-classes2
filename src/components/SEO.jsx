import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = "description";
                meta.content = description;
                document.head.appendChild(meta);
            }
        }
    }, [title, description, location]);

    return null;
};

export default SEO;
