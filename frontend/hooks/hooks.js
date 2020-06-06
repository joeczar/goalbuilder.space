import { useEffect } from 'react';

export const useOnClick = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};
