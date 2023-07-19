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

import router from '@ohos.router';
import MovieStills from '../view/MovieStills';
import MovieStarring from '../view/MovieStarring';
import CommonConstants from '../common/constants/CommonConstants';
import StyleConstants from '../common/constants/StyleConstants';
import CommonUtils from '../common/utils/CommonUtils';
import MovieDataBean from '../common/bean/MovieDataBean';
import StoryIntroduce from '../view/StoryIntroduce';
import MovieDetailsTitle from '../view/MovieDetailsTitle';
import Logger from '../common/utils/Logger';

@Entry
@Component
struct MovieDetailPage {
  @State introduction: string = '';
  @State movieData: MovieDataBean = undefined;

  aboutToAppear() {
    let index: number = 0;
    if (!CommonUtils.isEmpty(router.getParams())) {
      index = router.getParams()[CommonConstants.INDEX_KEY] ?? 0;
    } else {
      index = globalThis.position ?? 0;
    }
    let listData: MovieDataBean[] = CommonUtils.getListData();
    if (CommonUtils.isEmptyArr(listData)) {
      Logger.error(CommonConstants.TAG_DETAILS_PAGE, 'listData is 0');
      return;
    }
    this.movieData = listData[index];
    this.introduction = listData[index].introduction;
  }

  onPageShow(){
    let index: number = 0;
    if (!CommonUtils.isEmpty(router.getParams())) {
      index = router.getParams()[CommonConstants.INDEX_KEY] ?? 0;
    } else {
      index = globalThis.position ?? 0;
    }
    Logger.info("cjm " + index);
    let listData: MovieDataBean[] = CommonUtils.getListData();
    if (CommonUtils.isEmptyArr(listData)) {
      Logger.error(CommonConstants.TAG_DETAILS_PAGE, 'listData is 0');
      return;
    }
    // this.movieData = listData[index];
    this.introduction = listData[index].introduction;
    this.movieData.describe = listData[index].describe;
    this.movieData.title = listData[index].title;
    this.movieData.movieImage = listData[index].movieImage;
    this.movieData.stars = listData[index].stars;
    this.movieData.rating = listData[index].rating;
    Logger.info("cjm " + listData[index].describe);
    Logger.info("cjm " + this.movieData.describe);
  }

  build() {
    Column() {
      Row(){
        Blank().width('2%')
        Image($r('app.media.ic_left_grey'))
          // .margin({top : 7})
          .height('5%')
          .width('5%')
          .alignSelf(ItemAlign.Start)
          .onClick((event: ClickEvent) => {
            router.back()
          })
        Text($r('app.string.text_movie_details'))
          .fontWeight(FontWeight.Bolder)
          .fontSize($r('app.float.movie_details_size'))
          .alignSelf(ItemAlign.Start)
          .margin({
            left: StyleConstants.COMMON_MARGIN_LEFT,
            top: StyleConstants.DETAILS_COMMON_MARGIN,
            bottom: StyleConstants.DETAILS_COMMON_MARGIN
          })
          .height($r('app.float.details_text_height'))
      }.alignSelf(ItemAlign.Start)
      Column() {
        MovieDetailsTitle({
          movieDetail: this.movieData
        })
        StoryIntroduce({
          introduction: $introduction
        })
      }
      .margin({
        left: $r("app.float.column_margin"),
        right: $r("app.float.column_margin")
      })
      .padding({
        left: $r("app.float.column_padding"),
        top: $r("app.float.column_padding"),
        right: $r("app.float.column_padding"),
        bottom: $r('app.float.column_padding_bottom') })
      .borderRadius($r('app.float.column_details_radius'))
      .backgroundColor(Color.White)
      .width(StyleConstants.COLUMN_DETAILS_WIDTH)

      MovieStarring()
      MovieStills()
    }
    .backgroundColor($r("app.color.common_background_color"))
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.FULL_HEIGHT)
  }
}