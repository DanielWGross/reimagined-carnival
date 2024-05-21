import { jwtDecode } from 'jwt-decode';

// Need a function that will take in a JWT, and put it in local storage

export const login = (jwt) => {
  localStorage.setItem('token', jwt);
};

// Need a function that will be able to get a token from local storage and decode it into its values
export const decodeToken = () => {
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  return decoded;
};
