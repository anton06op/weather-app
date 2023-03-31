import { useEffect } from 'react';
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { getWeather } from '../../services/apiService';

function Now() {

    useEffect(() => {
        (async function () {
            const weather = await getWeather();
            const response = await weather.json(); // при запросах нужно всё перенаправлять в JSON
            console.log('response', response);
        })() // Immediately Invoked Function - синтаксис объявления и моментального запуска функции (пример эквивалентной функции ниже)
    }, []); // Добавляем пустой массив зависимостей для того, чтобы не отправлялся запрос при каждом рендере компонента

    /*
    async function test() {
      const weather = await getWeather();
      const response = await weather.json();
      console.log('response', response);
    }
    test();
    */

    return (
        <>
            <TimeSelector id="now" />
            <Map />
        </>
    );
}

export default Now;