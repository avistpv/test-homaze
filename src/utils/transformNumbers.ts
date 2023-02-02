export const formatCurrency = (num: number) =>
    num.toLocaleString('en-US',
        {style: 'currency', currency: 'USD'});

export const formatDate = (date: string | number) =>
    new Date(date).toLocaleDateString(
        'de-DE',
        {year: 'numeric', month: 'numeric', day: 'numeric'}
    )
