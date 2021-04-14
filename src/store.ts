import { readable } from 'svelte/store';
import type { Battery } from './battery';
import type { KNavigator } from './navigator';

export const battery = readable<Battery>(undefined, function start(set) {
    (navigator as KNavigator).getBattery().then((battery) => {
        console.log(battery);
        set(battery);
        battery.onlevelchange = () => {
            console.log('Level changed');
            set(battery);
        }
        battery.onchargingchange = () => {
            console.log('Charging changed');
            set(battery);
        }
        battery.onchargingtimechange = () => {
            console.log('Charging time changed');
            set(battery);
        }
        battery.ondischargingtimechange = () => {
            console.log('Dicharging time changed');
            set(battery);
        }
    });

    return function stop() { }
});