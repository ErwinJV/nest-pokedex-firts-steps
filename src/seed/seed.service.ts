import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Document, Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}
  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10');
    const data = (await res.json()) as unknown as PokeResponse;
    const pokemonToInsert: { name: string; no: number }[] = [];

    // const insertPromiseArray: Promise<
    //   Document<unknown, {}, Pokemon> &
    //     Pokemon &
    //     Required<{ _id: unknown }> & { __v: number }
    // >[] = [];

    for (const { name, url } of data.results) {
      const segments = url.split('/');

      const no: number = +segments[segments.length - 2];
      console.log({ name, no });
      //insertPromiseArray.push(this.pokemonModel.create({ name, no }));
      pokemonToInsert.push({ name, no });
    }

    // await Promise.all(insertPromiseArray);

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
