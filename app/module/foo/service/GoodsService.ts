import { EggLogger } from 'egg';
import { SingletonProto, AccessLevel, Inject } from '@eggjs/tegg';
import goods, { top10Category } from '../../../../config/goods';
import { sleep } from '@/module/utils/Sleep';

@SingletonProto({
  accessLevel: AccessLevel.PUBLIC,
})
export class GoodsService {

  @Inject()
  logger: EggLogger;

  @Inject()
  host: string;

  async getGoodsList(page: number, size: number): Promise<GoodsSimple[]> {
    await sleep(2000);
    if (size !== 10) {
        size = 10;
    }
    if (page === 1) {
        const sub = goods.slice(0, 10);
        return sub.map((item: GoodsSimple) => {
            return {
                ...item,
                image: `http://${this.host}/public${item.image}`,
            };
        })
    } else if (page === 2) {
        const sub = goods.slice(10, 20);
        return sub.map((item: GoodsSimple) => {
            return {
                ...item,
                image: `http://${this.host}/public${item.image}`,
            };
        })
    } else {
        return [];
    }
  }


  async getTop10Category(): Promise<Category[]> {
    return top10Category.map((item: Category) => {
        return {
            ...item,
            image: `http://${this.host}/public${item.image}`,
        }
    });
  }
}
