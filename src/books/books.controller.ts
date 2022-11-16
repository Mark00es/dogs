import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { CreateDogDto} from "./dto/create-book.dto";
import { BooksService } from "./books.service";

@Controller('dogs') // PREFIJO DE PATH OPCIONAL
export class BooksController {
  constructor(private booksService: BooksService) {
  }
  //@Post('foo')
  @Post()
  create(@Body() createDogDto: CreateDogDto){
    // return createDogDto;
    return this.booksService.create(createDogDto);
  }
}

//ENDPOINT
//GET  PREFIJO DE PATH OPCIONAL + PATH OPCIONAL
