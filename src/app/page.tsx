import { url } from "inspector";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/18dac949-2747-4dbf-8e67-33c2477d8fd9-tlesbb.png",
  "https://utfs.io/f/4e9d27cb-8670-443a-94bb-ee83b128e558-70kz3p.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">{
        mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt="image"/>
          </div>
        ))
      }
      </div>
      Hello (gallery in progress)
    </main>
  );
}
