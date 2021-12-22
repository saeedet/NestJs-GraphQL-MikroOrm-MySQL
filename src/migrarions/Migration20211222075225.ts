import { Migration } from '@mikro-orm/migrations';

export class Migration20211222075225 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `authors` modify `created_at` datetime, modify `updated_at` datetime;');

    this.addSql('alter table `books` modify `created_at` datetime, modify `updated_at` datetime;');
  }

}
