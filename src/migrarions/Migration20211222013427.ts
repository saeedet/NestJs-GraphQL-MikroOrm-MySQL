import { Migration } from '@mikro-orm/migrations';

export class Migration20211222013427 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `books` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
  }

}
