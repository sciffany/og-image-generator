import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../assets/FreeSansBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const WIDTH = 1200;
const HEIGHT = 630;

export default async function handler(req: NextRequest) {
  const fontData = await font;

  const { searchParams } = req.nextUrl;

  const name = searchParams.get("name");
  const imageUrl = searchParams.get("image-url");
  const imageOffset = searchParams.get("image-offset");
  const logoUrl = searchParams.get("logo-url");

  if (
    !imageUrl ||
    !name ||
    !imageOffset ||
    !logoUrl
  ) {
    return new ImageResponse(<div>Missing Argument</div>);
  }

  return new ImageResponse(
    (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundImage: "linear-gradient(#2D872F, #2D872F)"}}>
      <img width="380px" src={logoUrl}/>
      <div style={{fontSize: "60px", marginTop: "30px"}}>{name}</div>
    </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "Arial",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
