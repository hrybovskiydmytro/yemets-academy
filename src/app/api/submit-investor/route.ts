import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const supabase = getSupabase();
    const data = await req.json();

    const { error } = await supabase.from("investors").insert([
      {
        full_name: data.full_name || "",
        company: data.company || "",
        country: data.country || "",
        email: data.email || "",
        phone: data.phone || "",
        interest_type: data.interest_type || "investor",
        budget: data.budget || "",
        message: data.message || "",
        status: "new",
      },
    ]);

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err: any) {
    return Response.json(
      { success: false, error: err.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}