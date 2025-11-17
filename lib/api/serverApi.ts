import { Note } from "@/types/note";
import { api } from "./api";
import { cookies } from "next/headers";
import { User } from "@/types/user";
import { AxiosResponse } from "axios";

interface NoteListData {
  notes: Note[];
  totalPages: number;
}


export const fetchNotes = async (
  search: string,
  page: number,
  tag?: string
): Promise<NoteListData> => {
  try {
    const cookieStore = await cookies();
    const res = await api.get<NoteListData>("/notes", {
      params: {
        search,
        page,
        perPage: 12,
        sortBy: "created",
        tag,
      },

      headers: {
      Cookie: cookieStore.toString(),
    },
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
    const cookieStore = await cookies();
    const res = await api.get<Note>(`/notes/${id}`, {
      headers: {
      Cookie: cookieStore.toString(),
    },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const checkServerSession = async (): Promise<AxiosResponse<User>> => {
  const cookieStore = await cookies();
  return api.get<User>("/auth/session", {
    headers: { Cookie: cookieStore.toString() },
    withCredentials: true,
  });
};
export const getMe = async () : Promise<User>=> {
  const cookieStore = await cookies();
  const res = await api.get<User>("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
};