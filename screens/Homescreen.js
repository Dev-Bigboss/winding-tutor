import React from 'react';
import Tabs from './Tabs';
import Home from './Home';
import Modules from './Modules';


export default function HomeScreen() {
    return (
        <Tabs Home={Home} Modules={Modules}  />
    );
}