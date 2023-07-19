"use strict";
class TabsExample extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__fontColor = new ObservedPropertySimplePU('#182431', this, "fontColor");
        this.__selectedFontColor = new ObservedPropertySimplePU('#007DFF', this, "selectedFontColor");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.controller = new TabsController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.fontColor !== undefined) {
            this.fontColor = params.fontColor;
        }
        if (params.selectedFontColor !== undefined) {
            this.selectedFontColor = params.selectedFontColor;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__fontColor.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedFontColor.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__fontColor.aboutToBeDeleted();
        this.__selectedFontColor.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get fontColor() {
        return this.__fontColor.get();
    }
    set fontColor(newValue) {
        this.__fontColor.set(newValue);
    }
    get selectedFontColor() {
        return this.__selectedFontColor.get();
    }
    set selectedFontColor(newValue) {
        this.__selectedFontColor.set(newValue);
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    TabBuilder(index, name, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/test.ets(10:5)");
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(name);
            Text.debugLine("pages/test.ets(11:7)");
            Text.fontColor(this.currentIndex === index ? this.selectedFontColor : this.fontColor);
            Text.fontSize(16);
            Text.fontWeight(this.currentIndex === index ? 500 : 400);
            Text.lineHeight(22);
            Text.margin({ top: 17, bottom: 7 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("pages/test.ets(17:7)");
            Divider.strokeWidth(2);
            Divider.color('#007DFF');
            Divider.opacity(this.currentIndex === index ? 1 : 0);
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/test.ets(25:5)");
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({ barPosition: BarPosition.Start, controller: this.controller });
            Tabs.debugLine("pages/test.ets(26:7)");
            Tabs.vertical(false);
            Tabs.barMode(BarMode.Fixed);
            Tabs.barWidth(360);
            Tabs.barHeight(56);
            Tabs.animationDuration(400);
            Tabs.onChange((index) => {
                this.currentIndex = index;
            });
            Tabs.width(360);
            Tabs.height(296);
            Tabs.margin({ top: 52 });
            Tabs.backgroundColor('#F1F3F5');
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.debugLine("pages/test.ets(28:11)");
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor('#00CB87');
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 0, 'green');
                } });
            TabContent.debugLine("pages/test.ets(27:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.debugLine("pages/test.ets(32:11)");
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor('#007DFF');
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 1, 'blue');
                } });
            TabContent.debugLine("pages/test.ets(31:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.debugLine("pages/test.ets(36:11)");
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor('#FFBF00');
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 2, 'yellow');
                } });
            TabContent.debugLine("pages/test.ets(35:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.debugLine("pages/test.ets(40:11)");
                    Column.width('100%');
                    Column.height('100%');
                    Column.backgroundColor('#E67C92');
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 3, 'pink');
                } });
            TabContent.debugLine("pages/test.ets(39:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new TabsExample(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=test.js.map