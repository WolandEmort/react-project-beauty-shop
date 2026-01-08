'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToasterProvider = () => {
    return (
        <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" // Можна 'light', 'dark' або 'colored'
            // 👇 Цей стиль примусово підніме тостер над усім іншим (вирішує проблему невидимості)
            style={{ zIndex: 99999 }}
        />
    );
};

export default ToasterProvider;