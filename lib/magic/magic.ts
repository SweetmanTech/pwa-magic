
// lib/magic.js
import { Magic } from "magic-sdk";

const createMagic = (key) => typeof window !== "undefined" && new Magic(key)

// Pass in your publishable key from your .env file
export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);