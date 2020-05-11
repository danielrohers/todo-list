import './style.scss';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useStore } from 'src/store';
import { fetchSignIn, fetchSignUp } from 'src/store/user/actions';
import { clearError } from 'src/store/error/actions';

import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { ButtonLink } from 'src/components/ButtonLink';
import { Error } from 'src/components/Error';

function SignUp() {
  const { dispatch } = useStore();

  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;

    dispatch(fetchSignUp({
      name: target.name.value,
      email: target.email.value,
      password: target.password.value
    }));
  }
  return (
    <form onSubmit={onSubmit}>
      <Input name="name" placeholder="Name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="password" type="password" placeholder="Password" required />
      <Button type="submit">Sign up</Button>
    </form>
  );
}

function SignIn() {
  const { dispatch } = useStore();

  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;

    dispatch(fetchSignIn({
      email: target.email.value,
      password: target.password.value
    }));
  }

  return (
    <form onSubmit={onSubmit}>
      <Input type="email" name="email" placeholder="Email" required />
      <Input type="password" name="password" placeholder="Password" required />
      <Button type="submit">Sign in</Button>
    </form>
  );
}

export function Auth() {
  const { state, dispatch } = useStore();
  const history = useHistory();
  const [ signIn, setSignIn ] = useState(true);

  if (state.user) {
    history.replace('/');
    return '';
  }

  const Component = signIn ? SignIn : SignUp;

  const onClick = () => {
    setSignIn(!signIn);
    dispatch(clearError());
  };

  return (
    <section className="Auth box">
      <h1 className="Auth-title">Sign { signIn ? 'in' : 'up' }</h1>

      <div className="Auth-form">
        <Component />
        <ButtonLink onClick={onClick}>{ signIn ? 'Create account' : 'Back' }</ButtonLink>
        <Error />
      </div>
    </section>
  );
}
