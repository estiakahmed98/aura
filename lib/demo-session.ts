export const DEMO_SESSION_KEY = "aura-demo-session";
export type DemoUser = { name: string; email: string };
export function saveDemoSession(user: DemoUser) {
  sessionStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(user));
}
export function readDemoSession(): DemoUser | null {
  try {
    const value = JSON.parse(sessionStorage.getItem(DEMO_SESSION_KEY) || "null");
    return value && typeof value.name === "string" && typeof value.email === "string" ? { name: value.name, email: value.email } : null;
  } catch { return null; }
}
