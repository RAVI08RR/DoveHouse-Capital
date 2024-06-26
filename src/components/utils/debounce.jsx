import { useState, useCallback } from 'react';
// Debounce function
export const useDebounce = (callback, delay) => {
    const [timer, setTimer] = useState(null);

    const debouncedCallback = useCallback((...args) => {
        if (timer) clearTimeout(timer);
        const newTimer = setTimeout(() => {
            if (callback) {
                callback(...args);
            }

        }, delay);
        setTimer(newTimer);
    }, [callback, delay]);

    return debouncedCallback;
};