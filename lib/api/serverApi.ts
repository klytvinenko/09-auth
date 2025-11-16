import { Note } from "@/types/note";
import { api } from "./api";
import { cookies } from 'next/headers';

{
  /*
getMe
checkSession.
    */
}
const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
interface NoteListData {
  notes: Note[];
  totalPages: number;
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
    const res = await api.get<NoteListData>(
     "/notes",
      {
        params: {
          search,
          page,
          perPage: 12,
          sortBy: "created",
          tag
        },
        
        headers: authHeaders
        
      }
    );
    
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
    const res = await api.get<Note>(
      `/notes/${id}`,
      {
        headers: authHeaders,
      }
    );
    return res.data
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await api.get('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
};