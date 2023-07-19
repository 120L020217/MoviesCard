import Curves from '@ohos.curves'
import router from '@ohos.router'

@Entry
@Component
struct Logo {
  @State private opacityValue: number = 0
  @State private scaleValue: number = 0
  private curve1 = Curves.cubicBezier(0.4, 0, 1, 1)
  private pathCommands1: string = 'M319.5 128.1 c103.5 0 187.5 84 187.5 187.5 v15 a172.5 172.5 0 0 3 -172.5 172.5 H198 a36 36 0 0 3 -13.8 -1 207 207 0 0 0 87 -372 h48.3 z'
  private pathCommands2: string = 'M270.6 128.1 h48.6 c51.6 0 98.4 21 132.3 54.6 a411 411 0 0 3 -45.6 123 c-25.2 45.6 -56.4 84 -87.6 110.4 a206.1 206.1 0 0 0 -47.7 -288 z'

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Shape() {
        Path()
          .commands('M162 128.7 a222 222 0 0 1 100.8 374.4 H198 a36 36 0 0 3 -36 -36')
          .fill(Color.White)
        Path()
          .commands(this.pathCommands1)
          .fill('none')
          .linearGradient(
            {
              angle: 30,
              colors: [["#ff75b9f3", 0], ["#ffffff", 1]]
            })
          .clip(new Path().commands(this.pathCommands1))

        Path()
          .commands(this.pathCommands2)
          .fill('none')
          .linearGradient(
            {
              angle: 50,
              colors: [['#ff309dee', 0.1], ['#ff558cec', 0.4], ["#ffffff", 0.7]]
            })
          .clip(new Path().commands(this.pathCommands2))
      }
      .height('630px')
      .width('630px')
      .scale({ x: this.scaleValue, y: this.scaleValue })
      .opacity(this.opacityValue)
      .onAppear(() => {
        animateTo({
          duration: 1000,
          curve: this.curve1,
          delay: 100,
          onFinish: () => {
            setTimeout(() => {
              router.pushUrl({ url: "pages/MovieListPage" })
            }, 1000);
          }
        }, () => {
          this.opacityValue = 1
          this.scaleValue = 1
        })
      })

      Text('电影卡片')
        .fontSize(26)
        .fontColor(Color.White)
        .margin({ top: 300 })

      Text('随时随地发现好看的新电影！')
        .fontSize(17)
        .fontColor(Color.White)
        .fontStyle(7)
        .margin({ left : 2, top: 10 })
    }
    .width('100%')
    .height('100%')
    .linearGradient(
      {
        angle: 180,
        colors: [["#38B0DE", 0.3],['#3299CC', 0.7]]
      })
  }
}