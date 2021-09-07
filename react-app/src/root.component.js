import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;
  return (
    <Router basename="/react">
      <div>
        <Link to="/">Home React</Link>
        <span style={{ display: 'inline-block', width: 10 }}></span>
        <Link to="/about">About React</Link>
      </div>
      <br />

      <Switch>
        <Route path="/" exact={true} component={() => <h1>Home</h1>}></Route>
        <Route path="/about" component={() => <h1>About</h1>}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}
