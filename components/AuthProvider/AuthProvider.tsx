"use client";
import { checkClientSession, getUser } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const PRIVATE_ROUTES = ["/profile"];

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const setUser = useAuthStore((s) => s.setUser);
  const clearIsAuthenticated = useAuthStore((s) => s.clearIsAuthenticated);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const sessionValid = await checkClientSession();

        if (sessionValid) {
          const user = await getUser();
          setUser(user);
        } else {
          clearIsAuthenticated();
          // Редирект лише для приватних маршрутів
          if (PRIVATE_ROUTES.some((r) => pathname.startsWith(r))) {
            router.push("/sign-in");
          }
        }
      } catch (err) {
        clearIsAuthenticated();
        if (PRIVATE_ROUTES.some((r) => pathname.startsWith(r))) {
          router.push("/sign-in");
        }
      }
    };

    verifyAuth();
  }, [pathname, router, setUser, clearIsAuthenticated]);

  return children;
};

export default AuthProvider;