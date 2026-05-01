import { Button, Card, CardContent, CardFooter } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TileCard = ({ tile }) => {
  return (
    <Card
      isPressable
      className="group border-none bg-background/60 dark:bg-default-100/50 max-w-[400px] shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
    >
      <CardContent className="p-0 overflow-visible">
        <div className="relative w-full aspect-square overflow-hidden">

          {/* Image */}
          <Image
            src={tile.image}
            fill
            alt={tile.title}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        </div>
      </CardContent>

      <CardFooter className="flex-col items-start px-5 py-5 gap-3">

        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-lg font-semibold text-default-800 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {tile.title}
          </h2>

          <p className="text-small text-default-500 line-clamp-2 leading-relaxed">
            {tile.description}
          </p>
        </div>

        <Link href={`/tiles/${tile.id}`} className="w-full">
          <Button
            variant="primary"
            color="primary"
            className="w-full font-medium transition-transform duration-300 group-hover:scale-[1.03]"
          >
            View Details →
          </Button>
        </Link>

      </CardFooter>
    </Card>
  );
};

export default TileCard;