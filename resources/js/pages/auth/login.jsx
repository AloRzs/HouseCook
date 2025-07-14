import { Head } from '@inertiajs/react'
import { useState } from 'react';

export default function LoginForm() {
  function rember(){
    const [value, setValue] = useState(null);
  }
  return (
    <>
      <Head title='Welcome'/>
      <h1>Welcome</h1>
      <p>Hello Malongus, welcome to your first Inertia app!</p>
      <div>
        <p>esto es un formulario</p>
        <form onSubmit="{handleChange}" method='POST'>
          @csrf
          <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        </form>

      </div>
    </>
  )
}
