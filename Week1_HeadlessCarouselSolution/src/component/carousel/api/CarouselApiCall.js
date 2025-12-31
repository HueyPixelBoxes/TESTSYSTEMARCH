export default function getImagePaths() {
    const images = [
        "img/User1.jpg",
        "img/User2.jpg",
        "img/User3.jpg",
        "img/User4.jpg",
        "img/User5.jpg",
        "img/User6.jpg",
        "img/User7.jpg",
        "img/User8.jpg",
        "img/User9.jpg"
    ];

    return images;
}


/*...existing code...
import React, { useEffect, useState, useRef } from 'react';

const useCarouselEventHandlers = (images = [], apiUrl = null) => {
    const [items, setItems] = useState(images || []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCarouselActive, setIsCarouselActive] = useState(false);
    const activityTimeoutRef = useRef(null);

    // Fetch data if apiUrl is provided
    useEffect(() => {
        if (!apiUrl) return;

        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl, { signal: controller.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                // Expect data to be an array of items; adapt if your API shape differs
                setItems(Array.isArray(data) ? data : []);
                setCurrentIndex(0);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Failed to load carousel data:', err);
                }
            }
        };

        fetchData();
        return () => controller.abort();
    }, [apiUrl]);

    // Auto-advance when carousel is not active (user interacting)
    useEffect(() => {
        if (items.length === 0) return;

        if (!isCarouselActive) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === items.length - 1 ? 0 : prevIndex + 1
                );
            }, 2000); // 2 seconds

            return () => clearInterval(interval);
        } else {
            // Clear previous timeout, then set a new one to resume auto-play after 5s
            if (activityTimeoutRef.current) clearTimeout(activityTimeoutRef.current);
            activityTimeoutRef.current = setTimeout(() => {
                setIsCarouselActive(false);
                activityTimeoutRef.current = null;
            }, 5000);

            return () => {
                if (activityTimeoutRef.current) {
                    clearTimeout(activityTimeoutRef.current);
                    activityTimeoutRef.current = null;
                }
            };
        }
    }, [items.length, isCarouselActive]);

    const activate = () => {
        setIsCarouselActive(true);
    };

    const goToSlide = (index) => {
        if (items.length === 0) return;
        setCurrentIndex(Math.max(0, Math.min(index, items.length - 1)));
        activate();
    };

    const goToPrevious = () => {
        if (items.length === 0) return;
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        activate();
    };

    const goToNext = () => {
        if (items.length === 0) return;
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        activate();
    };

    return { items, currentIndex, goToSlide, goToPrevious, goToNext };
};

export default useCarouselEventHandlers;
*/