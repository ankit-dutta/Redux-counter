import { Component } from 'react';

import { useSelector , useDispatch , connect} from 'react-redux';
import { counterActions, INCREMENT } from '../store';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () =>{
    dispatch(counterActions.increment())
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  }

  const incrementByfiveHandler = () =>{
    dispatch(counterActions.increase(5))
  }

  const decrementByfiveHandler = () =>{
    dispatch(counterActions.decrease(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
{   show &&   <div className={classes.value}>-- {counter} --</div>}
    <div>
      <button onClick = {incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Dexrement</button>
      <br></br>

      <button onClick={incrementByfiveHandler}>IncrementBy5</button>
      <button onClick={decrementByfiveHandler}>DecrementBy5</button>

    </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>


    </main>
  );
};
export default Counter;


// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment()
//   }

//   decrementHandler(){
//     this.props.decrement()
//   }

//   toggleCounterHandler(){}
   
//   render(){
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>-- {this.props.counter} --</div>

//     <div>
//       <button onClick = {this.incrementHandler.bind(this)}>Increment</button>
//       <button onClick={this.decrementHandler.bind(this)}>Dexrement</button>
//     </div>

//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>


//     </main>
//   );
// }
// }

// const mapStateToProp = state => {
//   return {
//      counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),

//   }
// }

// export default connect(mapStateToProp,mapDispatchToProps )(Counter);
