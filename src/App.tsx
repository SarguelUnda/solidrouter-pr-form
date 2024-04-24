import { Form, Route, Router, action } from '@solidjs/router';
import { ParentProps, createSignal, mergeProps, onMount } from 'solid-js';

const [count, setCount] = createSignal(0)

const myAction = action(async (data: FormData) => {
  setCount(c => c * 10)
  console.log("ACTION")
});


const MyForm = () => {
  return <Form action={myAction} method="post">
    <input name="foo" />
    <input name="bar" />
    <button type="submit">POST ME</button>
    <button name="getsubmit" type="submit" formMethod='get' formAction="newroute" >GET ME</button>
  </Form>
}

const R = (props: ParentProps) => {
  setInterval(() => setCount(c => c + 1), 1000)

  return <>
    {count()}
    <hr />
    {props.children}
  </>

}

const App = () => {
  return <Router root={R} >
    <Route path="*" component={MyForm} />
  </Router>
}

export default App;
