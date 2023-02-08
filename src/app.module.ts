import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { UserResolver } from './entity/users/user.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from './entity/pets/pets.module';
import { UsersModule } from './entity/users/users.module';
import { BookModule } from './entity/books/books.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      // entities: [Pet],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PetsModule,
    UsersModule,
    BookModule,
  ],
  // controllers: [],
  // providers: [UserResolver],
})
export class AppModule {}
