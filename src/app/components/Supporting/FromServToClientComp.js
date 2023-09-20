

export default function FromServToClientComp(props) {
    console.log(props.currencyRates);
    return (
        <div>
            {Object.keys(props.currencyRates).map((currency, index) => (
                <div key={index}>
                    <p>{currency}: {props.currencyRates[currency]}</p>
                </div>
            ))}
        </div>
    )
}
