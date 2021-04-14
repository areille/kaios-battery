import type { Battery } from "./battery";

export interface KNavigator extends Navigator {
    battery: Battery;
    getBattery: () => Promise<Battery>
}
