import React from 'react';
import './css/currency';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function Currency() {
    return (
        <div className='Currency-div'>
            <div>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div style={{ marginTop: '25px' }}>
                <input type="number" className='amount' />
                <select className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: '25px', marginRight: '10px' }} />
                <select className='to-currency-option'>
                    <option>TL</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input type='number' className='result' />
                <button>Çevir</button>
            </div>
        </div>
    );
}

export default Currency;
