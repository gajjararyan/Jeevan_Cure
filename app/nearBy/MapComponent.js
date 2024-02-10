// MapComponent.js
import { useEffect } from 'react';

const MapComponent = () => {
    useEffect(() => {
        // JavaScript code for initializing the map
        const script = document.createElement('script');
        script.src = 'https://apis.mappls.com/advancedmaps/api/d741d25a626bd4a4836db5d888457647/map_sdk?layer=vector&v=3.0&callback=initMap1';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div id="nearby_search" style={{ margin: '5px', width: '99%', height: '250px', overflowY: 'auto', borderRadius: '10px' }}></div>
            <div id="map" style={{ width: '100%', height: '100vh', margin: '0', padding: '0' }}></div>
        </div>
    );
};

export default MapComponent;
