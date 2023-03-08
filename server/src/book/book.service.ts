import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return this.booksRepository.find();
  }

  findOne(id: number) {
    return this.booksRepository.findOneBy({ id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
