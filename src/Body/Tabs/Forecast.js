import { useEffect, useState } from 'react';
import TimeSelector from './TimeSelector';
import Map from './Map';
import { getForecast } from '../../services/apiService';
import ErrorModal from '../../ErrorModal';

function Forecast() {

    const [errorMessage, setErrorMessage] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        (async function () {
            const response = await getForecast();
            const data = await response.json();
            setForecastData(data);
        })()
    }, []);

    return (
        <>
            <TimeSelector data={forecastData} />
            <Map />
            <ErrorModal message={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    );
}

export default Forecast;