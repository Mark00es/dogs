import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-book.dto';
import { BookInterface } from './interfaces/book.interface';
import { InjectRepository } from "@nestjs/typeorm";
import { Dog } from "./entities/book.entity";
import { Repository } from "typeorm";

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Dog) private bookRepository: Repository<Dog>) {
  }
  create(createBookDto: CreateDogDto){
    return this.bookRepository.save(createBookDto);
  }
}
