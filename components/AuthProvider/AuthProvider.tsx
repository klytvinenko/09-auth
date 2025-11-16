"use client"
import { checkClientSession } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
interface AuthProviderProps {
  children: ReactNode;
}
const PRIVATE_ROUTES = ["/profile"];
const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const setUser = useAuthStore((s) => s.setUser);
  const clearIsAuthenticated = useAuthStore((s) => s.clearIsAuthenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      const isPrivate = PRIVATE_ROUTES.some((r) => pathname.startsWith(r));

      if (!isPrivate) {
        setLoading(false);
        return;
      }

      try {
        const user = await checkClientSession();
        setUser(user); 
      } catch (e) {
        clearIsAuthenticated();
        router.push("/sign-in");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [pathname]);

  

  return children;
};

export default AuthProvider;
