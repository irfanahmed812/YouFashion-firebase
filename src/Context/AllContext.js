import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)

const AllContext = ({ children }) => {

    // shop components
    const [cart, setCarts] = useState([]);

    // => add to cart
    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCarts(newCart);
    }

    // => clear cart
    const clearCart = () => {
        setCarts([])
    }

    // sign up with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please verify your email. To verify email to check your mail inbox')
            })
    }

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    // google login
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubProvider = new GithubAuthProvider();

    // facebook login
    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    // login with email, password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // reset login password
    const [userEmail, setUserEmail] = useState('');

    const handleOnReset = () => {

        if (!userEmail) {
            alert('Please enter your email');
            return
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert(`Reset password link send your mail. Please check '${userEmail}' this email inbox`)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // logout, login system
    const [user, setUser] = useState({});

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                console.log(error);
            })
    }

    // => user obserbasion
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // loading
            setLoading(false);
            console.log('Auth changed current user', currentUser);
        })
        return () => unsubscribe();
    }, []);

    // loading
    const [loading, setLoading] = useState(true);

    // provider value
    const authInfo = { createUser, updateUserName, verifyEmail, googleSignIn, signIn, handleOnReset, setUserEmail, user, logOut, handleAddToCart, clearCart, cart, loading, auth, githubProvider, handleFacebookLogin }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AllContext;