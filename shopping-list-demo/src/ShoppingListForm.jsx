import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';

export default function ShoppingListForm({ addItem }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (formData) => {
    addItem(formData);
  };

  const registeredOptions = {
    product: {
      required: 'Required',
      minLength: {
        value: 2,
        message: 'Product name cannot be less than 2 characters!',
      },
    },
    qty: {
      required: 'Required',
      min: {
        value: 1,
        message: 'Quantity should be greater than 0',
      },
    },
  };

  return (
    <form action="" className="ShoppingList" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="product">Product Name: </label>
        <input
          type="text"
          name="product"
          id="product"
          {...register('product', registeredOptions.product)}
        />
        <small>{errors.product && errors.product.message}</small>
      </fieldset>
      <fieldset>
        <label htmlFor="qty">Quantity: </label>
        <input
          type="number"
          name="qty"
          id="qty"
          {...register('qty', registeredOptions.qty)}
        />
        <small>{errors.qty && errors.qty.message}</small>
      </fieldset>
      <button type="submit">Add Item</button>
    </form>
  );
}
