import Curves from '@native:ohos.curves';
import router from '@ohos:router';
class Logo extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__opacityValue = new ObservedPropertySimplePU(0, this, "opacityValue");
        this.__scaleValue = new ObservedPropertySimplePU(0, this, "scaleValue");
        this.curve1 = Curves.cubicBezier(0.4, 0, 1, 1);
        this.pathCommands1 = 'M319.5 128.1 c103.5 0 187.5 84 187.5 187.5 v15 a172.5 172.5 0 0 3 -172.5 172.5 H198 a36 36 0 0 3 -13.8 -1 207 207 0 0 0 87 -372 h48.3 z';
        this.pathCommands2 = 'M270.6 128.1 h48.6 c51.6 0 98.4 21 132.3 54.6 a411 411 0 0 3 -45.6 123 c-25.2 45.6 -56.4 84 -87.6 110.4 a206.1 206.1 0 0 0 -47.7 -288 z';
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.opacityValue !== undefined) {
            this.opacityValue = params.opacityValue;
        }
        if (params.scaleValue !== undefined) {
            this.scaleValue = params.scaleValue;
        }
        if (params.curve1 !== undefined) {
            this.curve1 = params.curve1;
        }
        if (params.pathCommands1 !== undefined) {
            this.pathCommands1 = params.pathCommands1;
        }
        if (params.pathCommands2 !== undefined) {
            this.pathCommands2 = params.pathCommands2;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__opacityValue.purgeDependencyOnElmtId(rmElmtId);
        this.__scaleValue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__opacityValue.aboutToBeDeleted();
        this.__scaleValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get opacityValue() {
        return this.__opacityValue.get();
    }
    set opacityValue(newValue) {
        this.__opacityValue.set(newValue);
    }
    get scaleValue() {
        return this.__scaleValue.get();
    }
    set scaleValue(newValue) {
        this.__scaleValue.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center });
            Flex.width('100%');
            Flex.height('100%');
            Flex.linearGradient({
                angle: 180,
                colors: [["#38B0DE", 0.3], ['#3299CC', 0.7]]
            });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Shape.create();
            Shape.height('630px');
            Shape.width('630px');
            Shape.scale({ x: this.scaleValue, y: this.scaleValue });
            Shape.opacity(this.opacityValue);
            Shape.onAppear(() => {
                Context.animateTo({
                    duration: 1000,
                    curve: this.curve1,
                    delay: 100,
                    onFinish: () => {
                        setTimeout(() => {
                            router.pushUrl({ url: "pages/MovieListPage" });
                        }, 1000);
                    }
                }, () => {
                    this.opacityValue = 1;
                    this.scaleValue = 1;
                });
            });
            if (!isInitialRender) {
                Shape.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Path.create();
            Path.commands('M162 128.7 a222 222 0 0 1 100.8 374.4 H198 a36 36 0 0 3 -36 -36');
            Path.fill(Color.White);
            if (!isInitialRender) {
                Path.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Path.create();
            Path.commands(this.pathCommands1);
            Path.fill('none');
            Path.linearGradient({
                angle: 30,
                colors: [["#ff75b9f3", 0], ["#ffffff", 1]]
            });
            Path.clip(new Path().commands(this.pathCommands1));
            if (!isInitialRender) {
                Path.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Path.create();
            Path.commands(this.pathCommands2);
            Path.fill('none');
            Path.linearGradient({
                angle: 50,
                colors: [['#ff309dee', 0.1], ['#ff558cec', 0.4], ["#ffffff", 0.7]]
            });
            Path.clip(new Path().commands(this.pathCommands2));
            if (!isInitialRender) {
                Path.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Shape.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('电影卡片');
            Text.fontSize(26);
            Text.fontColor(Color.White);
            Text.margin({ top: 300 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('随时随地发现好看的新电影！');
            Text.fontSize(17);
            Text.fontColor(Color.White);
            Text.fontStyle(7);
            Text.margin({ left: 2, top: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Logo(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Open.js.map