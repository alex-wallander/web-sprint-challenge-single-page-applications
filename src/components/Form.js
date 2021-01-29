import React from 'react'

export default function Form(props) {
    const { values, update, submit, errors, disabled } = props;

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <form className = 'form-container' onSubmit={onSubmit}>
            <div className='form-div'>
                <div className='img-container'>
                <h2>Build Your Own Pizza</h2>
                <img className='form-img' src='https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png' alt='pizza'/>
                </div>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.special}</div>
                </div>
                <div className='form-inputs'>
                    <label>
                        Build Your Own Pizza
                        <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        />
                    </label>
                    <label>
                        Choice of Size
                        <select name='size' value={values.size} onChange={onChange}>
                            <option value=''>Select</option>
                            <option value='small'>10"</option>
                            <option value='medium'>14"</option>
                            <option value='large'>16"</option>
                        </select>
                    </label>
                    <label>
                        Choice of Sauce
                        <input 
                        type='radio'
                        name='sauce'
                        value='Original Red'
                        checked={values.sauce === 'Original Red'}
                        onChange={onChange}
                        />
                        <input 
                        type='radio'
                        name='sauce'
                        value='Garlic Ranch'
                        checked={values.sauce === 'Garlic Ranch'}
                        onChange={onChange}
                        />
                        <input 
                        type='radio'
                        name='sauce'
                        value='BBQ Sauce'
                        checked={values.sauce === 'BBQ Sauce'}
                        onChange={onChange}
                        />
                        <input 
                        type='radio'
                        name='sauce'
                        value='Spinach Alfredo'
                        checked={values.sauce === 'Spinach Alfredo'}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Add Toppings
                        <input 
                        type='checkbox'
                        name='Pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                        <input 
                        type='checkbox'
                        name='Sausage'
                        checked={values.sausage}
                        onChange={onChange}
                        />
                        <input 
                        type='checkbox'
                        name='Onions'
                        checked={values.onions}
                        onChange={onChange}
                        />
                        
                        <input 
                        type='checkbox'
                        name='Spinach'
                        checked={values.spinach}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Special Instructions
                        <input 
                        value={values.special}
                        onChange={onChange}
                        name='special'
                        type='text'
                        />
                    </label>
                    <button className='submitBtn'>Add to Order</button>
                </div>


            </div>
        </form>
    )
}