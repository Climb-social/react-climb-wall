import React from 'react';
import Wall from './components/Wall.jsx';

const Bootstrapper = {
    start() {
        React.render(<Wall collectionId="55a7d29945284ef60c0ce772"/>, document.getElementById('app'));
    }
};

export default Bootstrapper;