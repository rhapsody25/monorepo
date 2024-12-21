import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

export const updateUser = async (user: User) => {
  await db.collection("USERS").doc(user.id).set(user);
};

export const fetchUser = async (userId: string) => {
  const doc = await db.collection("USERS").doc(userId).get();
  return doc.exists ? doc.data() : null;
};
