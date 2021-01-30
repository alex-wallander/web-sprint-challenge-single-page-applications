import React from 'react'

export default function Form(props) {
    const { values, change, submit, errors } = props;

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };


    return (
        <form className = 'form-container' onSubmit={onSubmit}>
            <div className='form-div'>
                <div className='img-container'>
                <h2 className='img-head'>Build Your Own Pizza</h2>
                <img className='form-img' src='https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png' alt='pizza'/>
                </div>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.pepperoni}</div>
                    <div>{errors.sausage}</div>
                    <div>{errors.onions}</div>
                    <div>{errors.spinach}</div>
                    <div>{errors.special}</div>
                </div>
                <div className='form-inputs'>
                    <div className='build'>
                        <h2>Build Your Own Pizza</h2>
                    <label>
                        <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        />
                    </label>
                    </div>
                    <div className='size-div'>
                        <h2>Choice of Size</h2>
                    <label>
                        <select name='size' value={values.size} onChange={onChange}>
                            <option value=''>Select</option>
                            <option value='small'>10"</option>
                            <option value='medium'>14"</option>
                            <option value='large'>16"</option>
                        </select>
                    </label>
                    </div>
                    <div>
                        <h2 className='sauce'>Choice of Sauce</h2>
                    <label>
                        Original Red
                        <input 
                        type='radio'
                        name='sauce'
                        value='Original Red'
                        checked={values.sauce === 'Original Red'}
                        onChange={onChange}
                        />
                        </label>

                        <label>
                        Garlic Ranch
                        <input 
                        type='radio'
                        name='sauce'
                        value='Garlic Ranch'
                        checked={values.sauce === 'Garlic Ranch'}
                        onChange={onChange}
                        />
                    </label>
                    </div>
                    <div>
                        <h2>Add Toppings</h2>
                    <label>
                        Pepperoni
                        <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                        </label>
                        <label>
                            Sausage
                        <input 
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                        />
                        </label>
                        <label>
                            Onions
                        <input 
                        type='checkbox'
                        name='onions'
                        checked={values.onions}
                        onChange={onChange}
                        />
                        </label>
                        <label>
                            Spinach
                        <input 
                        type='checkbox'
                        name='spinach'
                        checked={values.spinach}
                        onChange={onChange}
                        />
                    </label>
                    </div>
                    <div>
                        <h2>Special Instructions</h2>
                    <label>
                        <input 
                        value={values.special}
                        onChange={onChange}
                        name='special'
                        type='text'
                        />
                    </label>
                    </div>
                    <div>
                    <button className='submitBtn'>Add to Order</button>
                </div>
                </div>


            </div>
        </form>
    )
}