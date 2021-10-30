// Any component that wants auth state
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';

export default function Main(props) {
  // Get auth state and re-render anytime it changes
  const auth = useAuth();
  return <>{auth.user ? <Dashboard /> : <Login></Login>}</>;
}
