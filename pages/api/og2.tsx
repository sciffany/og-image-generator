import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

// Make sure the font exists in the specified path:
const font = fetch(
  new URL("../../assets/PTSerif-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const font2 = fetch(
  new URL("../../assets/RobotoCondensed-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;
  const fontData2 = await font2;
  const { searchParams } = req.nextUrl;
  const name = searchParams.get("name");
  const url = searchParams.get("url");
  const description = searchParams.get("description");
  if (!url || !name || !description) {
    return new ImageResponse(<div>Missing Argument</div>);
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Helvetica",
        }}
      >
        <img
          width="630"
          src={url ?? ""}
          style={{
            position: "absolute",
            right: "0px",
            top: "-400px",
            objectFit: "contain",
          }}
        />

        <img
          width="630"
          height="630"
          src="http://localhost:3000/torn.png"
          style={{
            position: "absolute",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "40px",
            bottom: "50px",
            width: `${70 * name.length + 120}px`,
            height: "180px",
            fontSize: "20px",
            fontFamily: '"Serif"',
            color: "white",
          }}
        >
          {"Welcome to"}
        </div>
        <div
          style={{
            position: "absolute",
            left: "40px",
            bottom: "30px",
            width: `${70 * name.length + 120}px`,
            height: "180px",
            fontSize: "70px",
            fontFamily: '"Serif"',
            color: "white",
          }}
        >
          {name}
        </div>
        <div
          style={{
            position: "absolute",
            left: "40px",
            bottom: "110px",
            width: `50px`,
            height: "7px",
            fontSize: "70px",
            fontFamily: '"Serif"',
            backgroundColor: "#733B8B",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "40px",
            bottom: "-80px",
            width: `${70 * name.length + 120}px`,
            height: "180px",
            fontSize: "20px",
            fontFamily: '"Serif"',
            color: "white",
          }}
        >
          <div>{"All-day brunch and"}</div>
          <div>{"coffee specialty"}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "400px",
            bottom: "-100px",
            width: `${70 * name.length + 120}px`,
            height: "180px",
            fontSize: "20px",
            fontFamily: '"Roboto"',
            color: "white",
          }}
        >
          <div>{"syipcafe.take.app"}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "430px",
            bottom: "90px",
            width: `150px`,
            height: "50px",
            fontSize: "20px",
            fontFamily: '"Roboto"',
            color: "white",
            border: "1px solid white",
            padding: "10px",
          }}
        >
          <div>{"ORDER  NOW"}</div>
        </div>
      </div>
    ),
    {
      width: 630,
      height: 630,
      fonts: [
        // {
        //   name: "Serif",
        //   data: fontData,
        //   style: "normal",
        // },
        {
          name: "Serif",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
