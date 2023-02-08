import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { CreateBookInput } from './dto/create-book.intput';

@Resolver()
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query((returns) => [Book])
  async books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Mutation((returns) => Book)
  async createBook(@Args('createBook') book: CreateBookInput): Promise<Book> {
    return this.booksService.createBook(book);
  }
}
