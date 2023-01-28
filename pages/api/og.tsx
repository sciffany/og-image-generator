import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

// Make sure the font exists in the specified path:
const font = fetch(
  new URL("../../assets/RobotoCondensed-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const font2 = fetch(
  new URL("../../assets/Roboto-Black.ttf", import.meta.url)
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
            // top: "-270px",
            objectFit: "contain",
          }}
        />

        <img
          width="1400"
          height="630"
          src="http://localhost:3000/blue8.png"
          style={{
            position: "absolute",
            objectFit: "cover",
          }}
        />

        {/* <img
          width="100"
          height="100"
          src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/309555303_402662378700550_9135190593864397646_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFAnLOKbE4FAy6g2R7dqz2O-f-XmfxyBgj5_5eZ_HIGCA_DKvrE3ljjyFSi4TnaSpdTWtmwzrwefnniIhQkyRCe&_nc_ohc=U7EMpZbz32gAX9m-a_L&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfC_gGelhy8hMWJDL0z2NafZiXLSEmItbcgTWpW0AmEJCw&oe=63D7C372"
          style={{
            position: "absolute",
            top: "30",
            left: "30",
            objectFit: "cover",
          }}
        /> */}
        <div
          style={{
            position: "absolute",
            left: "-200px",
            top: "480px",
            width: "700px",
            height: "220px",
            transform: "skew(-30deg)",
            background: "rgb(142,67,48)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            left: "20px",
            bottom: "240px",
            width: `${70 * name.length + 120}px`,
            height: "180px",
            fontSize: "150px",
            fontFamily: '"Roboto"',
            color: "#E2CFBC",
            backgroundColor: "#1B2D51",
          }}
        >
          {name.toUpperCase()}
        </div>
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
          style={{
            position: "absolute",
            right: "-160px",
            top: "540px",
            width: "700px",
            height: "220px",
            transform: "skew(-30deg)",
            background: "white",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            left: "1000px",
            bottom: "-100px",
            width: "550px",
            height: "170px",
            fontSize: "45px",
            fontFamily: '"RobotoCondensed"',
          }}
        >
          {"syipcafe.take.app"}
        </div>
      </div>
    ),
    {
      width: 1400,
      height: 630,
      fonts: [
        {
          name: "RobotoCondensed",
          data: fontData,
          style: "normal",
        },
        {
          name: "Roboto",
          data: fontData2,
          style: "normal",
        },
      ],
    }
  );
}
