import { NextResponse } from "next/server";

export async function GET(request) {
  // const page_str = request.nextUrl.searchParams.get("page");
  // const limit_str = request.nextUrl.searchParams.get("limit");

  // const page = page_str ? parseInt(page_str, 10) : 1;
  // const limit = limit_str ? parseInt(limit_str, 10) : 10;
  // const skip = (page - 1) * limit;

  // const feedbacks = await prisma.feedback.findMany({
  //   skip,
  //   take: limit,
  // });

  // let json_response = {
  //   status: "success",
  //   results: feedbacks.length,
  //   feedbacks,
  // };
  const json_response = {
    data: "sample_data",
  };

  // TODO: Figure out how to return JSON FFS
  try {
    return NextResponse.json(json_response, { status: 200 });
    // return Response.json(json_response);
  } catch (error) {
    throw new Error(error);
  }
}
