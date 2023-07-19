/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// import get from '../../common/utils/CommonUtils'

class MovieDataBean {
  sort: number;

  /**
   * Is show sort image
   */
  isShowSort: boolean;

  /***
   * Movie sort image
   */
  sortImage: Resource;

  /**
   * Movie title
   */
  title: string;

  /**
   * Movie describe
   */
  describe: string;

  /**
   * Movie image
   */
  movieImage: Resource;

  /**
   * Show card image
   */
  cardImage: string;

  /**
   * Movie stars
   */
  stars: Resource[];

  /**
   * Movie rating
   */
  rating: string;

  /**
   * Movie introduction
   */
  introduction: string;
}

class FormData {
  topIndex: number;
  topMovieImage: string;
  topTitle: string;
  topDescribe: string;
  bottomIndex: number;
  bottomMovieImage: string;
  bottomTittle: string;
  bottomDescribe: string;
}

let agencyStorage = new LocalStorage();

@Entry(agencyStorage)
@Component
struct DemoCard {
  readonly TITLE: string = 'Hello World';

  /*
   * The action type.
   */
  readonly ACTION_TYPE: string = 'router';

  /*
   * The ability name.
   */
  readonly ABILITY_NAME: string = 'EntryAbility';

  /*
   * The message.
   */
  readonly MESSAGE: string = 'add detail';

  /*
   * The with percentage setting.
   */
  readonly FULL_WIDTH_PERCENT: string = '100%';

  /*
   * The height percentage setting.
   */
  readonly FULL_HEIGHT_PERCENT: string = '100%';
  @LocalStorageProp('topIndex') topIndex: number = 0;
  @LocalStorageProp('topMovieImage') topMovieImage: string = '';
  @LocalStorageProp('topTitle') topTitle: string = '';
  @LocalStorageProp('topDescribe') topDescribe: string = '';
  @LocalStorageProp('bottomIndex') bottomIndex: number = 0;
  @LocalStorageProp('bottomMovieImage') bottomMovieImage: string = '$r(app.media.ic_movie_eight)';
  @LocalStorageProp('bottomTitle') bottomTitle: string = '';
  @LocalStorageProp('bottomDescribe') bottomDescribe: string = '';
  // @State MovieInfo_now : FormData = new FormData();
  // MovieInfo_now.topTitle = topTitle;
  // private topMovieImage;
  // private bottomMovieImage;
  flag: number = 0;

  aboutToAppear() {

    this.topMovieImage = './ic_movie_eight.png';
    this.bottomMovieImage = '$r(app.media.ic_movie_eight)';
    console.log('fdasfsa:' + this.topMovieImage);
    console.log('fdasfsa:' + this.bottomMovieImage);
  }

  // onAppear()

  // onAppear(){
  //
  // }

  build() {
    Column() {
      Row() {
        Stack() {
          Text('每日推荐')
            .backgroundColor($r("app.color.lightcyan"))
            .fontSize(14)
            .fontColor($r("app.color.lightgray"))
            .fontFamily('SimSun')
            .flexGrow(1)
            .width('100%')
            .textAlign(TextAlign.Center)

          Image($r('app.media.loading'))
            .height(14)
            .width(14)
              // .align(Alignment.TopEnd)
            .margin({ right: 20 })
            .margin({ right: 0 })
            .onClick(() => {
              this.updateAbility();
              this.topMovieImage = '../..' + this.topMovieImage;
              this.bottomMovieImage = '../..' + this.bottomMovieImage;
              console.log('cjm1'+ this.topIndex);
              console.log('cjm1: '+ this.topMovieImage);
              // this.topIndex = 0;
              // this.topIndex = 1;
            })
        }.align(Alignment.End)
      }

      Row() {
        Stack({ alignContent: Alignment.TopStart }) {
          Image(this.topMovieImage)
            .objectFit(ImageFit.Cover)
            .borderRadius($r('app.float.movie_image_radius'))
            .width(70)
            .height(70)

          if (1) {
            Image($r('app.media.ic_first'))
              .width($r('app.float.sort_image_size'))
              .height($r('app.float.sort_image_size'))

          }
        }

        Column() {
          Text(this.topTitle)
            .fontSize(15)
            .fontWeight(FontWeight.Bolder)
            .fontColor($r('app.color.common_font_color'))
            .alignSelf(ItemAlign.Start)
            .padding(3)
            .maxLines(2)
            .textOverflow({
              overflow: TextOverflow.Ellipsis
            })

          Text(this.topDescribe)
            .fontSize(12)
            .fontColor($r('app.color.common_font_color'))
            .fontWeight(FontWeight.Normal)
            .opacity($r('app.float.common_opacity'))
            .alignSelf(ItemAlign.Start)
            .maxLines(3)
            .textOverflow({
              overflow: TextOverflow.Ellipsis
            })
        }
        .layoutWeight(1)
        .margin({
          left: $r('app.float.contents_layout_left'),
          right: $r('app.float.contents_layout_right')
        })
      }.onClick(() => {
        this.jumpToAbility(this.topIndex);
      })

      Row() {
        Stack({ alignContent: Alignment.TopStart }) {
          Image(this.bottomMovieImage)
            .objectFit(ImageFit.Cover)
            .borderRadius($r('app.float.movie_image_radius'))
            .width(70)
            .height(70)

          if (1) {
            Image($r('app.media.ic_second'))
              .width($r('app.float.sort_image_size'))
              .height($r('app.float.sort_image_size'))

          }
        }

        Column() {
          Text(this.bottomTitle)
            .fontSize(15)
            .fontWeight(FontWeight.Bolder)
            .fontColor($r('app.color.common_font_color'))
            .alignSelf(ItemAlign.Start)
            .padding(3)
            .maxLines(2)
            .textOverflow({
              overflow: TextOverflow.Ellipsis
            })

          Text(this.bottomDescribe)
            .fontSize(12)
            .fontColor($r('app.color.common_font_color'))
            .fontWeight(FontWeight.Normal)
            .opacity($r('app.float.common_opacity'))
            .alignSelf(ItemAlign.Start)
            .maxLines(3)
            .textOverflow({
              overflow: TextOverflow.Ellipsis
            })
        }
        .layoutWeight(1)
        .margin({
          left: $r('app.float.contents_layout_left'),
          right: $r('app.float.contents_layout_right')
        })
      }.onClick(() => {
        this.jumpToAbility(this.bottomIndex);
      })
    }.backgroundColor($r("app.color.lightcyan"))
  }

  updateAbility() {
    postCardAction(this, {
      'action': 'message',
      'params': {
        'msgTest': 'messageEvent'
      }
    });
  }

  jumpToAbility(index: number) {
    postCardAction(this, {
      'action': this.ACTION_TYPE,
      'abilityName': 'EntryDetailsAbility',
      'params': {
        'whichPage': 'MovieDetailsPage',
        'index': index
      }
    });
  }
}
//   build() {
//     Column() {
//       Row() {
//         Stack() {
//           Text('每日推荐')
//             .backgroundColor($r("app.color.lightcyan"))
//             .fontSize(14)
//             .fontColor($r("app.color.lightgray"))
//             .fontFamily('SimSun')
//           Image($r('app.media.loading'))
//             .height(14)
//             .width(14)
//             .margin({ right: 20 })
//             .onClick(() => {
//               if (this.flag == 0) {
//                 // this.MovieInfo_now = this.MovieInfo2;
//                 this.flag = 1;
//               }
//               else {
//                 // this.MovieInfo_now = this.MovieInfo;
//                 this.flag = 0;
//               }
//             })
//         }.align(Alignment.BottomEnd)
//       }
//
//       // List() {
//       // ForEach(this.MovieInfo_now, (item: MovieDataBean) => {
//       // ListItem() {
//       Column() {
//         Row() {
//           Row() {
//             Stack({ alignContent: Alignment.TopStart }) {
//               Image(this.topMovieImage)
//                 .objectFit(ImageFit.Cover)
//                 .borderRadius($r('app.float.movie_image_radius'))
//                 .width(70)
//                 .height(70)
//                 .onClick(() => {
//                   this.justToAbility(this.topIndex)
//                 })
//               if (1) {
//                 Image($r("app.media.ic_first"))
//                   .width($r('app.float.sort_image_size'))
//                   .height($r('app.float.sort_image_size'))
//               }
//             }
//             .margin({ left: $r('app.float.movie_image_left') })
//
//           }
//
//           Column() {
//             Text(this.topTitle)
//               .fontSize(15)
//               .fontWeight(FontWeight.Bolder)
//               .fontColor($r('app.color.common_font_color'))
//               .alignSelf(ItemAlign.Start)
//               .padding(3)
//               .maxLines(2)
//               .textOverflow({
//                 overflow: TextOverflow.Ellipsis
//               })
//
//             Text(this.topDescribe)
//               .fontSize(12)
//               .fontColor($r('app.color.common_font_color'))
//               .fontWeight(FontWeight.Normal)
//               .opacity($r('app.float.common_opacity'))
//               .alignSelf(ItemAlign.Start)
//               .maxLines(3)
//               .textOverflow({
//                 overflow: TextOverflow.Ellipsis
//               })
//           }
//           .layoutWeight(1)
//           .margin({
//             left: $r('app.float.contents_layout_left'),
//             right: $r('app.float.contents_layout_right')
//           })
//         }
//
//       }
//
//       Column() {
//         Row() {
//           Row() {
//             Stack({ alignContent: Alignment.TopStart }) {
//               Image(this.bottomMovieImage)
//                 .objectFit(ImageFit.Cover)
//                 .borderRadius($r('app.float.movie_image_radius'))
//                 .width(70)
//                 .height(70)
//                 .onClick(() => {
//                   this.justToAbility(this.bottomIndex)
//                 })
//               if (1) {
//                 Image($r("app.media.ic_second"))
//                   .width($r('app.float.sort_image_size'))
//                   .height($r('app.float.sort_image_size'))
//               }
//             }
//             .margin({ left: $r('app.float.movie_image_left') })
//
//           }
//
//           Column() {
//             Text(this.bottomTitle)
//               .fontSize(15)
//               .fontWeight(FontWeight.Bolder)
//               .fontColor($r('app.color.common_font_color'))
//               .alignSelf(ItemAlign.Start)
//               .padding(3)
//               .maxLines(2)
//               .textOverflow({
//                 overflow: TextOverflow.Ellipsis
//               })
//
//             Text(this.bottomDescribe)
//               .fontSize(12)
//               .fontColor($r('app.color.common_font_color'))
//               .fontWeight(FontWeight.Normal)
//               .opacity($r('app.float.common_opacity'))
//               .alignSelf(ItemAlign.Start)
//               .maxLines(3)
//               .textOverflow({
//                 overflow: TextOverflow.Ellipsis
//               })
//           }
//           .layoutWeight(1)
//           .margin({
//             left: $r('app.float.contents_layout_left'),
//             right: $r('app.float.contents_layout_right')
//           })
//         }
//
//       }
//       //
//       // }, item => JSON.stringify(item))
//       // }
//     }.backgroundColor($r("app.color.lightcyan"))
//   }
//
//   justToAbility(num: number) {
//     postCardAction(this, {
//       "action": 'router',
//       "abilityName": 'EntryDetailsAbility',
//       "params": {
//         'whichPage': 'MovieDetailsPage',
//         "index": num
//       }
//     })
//     // console.log('jjjjjjjj' + num);
//   }
// }