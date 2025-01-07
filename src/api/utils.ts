export const formatCurrency = (value: number): string =>
    `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const formatMarketCap = (value: number): string =>
    value >= 1e9
        ? `$${(value / 1e9).toFixed(2)}B`
        : value >= 1e6
            ? `$${(value / 1e6).toFixed(2)}M`
            : `$${value.toLocaleString()}`;
