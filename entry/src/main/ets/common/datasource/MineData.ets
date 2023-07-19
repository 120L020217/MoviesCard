

import ItemData from '../bean/ItemData';
export const CENTER_GRID_DATA: Array<ItemData> = [
  {
    title: $r('app.string.my_love'),
    img: $r('app.media.ic_love'),
    clickPrompt: $r('app.string.open_my_love')
  },
  {
    title: $r('app.string.history_record'),
    img: $r('app.media.ic_record'),
    clickPrompt: $r('app.string.open_history_record')
  },
  {
    title: $r('app.string.message'),
    img: $r('app.media.ic_message'),
    clickPrompt: $r('app.string.open_message')
  },
  /*{
    title: $r('app.string.shopping_cart'),
    img: $r('app.media.ic_shopping'),
    clickPrompt: $r('app.string.open_shopping_cart')
  },
  {
    title: $r('app.string.my_goal'),
    img: $r('app.media.ic_target'),
    clickPrompt: $r('app.string.open_my_goal')
  },
  {
    title: $r('app.string.group'),
    img: $r('app.media.ic_circle'),
    clickPrompt: $r('app.string.open_group')
  },*/
  {
    title: $r('app.string.favorites'),
    img: $r('app.media.ic_favorite'),
    clickPrompt: $r('app.string.open_favorites')
  },
  /*
  {
    title: $r('app.string.recycle_bin'),
    img: $r('app.media.ic_recycle'),
    clickPrompt: $r('app.string.open_recycle_bin')
  }*/
];
export const MINE_LIST_DATA: Array<ItemData> = [
  {
    title: $r('app.string.mine_list_news'),
    img: $r('app.media.ic_news'),
    others: $r('app.string.mine_toggle'),
    clickPrompt: $r('app.string.open_news')
  },
  {
    title: $r('app.string.mine_list_data'),
    img: $r('app.media.ic_data'),
    others: null,
    clickPrompt: $r('app.string.open_data')
  },
  {
    title: $r('app.string.mine_list_menu'),
    img: $r('app.media.ic_menu'),
    others: null,
    clickPrompt: $r('app.string.open_menu')
  },
  {
    title: $r('app.string.mine_list_about'),
    img: $r('app.media.ic_about'),
    others: null,
    clickPrompt: $r('app.string.open_about')
  },
  {
    title: $r('app.string.mine_list_storage'),
    img: $r('app.media.ic_storage'),
    others: null,
    clickPrompt: $r('app.string.clear_storage')
  },
  {
    title: $r('app.string.mine_list_privacy'),
    img: $r('app.media.ic_privacy'),
    others: null,
    clickPrompt: $r('app.string.check_privacy')
  }
];
