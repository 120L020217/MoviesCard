/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import CommonConstants from '../common/constants/CommonConstants';
import StyleConstants from '../common/constants/StyleConstants';
import CommonUtils from '../common/utils/CommonUtils';
import ItemData from '../common/bean/ItemData';
import mainViewModel from '../viewmodel/MainViewModel';
import Logger from '../common/utils/Logger';
import router from '@ohos.router';

@Entry
@Component
export default struct HomePage {
  build() {
    GridRow({
      columns: {
        sm: StyleConstants.COLUMNS_SM,
        md: StyleConstants.COLUMNS_MD,
        lg: StyleConstants.COLUMNS_LG
      },
      gutter: {
        x: StyleConstants.GRID_GUTTER
      }
    }) {
      GridCol({
        span: {
          sm: StyleConstants.SPAN_SM,
          md: StyleConstants.SPAN_MD,
          lg: StyleConstants.SPAN_LG
        }, offset: {
          md: StyleConstants.OFFSET_MD,
          lg: StyleConstants.OFFSET_LG
        }
      }) {
        Column() {

          Image($r('app.media.ic_left_grey'))
            .margin({top : 7})
            .height('5%')
            .width('5%')
            .alignSelf(ItemAlign.Start)
            .onClick((event: ClickEvent) => {
              router.back()
            })


          // Mine title component
          MineTitleView()
          CenterGridView()
          // Mine list component
          MineListView()
          Blank()
          /*Button($r('app.string.mine_button'))
            .width(StyleConstants.BUTTON_WIDTH)
            .height($r('app.float.login_button_height'))
            .fontSize($r('app.float.normal_text_size'))
            .fontColor($r('app.color.logout_font_color'))
            .fontWeight(FontWeight.Medium)
            .backgroundColor($r('app.color.mine_button_color'))
            .margin({ bottom: $r('app.float.mine_button_bottom') })
            .onClick(() => this.logout())*/
        }
        .height(StyleConstants.FULL_PARENT)
        .padding({
          left: $r('app.float.mine_layout_padding'),
          right: $r('app.float.mine_layout_padding')
        })
      }
    }
    .backgroundColor($r('app.color.background'))
  }

  /**
   * Log out
   */
  /*logout() {
    Logger.info(CommonConstants.TAG_MINE_PAGE, 'Logout');
    CommonUtils.routerPage(CommonConstants.LOGIN_PAGE_URL);
  }*/
}

@Preview
@Component
struct MineTitleView {
  build() {
    Row() {
      Image($r('app.media.ic_account'))
        .width($r('app.float.mine_title_size'))
        .height($r('app.float.mine_title_size'))
      Column() {
        Text('我的')
          .fontSize($r('app.float.title_font_size'))

      }
      .margin({ left: $r('app.float.mine_title_margin') })
      .alignItems(HorizontalAlign.Start)
    }
    .alignItems(VerticalAlign.Center)
    .width(StyleConstants.FULL_PARENT)
    .height($r('app.float.mine_title_height'))
    .backgroundColor(Color.White)
    .padding({ left: $r('app.float.mine_title_padding') })
    .borderRadius($r('app.float.title_component_radius'))
    .margin({
      top: $r('app.float.account_margin_top'),
      bottom: $r('app.float.account_margin_bottom')
    })
  }
}
@Component
struct CenterGridView {
  build() {
    Column() {
      Grid() {
        ForEach(mainViewModel.getCenterGridData(), (item: ItemData) => {
          GridItem() {
            GridItemView({ item: item })
          }
        }, item => JSON.stringify(item))
      }
      .columnsTemplate(StyleConstants.GRID_COLUMNS)
      .rowsTemplate(StyleConstants.GRID_ROWS)
      .columnsGap($r('app.float.grid_column_gap'))
      .rowsGap($r('app.float.grid_row_gap'))
      .height(StyleConstants.HOME_GRID_HEIGHT)
      .backgroundColor(Color.White)
      .borderRadius($r('app.float.home_grid_radius'))
      .padding({
        top: $r('app.float.home_grid_padding'),
        bottom: $r('app.float.home_grid_padding')
      })
      .width(StyleConstants.COMMON_WIDTH)
      .margin($r('app.float.common_margin'))
    }
  }
}
@Preview
@Component
struct MineListView {
  build() {
    List() {
      ForEach(mainViewModel.getMineListData(), (item: ItemData) => {
        ListItem() {
          Item({ item: item })
        }
        .height($r('app.float.mine_list_height'))
      }, item => JSON.stringify(item))
    }
    .width(StyleConstants.FULL_PARENT)
    .backgroundColor(Color.White)
    .divider({
      strokeWidth: $r('app.float.list_stroke_width'),
      color: $r('app.color.item_divider_color'),
      startMargin: $r('app.float.list_start_margin'),
      endMargin: $r('app.float.list_end_margin')
    })
    .borderRadius($r('app.float.mine_list_radius'))
    .padding({
      top: $r('app.float.mine_list_padding'),
      bottom: $r('app.float.mine_list_padding')
    })
  }
}

@Component
struct Item {
  private item: ItemData;
  private itemCellImage: Resource;
  private itemCellTitle: Resource;
  private itemCellOthers: Resource;
  private itemClickPrompt: Resource;

  aboutToAppear() {
    if (this.item) {
      Logger.info(CommonConstants.TAG_LIST_ITEM, 'item = ' + JSON.stringify(this.item));
      this.itemCellImage = this.item.img;
      this.itemCellTitle = this.item.title;
      this.itemCellOthers = this.item.others;
      this.itemClickPrompt = this.item.clickPrompt;
    }
  }

  build() {
    Row() {
      Row({ space: StyleConstants.COMMON_SPACE }) {
        Image(this.itemCellImage)
          .width($r('app.float.mine_item_size'))
          .height($r('app.float.mine_item_size'))
        Text(this.itemCellTitle)
          .fontSize($r('app.float.normal_text_size'))
      }

      if (this.itemCellOthers === null) {
        Image($r('app.media.ic_right_grey'))
          .width($r('app.float.mine_arrow_width'))
          .height($r('app.float.mine_arrow_height'))
      } else {
        Toggle({ type: ToggleType.Switch, isOn: false })
          .onChange((isChange: boolean) => {
            let change: Resource = isChange ? $r('app.string.open_news') : $r('app.string.close_news');
            CommonUtils.showToastContent(change);
          })
      }
    }
    .justifyContent(FlexAlign.SpaceBetween)
    .width(StyleConstants.FULL_PARENT)
    .padding({
      left: $r('app.float.mine_item_margin'),
      right: $r('app.float.mine_item_margin')
    })
    .onClick(() => {
      if (this.itemCellOthers === null) {
        CommonUtils.showToastContent(this.itemClickPrompt);
      }
    })
  }
}
@Component
struct GridItemView {
  private item: ItemData;
  private gridItemImg: Resource;
  private gridItemTitle: Resource;
  private gridItemPrompt: Resource;

  aboutToAppear() {
    if (this.item !== undefined) {
      this.gridItemImg = this.item.img;
      this.gridItemTitle = this.item.title;
      this.gridItemPrompt = this.item.clickPrompt;
    }
  }

  build() {
    Column() {
      Image(this.gridItemImg)
        .width($r('app.float.home_cell_size'))
        .height($r('app.float.home_cell_size'))
      Text(this.gridItemTitle)
        .fontSize($r('app.float.little_text_size'))
        .margin({ top: $r('app.float.home_cell_margin') })
    }
    .onClick(() => {
      CommonUtils.showToastContent(this.gridItemPrompt);
    })
  }
}

