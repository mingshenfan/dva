// 一级路由
import LoginPage from '../routes/LoginPage';
import PlayPage from '../routes/PlayPage';
import IndexPage from '../routes/IndexPage';
// 二级路由
import LoGins from '../routes/loGin/loGin';
import AccountPage from '../routes/account/Index';
import DiscoverPage from '../routes/discover/Index';
import FriendPage from '../routes/friend/Index';
import MyPage from '../routes/my/Index';
import VideoPage from '../routes/video/Index';
//三极路由
import Recommend from '../routes/discover/recommend/recommend';
import Station from '../routes/discover/station/station';
import Seach from '../routes/discover/seach/Seach';

export default {
    routes: [{
        path: '/login',
        component: LoginPage,
    }, {
        path: '/LoGins',
        component: LoGins,
    }, {
        path: '/play/:id?',
        component: PlayPage
    }, {
        path: '/index',
        component: IndexPage,
        children: [{
            path: '/index/account',
            component: AccountPage,
        }, {
            path: '/index/discover',
            component: DiscoverPage,
            children: [{
                path: '/index/discover/recommend',
                component: Recommend,
            }, {
                path: '/index/discover/station',
                component: Station,
            }]
        }, {
            path: '/index/friend',
            component: FriendPage,
        }, {
            path: '/index/my',
            component: MyPage,
        }, {
            path: '/index/video',
            component: VideoPage,
        }, {
            path: '/index/seach',
            component: Seach,
        }]
    }, {
        path: '/',
        redirect: '/index/discover/recommend'
    }]
}