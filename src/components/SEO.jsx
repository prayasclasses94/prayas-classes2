import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, schema, canonical }) => {
    const location = useLocation();

    useEffect(() => {
        const baseUrl = "https://www.prayasclasses.com";
        const ogImageUrl = baseUrl + "/og-image.png";

        if (title) {
            document.title = title;
        }

        const updateMetaTag = (attr, value, content, isProperty = false) => {
            const selector = isProperty ? `meta[property="${attr}"]` : `meta[name="${attr}"]`;
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                if (isProperty) element.setAttribute('property', attr);
                else element.name = attr;
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        if (description) {
            updateMetaTag('description', 'name', description);
            updateMetaTag('og:description', 'property', description, true);
        }

        // Title OG
        if (title) {
            updateMetaTag('og:title', 'property', title, true);
            updateMetaTag('twitter:title', 'name', title);
        }

        // Image OG
        updateMetaTag('og:image', 'property', ogImageUrl, true);
        updateMetaTag('twitter:image', 'name', ogImageUrl);
        updateMetaTag('twitter:card', 'name', 'summary_large_image');

        // Canonical Link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonical || window.location.origin + location.pathname);

        // JSON-LD Schema
        const existingScript = document.getElementById('json-ld-schema');
        if (existingScript) {
            existingScript.remove();
        }

        if (schema) {
            const script = document.createElement('script');
            script.id = 'json-ld-schema';
            script.type = 'application/ld+json';
            script.innerHTML = JSON.stringify(schema);
            document.head.appendChild(script);
        }
    }, [title, description, schema, canonical, location]);

    return null;
};

export default SEO;
