export interface ColorsType {
    [index: string]: string,
    DOMESTIC: string
    CASH: string
    BONDS: string
    INTERNATIONAL: string
};

export interface AllocationType {
    category: String,
    value: Number
};

export interface PerformanceType {
    year: number,
    balance: string
};

export interface FundInfoType {
    managers: [{
        firstName: string,
        lastName: string,
        position: string
    }],
    quarters: [{
        title: string,
        details: [{
            name: string,
            value: string
        }]
    }]
};

export interface PositionType {
    symbol: string,
    name: string,
    currency: string,
    price: string,
    price_open: string,
    day_high: string,
    day_low: string,
    "52_week_high": string,
    "52_week_low": string,
    day_change: string,
    change_pct: string,
    close_yesterday: string,
    market_cap: string,
    volume: string,
    volume_avg: string,
    shares: string,
    stock_exchange_long: string,
    stock_exchange_short: string,
    timezone: string,
    timezone_name: string,
    gmt_offset: string,
    last_trade_time: string,
    pe: string,
    eps: string
};