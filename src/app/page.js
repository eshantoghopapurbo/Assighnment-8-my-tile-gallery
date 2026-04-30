import AllTiles from "@/components/AllTiles";
import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import TileNews from "@/components/TileNews";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TileNews></TileNews>
      <FeaturedTiles></FeaturedTiles>
     
    </div>
  );
}
