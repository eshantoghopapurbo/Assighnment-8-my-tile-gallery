import TileCard from "./TileCard";


const FeaturedTiles = async() => {
    const res =await fetch("https://assighnment-8-my-tile-gallery.vercel.app/data.json");
    const tiles = await res.json()
    const topTiles = tiles.slice(0,4)
    console.log(topTiles);
    return (
        <div className='container mx-auto m-10 '>
            <h1 className='font-bold text-xl'>Featured Collection</h1>
            <p className='text-[gray]'>Hand-selected textures for premium space.</p>
            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
                {topTiles.map(tile => <TileCard key={tile.id} tile={tile} ></TileCard>)}
            </div>
        </div>
    );
};

export default FeaturedTiles;
