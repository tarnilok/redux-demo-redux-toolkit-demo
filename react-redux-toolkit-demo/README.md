- REACT REDUX TOOLKIT
- npm create vite@latest react-redux-toolkit-demo in main folder
- to provide the redux store to our react application react redux library exports a component called provider
- wrap the app with provider
- then we need to specify to know our redux store as a prop 
  <code><Provider store={store}>
      <App />
    </Provider></code>
- useSelector hook
    - is used to get hold of any state that is maintained in the redux store
    - to read data from the redux-store in a react component we use the useSelector hook
    - it is sort of a wrapper around store.getState()
- useDispatch hook
    - is used to dispatch an action with react redux
- !! store only as much state as you need in the redux store. everything else can just be local component state.
- Redux DevTools =>  time travel debugging, dispatch on browser,state and action visibilities 