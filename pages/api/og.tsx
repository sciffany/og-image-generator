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
  const color1 = searchParams.get("color1");
  const color2 = searchParams.get("color2");
  const textColor = searchParams.get("text-color");

  if (
    !imageUrl ||
    !name ||
    !color1 ||
    !color2
  ) {
    return new ImageResponse(<div>Missing Argument</div>);
  }

  return new ImageResponse(
    (
    <div style={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundImage: `linear-gradient(${color1}, ${color2})`}}>
      <img width="380px" height="380px" style={{borderRadius: "50%"}} src={imageUrl}/>
      <div style={{fontSize: "60px", marginTop: "30px", color: textColor ?? "black"}}>{name}</div>
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
