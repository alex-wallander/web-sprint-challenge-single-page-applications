import React from 'react'

export default function Form(props) {
    const { values, update, submit, errors } = props;

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
                    <label>
                        Add Toppings
                        <input 
                        type='checkbox'
                        name='Pepperoni'
                        checked={values.toppings}
                        onChange={onChange}
                        />
                        <input 
                        type='checkbox'
                        name='Sausage'
                        checked={values.toppings}
                        onChange={onChange}
                        />
                        <input 
                        type='checkbox'
                        name='Onions'
                        checked={values.toppings}
                        onChange={onChange}
                        />
                        
                        <input 
                        type='checkbox'
                        name='Spinach'
                        checked={values.toppings}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Special Instructions
                        <input 
                        value={values.toppings}
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