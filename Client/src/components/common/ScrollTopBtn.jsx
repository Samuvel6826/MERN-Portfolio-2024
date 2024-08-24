import React, { useEffect } from 'react';

const ScrollToTopButton = () => {
    useEffect(() => {
        const scrollToTopButton = document.getElementById('scroll-to-top-btn-container');

        const scrollFunction = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        };

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return <>
        <div id="scroll-to-top-btn-container" className='hidden'>
            <button
                id="scroll-to-top-btn"
                onClick={topFunction}
                title="Go to top"
                className='fixed bottom-12 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-tertiary text-xl leading-none text-white'
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M286.67-350.33 240-397l240-240 240 240-46.67 46.67-193.33-193-193.33 193Z" /></svg>
            </button>
        </div>
    </>
};

export default ScrollToTopButton;


