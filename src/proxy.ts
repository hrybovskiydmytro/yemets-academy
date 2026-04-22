import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  const isInvestHost = host.startsWith("invest.");

  if (isInvestHost) {
    const blockedPaths = [
      "/submit-case",
      "/doctor-application",
      "/case-status",
      "/for-doctors",
      "/for-patients",
      "/manage",
      "/about",
    ];

    if (blockedPaths.some((path) => url.pathname.startsWith(path))) {
      url.pathname = "/investors";
      return NextResponse.redirect(url);
    }

    if (url.pathname === "/") {
      url.pathname = "/investors";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};