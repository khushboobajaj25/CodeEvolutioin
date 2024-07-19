import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";
export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headersList = headers();
    cookies().set("ResultsPerPage", "20");
    const theme = request.cookies.get("theme");
    console.log(theme);
    cookies().get("ResultsPerPage");

    console.log(requestHeaders.get("Authorization"));
    console.log(headersList.get("Authorization"));
    console.log(headersList);
    

    return new Response("<h1>Profile Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        },
    });
}
