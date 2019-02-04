import { createStore, bindActionCreators } from 'redux';

// import { inc, dec, rnd } from './actions';
import * as actions from './actions';
import reducer from './reducer';

const store = createStore(reducer);
const { dispatch } = store;


// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const rndDispatch = (payload) => dispatch(rnd(payload));

// After refactoring
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };
//
// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd(payload, dispatch));

// And with standard Redux function bindActionCreators
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// Mass binding
// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd
// }, dispatch);

// And one more refactoring
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// document.getElementById('inc').addEventListener('click', () => incDispatch());
//
// document.getElementById('dec').addEventListener('click', () => decDispatch());
//
// document.getElementById('rnd').addEventListener('click', () => {
//   const randomValue = Math.floor(Math.random() * 10);
//   rndDispatch(randomValue);
// });

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 10);
  rnd(randomValue);
});

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);
