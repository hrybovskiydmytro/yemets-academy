import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const data = await req.json();

  const { error } = await supabase.from("investors").insert([data]);

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ success: true });
}