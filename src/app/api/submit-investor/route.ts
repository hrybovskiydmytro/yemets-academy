export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}rest/v1/investors`,
      {
        method: "POST",
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          full_name: body.full_name,
          company: body.company,
          country: body.country,
          email: body.email,
          phone: body.phone,
          interest_type: body.interest_type,
          budget: body.budget,
          message: body.message,
          status: "new",
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return Response.json({ error: text }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err: any) {
    return Response.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}