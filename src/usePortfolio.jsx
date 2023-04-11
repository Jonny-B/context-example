import React, { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';

const usePortfolio = (app = 'portfolio') => {

    const theme = useContext(ThemeContext);


    switch (app) {
        case 'portfolio':
            return () => <a href="https://theblewitts.online/" className={theme}> Portfolio</a>;
        case 'galaxy':
            return () => <a href="https://theblewitts.online/galaxy-sim/" className={theme}> Galaxy Sim</a>;
        default:
            return () => <a href="https://codepen.io/jonny-b/pen/zYwwZBq" className={theme}> Blast Off</a>;
    }
};

export default usePortfolio;
