import { supabase } from "@/lib/supabase";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const { data, error } = await supabase
      .from("investors")
      .update({
        status: body.status,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (err: any) {
    return Response.json(
      { error: err?.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}