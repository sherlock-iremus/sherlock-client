import { Route, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const AuthenticatedRoute = ({component: Component, ...rest}) => {
  const isAuth = useAuth();
  return (
    <Route {...rest} render={(props) =>
      (
        isAuth
          ? <Component {...props} />
          : <Redirect to='/'/>
      )}/>
  )
}

export default AuthenticatedRoute;