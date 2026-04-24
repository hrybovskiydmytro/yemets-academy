import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const supabase = getSupabase();
    const { data: inserted, error } = await supabase
      .from("cases")
      .insert([
        {
          full_name: data.full_name || "",
          email: data.email || "",
          phone: data.phone || "",
          country: data.country || "",
          role: data.role || "patient",
          cloud_link: data.cloud_link || "",
          notes: data.notes || "",
          status: "new",
        },
      ])
      .select()
      .single();

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      case: inserted,
    });
  } catch {
    return Response.json(
      { success: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}