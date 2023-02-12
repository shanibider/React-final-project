import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';

export default function AdminRoute({ children }) {
  //for userInfo- we bring it from useContext like always, and extract state from it
  //than from state we extract userInfo
  const { state } = useContext(Store);
  const { userInfo } = state;
  //if userInfo exist and userInfo.isAdmin is true than we direct user to protected section otherwise we direct to signin page
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}
