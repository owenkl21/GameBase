import React from 'react';
import categories from './categies';
import { Field, FieldValues, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description must contain at least 3 characters' })
    .max(50, {
      message: 'Description is too long, must be less than 50 characters',
    }),
  amount: z
    .number({ message: 'Amount is required' })
    .min(0.01, { message: 'Amount cannot be 0 or below' })
    .max(100000, { message: 'Amount is too high, must be less than 100000' }),
  category: z.enum(categories, { message: 'Category is required' }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      action=""
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register('description')}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register('category')} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className="mb-5 btn btn-primary"
      >
        Add
      </button>
    </form>
  );
};

export default ExpenseForm;
