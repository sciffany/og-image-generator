import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../assets/RobotoCondensed-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const WIDTH = 1200;
const HEIGHT = 630;

export default async function handler(req: NextRequest) {
  const fontData = await font;

  const { searchParams } = req.nextUrl;

  const name = searchParams.get("name");
  const imageUrl = searchParams.get("image-url");
  const description = searchParams.get("description");
  const imageOffset = searchParams.get("image-offset");
  const takeAppLink = searchParams.get("take-app-link");
  const descriptionColor = searchParams.get("description-color");
  const logoUrl = searchParams.get("logo-url");

  if (
    !imageUrl ||
    !name ||
    !description ||
    !imageOffset ||
    !takeAppLink ||
    !descriptionColor
  ) {
    return new ImageResponse(<div>Missing Argument</div>);
  }

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#0D1E3A",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="500px"
          alt="main-image"
          src={imageUrl ?? ""}
          style={{
            position: "absolute",
            right: "0px",
            top: (imageOffset ?? 100) + "px",
            objectFit: "contain",
          }}
        />

        <img
          alt="blue-overlay"
          width={WIDTH}
          height={HEIGHT}
          src="https://og-image-generator-ochre.vercel.app/blue9.png"
          style={{
            position: "absolute",
            objectFit: "cover",
          }}
        />

        {logoUrl && (
          <img
            alt="logo"
            width="150px"
            height="150px"
            src={logoUrl}
            style={{
              left: "20px",
              top: "20px",
              borderRadius: "50%",
              position: "absolute",
              objectFit: "cover",
            }}
          />
        )}

        <div
          id="title"
          style={{
            position: "absolute",
            left: "20px",
            top: "240px",
            maxWidth: "750px",
            fontSize: name.length <= 11 ? "120px" : "80px",
            fontFamily: '"Roboto"',
            color: "#E2CFBC",
            backgroundColor: "#1B2D51",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {name.toUpperCase()}
        </div>

        <div
          id="bottom-left-trapezoid"
          style={{
            position: "absolute",
            left: "-100px",
            top: "480px",
            width: "700px",
            height: "220px",
            transform: "skew(-30deg)",
            background: descriptionColor,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "20px",
            bottom: "-90px",
            width: "550px",
            height: "220px",
            fontSize: "50px",
            fontFamily: '"RobotoCondensed"',
            color: "white",
          }}
        >
          {description}
        </div>

        <div
          id="bottom-right-trapezoid"
          style={{
            position: "absolute",
            right: "-160px",
            top: "540px",
            width: "700px",
            height: "220px",
            transform: "skew(-30deg)",
            background: "white",
          }}
        />

        <div
          style={{
            position: "absolute",
            // right: "-150px",
            // bottom: "-110px",
            display: "flex",
            width: "1200",
            height: "630",
            fontSize: "30px",
            fontFamily: '"RobotoCondensed"',
            padding: "20px",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          {takeAppLink}
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "RobotoCondensed",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
