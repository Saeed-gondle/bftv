"use client";

export interface UserAccount {
  email: string;
  password?: string;
  createdAt: string;
}

const USERS_STORAGE_KEY = "bftv_registered_users";
const CURRENT_USER_KEY = "bftv_active_user";

// Default dummy demo account always available
const DEFAULT_DEMO_USERS: UserAccount[] = [
  { email: "user@example.com", password: "password123", createdAt: new Date().toISOString() },
  { email: "parent@first.tv", password: "password123", createdAt: new Date().toISOString() },
];

export function getRegisteredUsers(): UserAccount[] {
  if (typeof window === "undefined") return DEFAULT_DEMO_USERS;
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(DEFAULT_DEMO_USERS));
      return DEFAULT_DEMO_USERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_DEMO_USERS;
  } catch (e) {
    return DEFAULT_DEMO_USERS;
  }
}

export function registerUser(email: string, password?: string): { success: boolean; message?: string } {
  if (typeof window === "undefined") return { success: true };
  try {
    const users = getRegisteredUsers();
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    
    if (existing) {
      // Update password if existing
      existing.password = password || existing.password;
    } else {
      users.push({
        email: email.trim(),
        password: password || "password123",
        createdAt: new Date().toISOString(),
      });
    }

    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ email: email.trim() }));
    return { success: true };
  } catch (e) {
    return { success: false, message: "Could not save to localStorage" };
  }
}

export function loginUser(email: string, password?: string): { success: boolean; message?: string } {
  if (typeof window === "undefined") return { success: true };
  try {
    const users = getRegisteredUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase().trim()
    );

    if (!found) {
      return { success: false, message: "No account found for this email" };
    }

    if (found.password && found.password !== password) {
      return { success: false, message: "Incorrect password" };
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ email: found.email }));
    return { success: true };
  } catch {
    return { success: false, message: "Could not read from localStorage" };
  }
}

/** True when the email already has an account in localStorage. */
export function userExists(email: string): boolean {
  return getRegisteredUsers().some(
    (u) => u.email.toLowerCase() === email.toLowerCase().trim()
  );
}

/** Overwrites the stored password for an account (used by the reset flow). */
export function updatePassword(
  email: string,
  password: string
): { success: boolean; message?: string } {
  if (typeof window === "undefined") return { success: true };
  try {
    const users = getRegisteredUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase().trim()
    );

    if (!found) {
      return { success: false, message: "No account found for this email" };
    }

    found.password = password;
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    return { success: true };
  } catch {
    return { success: false, message: "Could not save to localStorage" };
  }
}

export function logoutUser() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getActiveUser(): UserAccount | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
