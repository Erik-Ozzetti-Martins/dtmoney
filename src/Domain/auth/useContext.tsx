import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Data/api";


export interface UserProviderProps {
  children: ReactNode;
}
interface IUserData {
  name?: string;
  email: string;
  password: string;
}

export interface UserContextData {
  userData: IUserData | null;
  error: string;
  login: boolean;
  loading: boolean;
  userLogin: (IUserData: IUserData) => Promise<void>;
  userRegister: (IUserData: IUserData) => Promise<void>;
  sendForgotPassword: (email: string) => Promise<void>;
  resetPassword: (passsword: string, token: string | null) => Promise<void>;
  logout: () => void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserStorage = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  async function userLogin({ email, password }: IUserData) {
    try {
      setError("");
      setLoading(true);
      console.log(email, password);
      const response = await api.post("/auth/login", { email, password });
      setUserData(response.data?.user);
      window.localStorage.setItem("token", response.data?.token);
      window.localStorage.setItem("refresh_token", response.data.refresh_token);
      setLogin(true);
      navigate("/home");
    } catch (error: any) {
      setError("email incorreto ou senha!.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setLogin(true);
      navigate("/home");
    }
  }, []);

  async function userRegister({ name, email, password }: IUserData) {
    try {
      setError("");
      setLoading(true);
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      setUserData(response.data?.user);
      navigate("/");
    } catch (error: any) {
      setError('email ja em uso')
    } finally {
      setLoading(false);
    }
  }
  async function sendForgotPassword(email: string) {
    try {
      setError("");
      setLoading(true);
      api.post("/forgot", { email });
    } catch (error: any) {
      setError("email não  existe");
    } finally {
      setLoading(false);
    }
  }

  async function resetPassword(password: string, token: string | null) {
    try {
      setError("");
      setLoading(true);
      api.post(`/password/reset?token=${token}`, { password });
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    window.localStorage.clear();
    navigate("/");
  }
  return (
    <UserContext.Provider
      value={{
        loading,
        login,
        error,
        userData,
        userLogin,
        userRegister,
        sendForgotPassword,
        logout,
        resetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useContextUser() {
  const context = useContext(UserContext);
  return context;
}
