// src/app/api/trpc/route.ts
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@src/server/trpc/router/_app";
import { createContext } from "@src/server/trpc/context";
import { supabase } from "../../../../../lib/supabase";

// export const runtime = "edge"; // これを入れるとNext.js Edge対応もできる（なければ消してもいい）

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
  });
};

export { handler as GET, handler as POST };


export const fetchEvent = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  
  if (!user || !user.id) {
    console.warn("ユーザー情報がありません");
    return [];
  }

  if (userError || !user) {
    console.error("ユーザー情報の取得に失敗しました", userError);
    return [];
  }

  const { data, error } = await supabase
    .from("")
    .select("*")
    .eq("user_id", user.id);  // ユーザーIDでフィルタ

  if (error) {
    console.error("todo取得エラー:", error.message);
    return [];
  }

  return data;
};

export const addEvent = async (title: string) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || !user.id) {
    console.warn("ユーザー情報がありません");
    return [];
  }

  if (userError || !user) {
    console.error("ユーザー情報の取得に失敗しました", userError);
    return [];
  }
  
  const { data, error } = await supabase
  .from("todo")
  .insert([
    {title: title, user_id: user.id}
  ])
  .select();
  
  if (error) {
    console.error("追加エラー", error.message);
  }

  return data;
}; 

export const deleteTodo = async (id: number) => {
  const { error } =await supabase
  .from("todo")
  .delete()
  .eq("id", id);

  if (error) {
    console.error("削除エラー", error.message);
    return false;
  }

  return true;
};
