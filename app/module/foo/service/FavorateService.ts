import { EggLogger } from 'egg';
import { SingletonProto, AccessLevel, Inject } from '@eggjs/tegg';
import articles from '../../../../config/articles';
import { sleep } from '@/module/utils/Sleep';

@SingletonProto({
  accessLevel: AccessLevel.PUBLIC,
})
export class FavorateService {

  @Inject()
  logger: EggLogger;

  @Inject()
  host: string;

  async getFavorateList(): Promise<ArticleSimple[]> {
    await sleep(1000);
    const sub = [articles[3], articles[10], articles[11], articles[12]]
    return sub.map(item => {
        return {
            id: item.id,
            title: item.title,
            userName: item.userName,
            avatarUrl: `http://${this.host}/public${item.avatarUrl}`,
            favoriteCount: item.favoriteCount,
            isFavorite: item.isFavorite,
            image: `http://${this.host}/public${item.images[0]}`,
        };
    })
  }
  async getAccountInfo(): Promise<any> {
    await sleep(500);
    return {
        followCount: 28,
        fans: 648,
        favorateCount: 1988,
    };
  }
}
