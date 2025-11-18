import { NewNote, Note } from "@/types/note";
import { api } from "./api";
import { User } from "@/types/user";
import { AxiosError } from "axios";

interface NoteListData {
  notes: Note[];
  totalPages: number;
}

export type RegisterRequest = {
  email: string;
  password: string;
  username?: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

interface UpdateUserRequest {
  username?: string;
  email?: string;
  avatar?: string;
}


export const fetchNotes = async (
  search: string,
  page: number,
  tag?: string
): Promise<NoteListData> => {
  const res = await api.get<NoteListData>("/notes", {
    params: { search, page, perPage: 12, sortBy: "created", tag },
    withCredentials: true,
  });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await api.get<Note>(`/notes/${id}`, { withCredentials: true });
  return res.data;
};

export const createNote = async (values: NewNote): Promise<Note> => {
  const res = await api.post<Note>("/notes", values, { withCredentials: true });
  return res.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const res = await api.delete<Note>(`/notes/${noteId}`, { withCredentials: true });
  return res.data;
};

export const register = async (data: RegisterRequest): Promise<User> => {
  try {
    const res = await api.post<User>("/auth/register", data, { withCredentials: true });
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ error: string }>;
    throw new Error(err.response?.data?.error || "Registration failed");
  }
};

export const login = async (data: LoginRequest): Promise<User> => {
  try {
    const res = await api.post<User>("/auth/login", data, { withCredentials: true });
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ error: string }>;
    throw new Error(err.response?.data?.error || "Login failed");
  }
};

// export const checkClientSession = async (): Promise<boolean> => {
//   try {
//     const res = await api.get<{ valid: boolean }>("/auth/session", { withCredentials: true });
//     return res.data.valid;
//   } catch {
//     return false;
//   }
// };

export const checkClientSession = async () => {
  const res = await api.get("/auth/session", { withCredentials: true });
  return res.data; 
};


export const updateUser = async (data: UpdateUserRequest): Promise<User> => {
  const res = await api.patch<User>("/users/me", data, { withCredentials: true });
  return res.data;
};

export const logout = async (): Promise<void> => {
  await api.post("/auth/logout", {}, { withCredentials: true });
};

export const getUser = async (): Promise<User> => {
  const res = await api.get<User>("/users/me", { withCredentials: true });
  return res.data;
};
