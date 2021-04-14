export interface Battery {
    level: number;
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    health: BatteryHealth;
    present: boolean;
    temperature: number;
    onlevelchange: () => any;
    onchargingchange: () => any;
    onchargingtimechange: () => any;
    ondischargingtimechange: () => any;
}

enum BatteryHealth {
    Good, Overheat, Cold, Warm, Cool, Unknown
}