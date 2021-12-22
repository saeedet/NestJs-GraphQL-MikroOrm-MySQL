import { Migration } from '@mikro-orm/migrations';

export class Migration20211222073953 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `authors` (`id` int unsigned not null auto_increment primary key, `created_at` json not null, `updated_at` json not null, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `books` (`id` int unsigned not null auto_increment primary key, `created_at` json not null, `updated_at` json not null, `title` varchar(255) not null, `author_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `books` add index `books_author_id_index`(`author_id`);');

    this.addSql('alter table `books` add constraint `books_author_id_foreign` foreign key (`author_id`) references `authors` (`id`) on update cascade;');
  }

}
