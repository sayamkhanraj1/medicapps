import { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    //user hook for email/google signin
    const [user, setUser] = useState({});
    //hook for refresh handling
    const [isLoading, setIsLoading] = useState(true);

    //success set
    const [success, setSuccess] = useState('');

    //error set
    const [authError, setAuthError] = useState('');
    const [passError, setPassError] = useState('');

    //assigning admin status
    const [admin, setAdmin] = useState(false);

    //auth for everyone
    const auth = getAuth();


    //registration functionality 
    const singInIUseingGoogle = () =>{
        setIsLoading(true)
          const googleProvider = new GoogleAuthProvider();
          return signInWithPopup(auth, googleProvider)
          .then(result => {
                 const user = result.user;
                 saveUser(user.email, user.displayName, 'POST')
          }).catch(error => {

          })
          .finally(() => setIsLoading(false));
 };

    //login functionality
    const loginUser = (email, password, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/');
                setSuccess('User Login Succesfull!');
                setPassError('');
                setAuthError('');
            })
            .catch((error) => {
                setPassError("Your Email or Password Could Be Incorrect or Empty!");
                setAuthError('');
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }

    //observing user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    //handling signout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setSuccess('');
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }

    //if user registers once he will be saved in database

        const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
         fetch('https://vast-anchorage-14417.herokuapp.com/users', {
             method: method,
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(user)
         })
     }

    // //assigning admin functionality

      useEffect(() => {
        fetch(`https://vast-anchorage-14417.herokuapp.com/users/${user.email}`)
             .then(res => res.json())
            .then(data => setAdmin(data.admin))
     }, [user.email])
    

    return {
        user,
        isLoading,
        loginUser,
        logOut,
        admin,
        success,
        setAuthError,
        authError,
        passError,
        singInIUseingGoogle


    }
};

export default useFirebase;