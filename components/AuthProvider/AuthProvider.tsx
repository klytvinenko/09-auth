"use client";
import { checkClientSession, getUser } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const PRIVATE_ROUTES = ["/profile"];
const PUBLIC_ROUTES = ["/sign-in", "/register"];

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const setUser = useAuthStore((s) => s.setUser);
  const clearIsAuthenticated = useAuthStore((s) => s.clearIsAuthenticated);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const sessionValid = await checkClientSession();
        console.log("pathname:", pathname);
        console.log("sessionValid:", sessionValid);

        if (sessionValid) {
          const user = await getUser();
          setUser(user);

          // Не редіректимо з логіну, якщо вже залогінений
          if (PUBLIC_ROUTES.includes(pathname)) {
            router.push("/");
          }
        } else {
          clearIsAuthenticated();
          // Редірект лише для приватних маршрутів
          if (
            PRIVATE_ROUTES.some((r) => pathname.startsWith(r)) &&
            !PUBLIC_ROUTES.includes(pathname)
          ) {
            router.push("/sign-in");
          }
        }
      } catch (err) {
        clearIsAuthenticated();
        if (
          PRIVATE_ROUTES.some((r) => pathname.startsWith(r)) &&
          !PUBLIC_ROUTES.includes(pathname)
        ) {
          router.push("/sign-in");
        }
      }
    };

    verifyAuth();
  }, [pathname, router, setUser, clearIsAuthenticated]);

  return children;
};

export default AuthProvider;
