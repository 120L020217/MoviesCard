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
import MovieDataBean from '../common/bean/MovieDataBean';
import StarsWidget from './StarsWidget';
import Logger from '../common/utils/Logger';
import Curves from '@ohos.curves'
@Preview
@Component
export default struct MovieDetailsTitle {
  @ObjectLink movieDetail: MovieDataBean;
  @State movieImage: Resource = undefined;
  @State title: string = '';
  @State rating: string = '';
  @State stars: Resource[] = undefined;
  @State describe: string = '';
  @State isComplete: boolean = false;


  @Builder labelIcon(icon) {
    Image(icon)
      .width('30vp')
      .height('30vp')
      .margin({ left: $r('app.float.see_button_left') })
      .alignSelf(ItemAlign.End)
      .onClick(() => {
        this.isComplete = !this.isComplete;
      })
  }

  aboutToAppear() {
    if (CommonUtils.isEmpty(this.movieDetail)) {
      Logger.error(CommonConstants.TAG_DETAILS_COMPONENT, 'movieDetail is null');
      return;
    }
    this.movieImage = this.movieDetail.movieImage;
    this.title = this.movieDetail.title;
    this.rating = this.movieDetail.rating;
    this.stars = this.movieDetail.stars;
    this.describe = this.movieDetail.describe;
  }

  build() {
    Row() {
      Image(this.movieDetail.movieImage)
        .objectFit(ImageFit.Cover)
        .borderRadius($r('app.float.title_image_radius'))
        .width($r('app.float.title_image_width'))
        .height($r('app.float.title_image_height'))
        .sharedTransition(this.title, { duration: 1000, curve: Curves.cubicBezier(0.2, 0.2, 0.1, 1.0), delay: 100 })
      Column() {
        Text(this.movieDetail.title)
          .fontSize($r('app.float.title_size'))
          .fontWeight(FontWeight.Bolder)
          .fontColor($r('app.color.common_font_color'))
          .alignSelf(ItemAlign.Start)
        StarsWidget({
          rating: this.rating,
          stars: this.stars
        })
        Text(this.movieDetail.describe)
          .fontSize($r('app.float.describe_size'))
          .fontColor($r('app.color.common_font_color'))
          .fontWeight(FontWeight.Normal)
          .opacity($r('app.float.common_opacity'))
          .alignSelf(ItemAlign.Start)
          .margin({ bottom: $r("app.float.describe_bottom") })
        Row(){
          Text($r('app.string.click_to_play'))
            .fontWeight(FontWeight.Bolder)
            .fontSize($r("app.float.see_button_size"))
            .textAlign(TextAlign.Center)
            .fontColor(Color.White)
            .borderRadius($r("app.float.see_button_radius"))
            .alignSelf(ItemAlign.Start)
            .backgroundColor($r("app.color.see_button_background"))
            .width($r("app.float.see_button_width"))
            .height($r("app.float.see_button_height"))
          Blank().width('5')
          if (this.isComplete) {
            this.labelIcon($r('app.media.ic_favorite'));
          } else {
            this.labelIcon($r('app.media.ic_empty_star'));
          }
        }.align(Alignment.Start)
        .alignSelf(ItemAlign.Start)
      }
      .layoutWeight(StyleConstants.WEIGHT_ONE)
      .margin({ left: $r('app.float.see_button_left') })
    }
    .alignSelf(ItemAlign.Start)
  }
}