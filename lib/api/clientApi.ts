import { NewNote, Note } from "@/types/note";
import { api } from "./api";
import { User } from "@/types/user";
import { AxiosError } from "axios";

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
interface NoteListData {
  notes: Note[];
  totalPages: number;
}
export type RegisterRequest = {
  email: string;
  password: string;
  userName?: string;
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
const authHeaders = {
  Authorization: `Bearer ${myKey}`,
};
export const fetchNotes = async (
  search: string,
  page: number,
  tag?: string
): Promise<NoteListData> => {
  try {
    const res = await api.get<NoteListData>("/notes", {
      params: {
        search,
        page,
        perPage: 12,
        sortBy: "created",
        tag,
      },

      headers: authHeaders,
    });

    const result = res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return { notes: [], totalPages: 0 };
  }
};

export const fetchNoteById = async (id: string): Promise<Note | null> => {
  try {
    const res = await api.get<Note>(`/notes/${id}`, {
      headers: authHeaders,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createNote = async (values: NewNote): Promise<Note | null> => {
  try {
    const res = await api.post<Note>(`/notes`, values, {
      headers: authHeaders,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteNote = async (noteId: string): Promise<Note | null> => {
  try {
    const res = await api.delete<Note>(`/notes/${noteId}`, {
      headers: authHeaders,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const register = async (data: RegisterRequest) => {
  try {
    const res = await api.post<User>("/auth/register", data, {
      headers: authHeaders,
      withCredentials: true,
    });
    console.log(res.data)
    return res.data;
  } catch (error){
    const err = error as AxiosError<{ error: string }>;

    console.error(err);

    throw new Error(err.response?.data?.error || "Registration failed");
  }
};

export const login = async (data: LoginRequest) => {
  try {
    const res = await api.post<User>("/auth/login", data, {
      headers: authHeaders,
      withCredentials: true,
    });
    console.log(res.data)
    return res.data;
  } catch (error){
    const err = error as AxiosError<{ error: string }>;

    console.error(err);

    throw new Error(err.response?.data?.error || "Registration failed");
  }
}


export const checkClientSession = async () => {
  const res = await api.get("/auth/session", { withCredentials: true });
  return res.data; 
};

export const updateUser = async (data: UpdateUserRequest): Promise<User> => {
  try {
    const response = await api.patch<User>("/auth/me", data, {
      withCredentials: true, // важливо для cookie
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ error: string }>;
    console.error(err);
    throw new Error(err.response?.data?.error || "Failed to update user");
  }
};