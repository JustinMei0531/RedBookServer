import { EggLogger } from 'egg';
import { SingletonProto, AccessLevel, Inject } from '@eggjs/tegg';
import { sleep } from '@/module/utils/Sleep';

@SingletonProto({
  // 如果需要在上层使用，需要把 accessLevel 显示声明为 public
  accessLevel: AccessLevel.PUBLIC,
})
export class LoginService {

  @Inject()
  logger: EggLogger;

  @Inject()
  host: string;

  // 登陆接口
  async getLoginUserInfo(name: string, pwd: string): Promise<any> {
    await sleep(1000);
    const find = WHITE_LIST.find((i: any) => i.name === name && i.pwd === pwd);
    this.logger.info(JSON.stringify(find));
    if (find) {
        return {
            name: find.name,
            avatar: `http://${this.host}/public${find.avatar}`,
            desc: find.desc,
            sex: find.sex,
            redBookId: find.redBookId,
            location: find.location,
            nickName: find.nickName,
        };
    } else {
        return null;
    }
  }
}

const WHITE_LIST = [
    {
        name: '12345678910',
        nickName: 'Grand Duke',
        pwd: '123456',
        sex: 'male',
        redBookId: 118302851,
        avatar: `/avatar/avatar_39.png`,
        location: 'Jiangsu',
        desc: `Greetings, I'm the Grand Duke. I'm thrilled to have you all in my course and hope to help you quickly master RN development, aiming for high-paying jobs at major companies.`,
    },
    {
        name: 'dagongjue',
        nickName: 'Grand Duke',
        pwd: '123456',
        sex: 'male',
        redBookId: 118302851,
        avatar: `/avatar/avatar_35.png`,
        location: 'Shanghai',
        desc: `Greetings, I'm the Grand Duke. I'm thrilled to have you all in my course and hope to help you quickly master RN development, aiming for high-paying jobs at major companies.`,
    },
    {
        name: '18818818188',
        nickName: 'Nicholas Zhang San',
        pwd: '888888',
        sex: 'male',
        redBookId: 118098706,
        avatar: `/avatar/avatar_02.png`,
        location: 'Beijing',
        desc: `Hello everyone, I'm Zhang San. I've been studying RN for two and a half years.`,
    },
    {
        name: '18626668866',
        nickName: 'Hermes Li Si',
        pwd: '666666',
        sex: 'female',
        redBookId: 116903456,
        avatar: `/avatar/avatar_03.png`,
        location: 'Yunnan',
        desc: `Hi there, I'm Li Si. I love singing, dancing, and playing basketball.`,
    },
];