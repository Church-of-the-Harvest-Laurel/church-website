import part0 from "../_image-data/pastor0";
import part1 from "../_image-data/pastor1";
import part2 from "../_image-data/pastor2";
import part3 from "../_image-data/pastor3";

export const dynamic = "force-static";

export async function GET() {
  const image = Buffer.from(part0 + part1 + part2 + part3, "base64");

  return new Response(image, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
