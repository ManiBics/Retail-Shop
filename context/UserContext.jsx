import React, { createContext, useState, useContext, useEffect } from "react";
import { useBackDrop } from "./BackDropContext";
import { getCustomer, getCustomerById, signIn } from "./userApiHandler";
import { usePathname, useRouter } from "next/navigation";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { showBackDrop, hideBackDrop } = useBackDrop();
  const router = useRouter();
  const pathname = usePathname();

  const signInHandler = async (credential) => {
    showBackDrop();
    // const res = await signIn(credential);
    // if (res?.accessToken) {
    const data = await getCustomer(credential.email);
    const customerData = data?.results[0] || {};
    if (customerData.id) {
      localStorage.setItem("customerId", customerData.id);
      setUser(customerData);
      router.push("/");
    }
    // }
    hideBackDrop();
  };

  useEffect(() => {
    (async () => {
      const storedCustomerId = localStorage.getItem("customerId");
      showBackDrop();
      if (storedCustomerId) {
        if (pathname === "/login") {
          return router.push("/");
        }
        const data = await getCustomerById(storedCustomerId);
        setUser(data);
      } else if (pathname !== "/login") {
        router.push("/login");
      }
      hideBackDrop();
    })();
  }, []);

  const logoutHandler = () => {
    setUser({});
    localStorage.removeItem("customerId");
    router.push("/login");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signInHandler,
        logoutHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
