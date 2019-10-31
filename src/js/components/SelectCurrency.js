"user strict";

import React from 'react';
import PropTypes from 'prop-types';

const SelectCurrency = ({ currencies, onSelectCurrency }) => {
    return (
        <select onChange={(e) => onSelectCurrency(e.target.value)}>
            {
                currencies.map(currency => {
                    const { code, name } = currency
                    return <option
                        key={currency.code}
                        value={currency.code}>{currency.name}</option>
                })
            }
        </select>
    )
}

SelectCurrency.PropTypes = {
    currencies: PropTypes.array.isRequired,
    onSelectCurrency: PropTypes.func.isRequired
};

export default SelectCurrency;