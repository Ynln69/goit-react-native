import { nanoid } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/config";

export const register = createAsyncThunk(
  "user/register",
  async (credentials) => {
    try {
      const { name, email, password } = credentials;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid } = userCredential.user;
      const userData = {
        user: { name, email },
        uid,
        posts: [],
      };
      await setDoc(doc(collection(db, "users"), uid), userData);
      return userData;
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        throw new Error("Даний email вже зареєстрований, спробуйте інший");
      } else {
        throw error;
      }
    }
  }
);

export const logIn = createAsyncThunk("user/logIn", async (credentials) => {
  try {
    const { email, password } = credentials;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = userCredential.user;
    const userDocRef = doc(db, "users", uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      return userData;
    }
  } catch (error) {
    throw new Error("LogIn failed. Пароль або email введені некоректно");
  }
});

export const logOut = createAsyncThunk("user/logOut", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const authStateChangeUser = createAsyncThunk(
  "user/authStateChangeUser",
  async () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const addUserPost = createAsyncThunk(
  "user/addUserPost",
  async (post) => {
    try {
      console.log(post);
      const user = auth.currentUser;
      if (!user) {
        return;
      }

      const userId = user.uid;
      const userRef = doc(db, "users", userId);
      const userDocSnapshot = await getDoc(userRef);
      if (!userDocSnapshot.exists()) {
        return;
      }

      const userData = userDocSnapshot.data();
      const newPost = {
        ...post,
        id: nanoid(),
      };
      const updatedPosts = [...userData.posts, newPost];
      const updatedUserData = {
        ...userData,
        posts: updatedPosts,
      };
      await setDoc(userRef, updatedUserData);
      return updatedUserData;
    } catch (error) {
      throw error;
    }
  }
);

export const addCommentToPost = createAsyncThunk(
  "user/addCommentToPost",
  async ({ postId, comment }) => {
    try {
      console.log(postId);
      if (comment.text === "") {
        throw new Error("Пусте поле, введіть текст");
      }
      const user = auth.currentUser;
      if (!user) {
        return;
      }

      const userId = user.uid;
      const userRef = doc(db, "users", userId);
      const userDocSnapshot = await getDoc(userRef);
      if (!userDocSnapshot.exists()) {
        return;
      }

      const userData = userDocSnapshot.data();
      const updatedPosts = userData.posts.map((post) => {
        if (post.id === postId) {
          const newComment = {
            userName: comment.userName,
            text: comment.text,
            date: Date.now(),
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      });

      const updatedUserData = {
        ...userData,
        posts: updatedPosts,
      };
      await setDoc(userRef, updatedUserData);
      console.log("Коментар успішно доданий до посту");
      return updatedUserData;
    } catch (error) {
      throw error;
    }
  }
);
