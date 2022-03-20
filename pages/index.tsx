/* eslint-disable react/jsx-props-no-spreading */
// index.tsx
import { FC } from 'react';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';

interface IFormType {
  email: string;
  password: string;
}

const Home: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormType>();

  function submitHandler(data: IFormType): SubmitHandler<IFormType> {
    console.log(data);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>ReceitaClient</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input type="text" defaultValue="fadhil@gmail.com" {...register('email')} />
          <br />
          <br />

          <input type="password" {...register('password', { required: true })} />
          <br />
          <br />
          {errors.password && <p>Required</p>}

          <input type="submit" />
        </form>
      </main>
    </div>
  );
};

export default Home;
