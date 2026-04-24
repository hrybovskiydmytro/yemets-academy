import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await supabase.from("doctors").insert([
      {
        full_name: data.full_name || "",
        clinic: data.clinic || "",
        specialty: data.specialty || "",
        country: data.country || "",
        email: data.email || "",
        phone: data.phone || "",
        monthly_volume: data.monthly_volume || "",
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
  } catch {
    return Response.json(
      { success: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}