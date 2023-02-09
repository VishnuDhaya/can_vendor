import React from 'react';
import { AppRouteComponent } from './routes/AppRouteComponent';
import { useSelector} from 'react-redux';

const App = () => {

  const { loggedIn } = useSelector(state => state.userDetailsState)


  return (
    <>
      <AppRouteComponent isHasAuth = { loggedIn } />
    </>
  );
};

export default App;