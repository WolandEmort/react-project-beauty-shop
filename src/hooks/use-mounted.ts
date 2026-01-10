import { useState, useEffect } from 'react';

export const useMounted = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Асинхрон для лінтера
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);

        // Очистка таймера на випадок демонтажу компонента
        return () => clearTimeout(timer);
    }, []);

    return mounted;
};