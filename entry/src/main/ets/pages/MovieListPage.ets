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

import StyleConstants from '../common/constants/StyleConstants';
import DataSource from '../common/datasource/DataSource';
import CommonConstants from '../common/constants/CommonConstants';
import MovieDataBean from '../common/bean/MovieDataBean';
import MovieItem from '../view/MovieItem';
import CommonUtils from '../common/utils/CommonUtils';
import router from '@ohos.router';
import Logger from '../common/utils/Logger';
import {BreakpointSystem}  from '../common/utils/BreakpointSystem';
import PutDownRefresh from '../view/PutDownRefreshLayout';
import { BreakpointConstants } from '../common/constants/BreakpointConstants';
import Curves from '@ohos.curves'

/**
 * MovieListPage is the program entry and displays movie ranking data.
 * The message is displayed on the notification bar. The card data can be updated normally.
 * Developers can open the notification bar.
 */
@Entry
@Component
struct MovieListPage {
  // Lazy loading of matching data sources.
  private dataSource: DataSource<MovieDataBean>;
  private dataSource_1: DataSource<MovieDataBean>;
  private searchItem: MovieDataBean;
  private listData: MovieDataBean[] = CommonUtils.getListData_2();
  private listData1: MovieDataBean[] = CommonUtils.getListData();

  private currentOffsetY: number = 0;
  private timer: number = 0;
  private breakpointSystem: BreakpointSystem = new BreakpointSystem();

  private controller: TabsController = new TabsController()
  private swiperController: SwiperController = new SwiperController();

  @State fontColor: string = '#182431'
  @State selectedFontColor: string = '#007DFF'
  @State currentIndex: number = 0

  @State refreshStatus: boolean = false;
  @State refreshText: Resource = $r('app.string.refresh_text');
  @State account: string = '';
  @State isSearch: number = 0;
  @StorageProp('currentBreakpoint') currentBreakpoint: string = 'sm';

  @Builder TabBuilder(index: number, name: string) {
    Column() {
      Text(name)
        .fontColor(this.currentIndex === index ? this.selectedFontColor : this.fontColor)
        .fontSize(20)
        .fontWeight(this.currentIndex === index ? 500 : 400)
        .lineHeight(22)
        .margin({ top: 7, bottom: 7 })
      Divider()
        .strokeWidth(2)
        .color('#007DFF')
        .opacity(this.currentIndex === index ? 1 : 0)
    }
    .width('100%')
  }

  putDownRefresh(event: TouchEvent) {
    switch (event.type) {
      case TouchType.Down:
        this.currentOffsetY = event.touches[0].y;
        break;
      case TouchType.Move:
        this.refreshStatus = event.touches[0].y - this.currentOffsetY > 100;
        break;
      case TouchType.Cancel:
        break;
      case TouchType.Up:

      // Only simulation effect, no data request
        this.timer = setTimeout(() => {
          this.refreshStatus = false;
        }, 1500);
        break;
    }
  }
  aboutToAppear() {
    this.dataSource = new DataSource(CommonUtils.getListData());
    this.dataSource_1 = new DataSource(CommonUtils.getListData_1());
    this.breakpointSystem.register();
    // Start the timer and update the card data every 10 seconds.
    CommonUtils.startTimer();
  }

  aboutToDisappear() {
    this.breakpointSystem.unregister();
  }


  build() {

    Column() {

      Row(){

        Image($r('app.media.ic_account'))
          .width($r('app.float.mine_count_size'))
          .height($r('app.float.mine_count_size'))
          .margin({ top: $r('app.float.input_margin_top'), left:$r('app.float.icon_margin') })
          .onClick((event: ClickEvent) => {
            router.pushUrl({
              url: 'pages/HomePage'
            }).catch((error) => {
              Logger.error('CommonUtils', 'replace url error ' + JSON.stringify(error));
            });
          })

        Blank().width('2%')

        TextInput({ placeholder: $r('app.string.account') })
          .maxLength(StyleConstants.INPUT_ACCOUNT_LENGTH)
          .type(InputType.Normal)
          .opacity($r('app.float.title_opacity'))
          .inputStyle()
          .layoutWeight(1)
          .onChange((value: string) => {
            this.account = value;
          })
          .backgroundColor(Color.White)
          .borderRadius($r('app.float.login_input_radius'))

        Image($r('app.media.search'))
          .width($r('app.float.mine_title_size'))
          .height($r('app.float.mine_title_size'))
          .margin({ top: $r('app.float.input_margin_top'),right: $r('app.float.icon_margin')})
          .onClick((event: ClickEvent) => {
            for(let item of this.listData1){
              if (this.account == item.title) {
                this.isSearch = 1;
                this.searchItem = item;
              }
            }
          })
        }
      .width(StyleConstants.FULL_WIDTH)
      .height($r('app.float.title_bar_height'))
      .zIndex(2)

      if(this.isSearch == 1){
        MovieItem({movieItem: this.searchItem})
          .margin({top : 10})
          .align(Alignment.TopStart)

        Image($r('app.media.ic_left_grey'))
          .margin({top : 7})
          .height('18')
          .width('18')
          .onClick((event: ClickEvent) => {
            router.pushUrl({
              url: 'pages/MovieListPage'
            }).catch((error) => {
              Logger.error('CommonUtils', 'replace url error ' + JSON.stringify(error));
            });
          })

      }
      else{
        Navigator({ target: 'pages/MovieListDetail' }) {
          Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }){
            Tabs({ barPosition: BarPosition.Start, controller: this.controller }) {
              TabContent() {
                Scroll() {
                  Column() {
                    if (this.refreshStatus) {
                      PutDownRefresh({ refreshText: $refreshText })
                    }
                    Swiper(this.swiperController) {
                      ForEach(this.listData, (item: MovieDataBean) => {
                        Stack() {
                          Image(item.movieImage)
                            .borderRadius('16vp')
                            .autoResize(false)
                            .sharedTransition(item.title, { duration: 1000, curve: Curves.cubicBezier(0.2, 0.2, 0.1, 1.0), delay: 100 })
                          Text(item.title)
                            .width('100%')
                            .fontColor('#ffffffff')
                            .height('300vp')
                            .fontWeight(FontWeight.Medium)
                            .fontSize('24vp')
                              // .padding({ top: ('8vp'), left: ('8vp') })
                            .margin({left:10})
                        }
                        .align(Alignment.End)

                        .onClick(() => {
                          router.pushUrl({
                            url: CommonConstants.SEE_BUTTON_PUSH,
                            params: {
                              index: item.sort
                            }
                          }).catch((error) => {
                            Logger.error(CommonConstants.TAG_MOVIE_ITEM, 'push error ' + JSON.stringify(error));
                          });
                        })
                      })
                    }
                    .margin({ top: ('0') })
                    .autoPlay(true)
                    .width('90%')
                    .height('25%')

                    List({ space: StyleConstants.LIST_COMPONENT_SPACE }) {
                      LazyForEach(this.dataSource, (item: MovieDataBean) => {
                        ListItem() {
                          MovieItem({ movieItem: item });
                        }
                      }, item => JSON.stringify(item))
                    }
                    .listDirection(Axis.Vertical)
                    .edgeEffect(EdgeEffect.None)
                    //.layoutWeight(StyleConstants.WEIGHT_ONE)
                    .width(StyleConstants.FULL_WIDTH)
                    .lanes(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                    CommonConstants.COL_TWO : CommonConstants.COL_ONE)
                    //.height('70%')
                    //Column().width('100%').height('100%').backgroundColor('#00CB87')
                    Text($r('app.string.to_bottom')).fontSize(16).fontColor('#989A9C')
                  }
                }
                .scrollBar(BarState.Off)
                .edgeEffect(EdgeEffect.Spring)
                .width('100%')
                .height('100%')
                .backgroundColor("#ffffffff")
                .onTouch((event) => {
                  this.putDownRefresh(event);
                })
              }
              .tabBar(this.TabBuilder(0, '全部'))

              TabContent() {
                List({ space: StyleConstants.LIST_COMPONENT_SPACE }) {
                  LazyForEach(this.dataSource_1, (item: MovieDataBean) => {
                    ListItem() {
                      MovieItem({ movieItem: item });
                    }
                  }, item => JSON.stringify(item))
                }
                .listDirection(Axis.Vertical)
                .edgeEffect(EdgeEffect.None)
                .layoutWeight(StyleConstants.WEIGHT_ONE)
                .width(StyleConstants.FULL_WIDTH)
                .height(StyleConstants.BIG_HEIGHT)
                .lanes(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                CommonConstants.COL_TWO : CommonConstants.COL_ONE)
                //Column().width('100%').height('100%').backgroundColor('#007DFF')
              }.tabBar(this.TabBuilder(1, '科幻'))

              TabContent() {
                List({ space: StyleConstants.LIST_COMPONENT_SPACE }) {
                  LazyForEach(this.dataSource, (item: MovieDataBean) => {
                    ListItem() {
                      MovieItem({ movieItem: item });
                    }
                  }, item => JSON.stringify(item))
                }
                .listDirection(Axis.Vertical)
                .edgeEffect(EdgeEffect.None)
                .layoutWeight(StyleConstants.WEIGHT_ONE)
                .width(StyleConstants.FULL_WIDTH)
                .height(StyleConstants.BIG_HEIGHT)
                .lanes(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                CommonConstants.COL_TWO : CommonConstants.COL_ONE)
                //Column().width('100%').height('100%').backgroundColor('#FFBF00')
              }.tabBar(this.TabBuilder(2, '喜剧'))

              TabContent() {
                List({ space: StyleConstants.LIST_COMPONENT_SPACE }) {
                  LazyForEach(this.dataSource, (item: MovieDataBean) => {
                    ListItem() {
                      MovieItem({ movieItem: item });
                    }
                  }, item => JSON.stringify(item))
                }
                .listDirection(Axis.Vertical)
                .edgeEffect(EdgeEffect.None)
                .layoutWeight(StyleConstants.WEIGHT_ONE)
                .width(StyleConstants.FULL_WIDTH)
                .height(StyleConstants.BIG_HEIGHT)
                .lanes(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                CommonConstants.COL_TWO : CommonConstants.COL_ONE)
                //Column().width('100%').height('100%').backgroundColor('#E67C92')
              }.tabBar(this.TabBuilder(3, '悬疑'))

            }
            .vertical(false)
            .barMode(BarMode.Fixed)
            .barWidth("100%")
            .barHeight(56)
            .animationDuration(400)
            .onChange((index: number) => {
              this.currentIndex = index
            })
            //.width(StyleConstants.FULL_WIDTH)
            //.height(StyleConstants.FULL_HEIGHT)
            .margin({ top: 0 })
            .backgroundColor('#F1F3F5')
          }
        }
      }


    }
    .backgroundColor($r('app.color.common_background_color'))
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.FULL_HEIGHT)
  }


}
@Extend(TextInput) function inputStyle() {
  .placeholderColor($r('app.color.placeholder_color'))
  .height($r('app.float.login_input_height'))
  .fontSize($r('app.float.normal_text_size'))
  .backgroundColor(Color.White)
  .margin({ top: $r('app.float.input_margin_top') })
  .padding({ left: StyleConstants.INPUT_LEFT })
}

