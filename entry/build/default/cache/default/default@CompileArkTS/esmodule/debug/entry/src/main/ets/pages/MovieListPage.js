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
import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import DataSource from '@bundle:com.huawei.moviecard/entry/ets/common/datasource/DataSource';
import CommonConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
import MovieItem from '@bundle:com.huawei.moviecard/entry/ets/view/MovieItem';
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import router from '@ohos:router';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
import { BreakpointSystem } from '@bundle:com.huawei.moviecard/entry/ets/common/utils/BreakpointSystem';
import PutDownRefresh from '@bundle:com.huawei.moviecard/entry/ets/view/PutDownRefreshLayout';
import { BreakpointConstants } from '@bundle:com.huawei.moviecard/entry/ets/common/constants/BreakpointConstants';
import Curves from '@native:ohos.curves';
class MovieListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.dataSource = undefined;
        this.dataSource_1 = undefined;
        this.searchItem = undefined;
        this.listData = CommonUtils.getListData_2();
        this.listData1 = CommonUtils.getListData();
        this.currentOffsetY = 0;
        this.timer = 0;
        this.breakpointSystem = new BreakpointSystem();
        this.controller = new TabsController();
        this.swiperController = new SwiperController();
        this.__fontColor = new ObservedPropertySimplePU('#182431', this, "fontColor");
        this.__selectedFontColor = new ObservedPropertySimplePU('#007DFF', this, "selectedFontColor");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__refreshStatus = new ObservedPropertySimplePU(false, this, "refreshStatus");
        this.__refreshText = new ObservedPropertyObjectPU({ "id": 16777265, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, this, "refreshText");
        this.__account = new ObservedPropertySimplePU('', this, "account");
        this.__isSearch = new ObservedPropertySimplePU(0, this, "isSearch");
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'sm', "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.dataSource !== undefined) {
            this.dataSource = params.dataSource;
        }
        if (params.dataSource_1 !== undefined) {
            this.dataSource_1 = params.dataSource_1;
        }
        if (params.searchItem !== undefined) {
            this.searchItem = params.searchItem;
        }
        if (params.listData !== undefined) {
            this.listData = params.listData;
        }
        if (params.listData1 !== undefined) {
            this.listData1 = params.listData1;
        }
        if (params.currentOffsetY !== undefined) {
            this.currentOffsetY = params.currentOffsetY;
        }
        if (params.timer !== undefined) {
            this.timer = params.timer;
        }
        if (params.breakpointSystem !== undefined) {
            this.breakpointSystem = params.breakpointSystem;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
        if (params.fontColor !== undefined) {
            this.fontColor = params.fontColor;
        }
        if (params.selectedFontColor !== undefined) {
            this.selectedFontColor = params.selectedFontColor;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.refreshStatus !== undefined) {
            this.refreshStatus = params.refreshStatus;
        }
        if (params.refreshText !== undefined) {
            this.refreshText = params.refreshText;
        }
        if (params.account !== undefined) {
            this.account = params.account;
        }
        if (params.isSearch !== undefined) {
            this.isSearch = params.isSearch;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__fontColor.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedFontColor.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__refreshStatus.purgeDependencyOnElmtId(rmElmtId);
        this.__refreshText.purgeDependencyOnElmtId(rmElmtId);
        this.__account.purgeDependencyOnElmtId(rmElmtId);
        this.__isSearch.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__fontColor.aboutToBeDeleted();
        this.__selectedFontColor.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__refreshStatus.aboutToBeDeleted();
        this.__refreshText.aboutToBeDeleted();
        this.__account.aboutToBeDeleted();
        this.__isSearch.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
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
    get refreshStatus() {
        return this.__refreshStatus.get();
    }
    set refreshStatus(newValue) {
        this.__refreshStatus.set(newValue);
    }
    get refreshText() {
        return this.__refreshText.get();
    }
    set refreshText(newValue) {
        this.__refreshText.set(newValue);
    }
    get account() {
        return this.__account.get();
    }
    set account(newValue) {
        this.__account.set(newValue);
    }
    get isSearch() {
        return this.__isSearch.get();
    }
    set isSearch(newValue) {
        this.__isSearch.set(newValue);
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    TabBuilder(index, name, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(name);
            Text.fontColor(this.currentIndex === index ? this.selectedFontColor : this.fontColor);
            Text.fontSize(20);
            Text.fontWeight(this.currentIndex === index ? 500 : 400);
            Text.lineHeight(22);
            Text.margin({ top: 7, bottom: 7 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
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
    putDownRefresh(event) {
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundColor({ "id": 16777277, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.width(StyleConstants.FULL_WIDTH);
            Column.height(StyleConstants.FULL_HEIGHT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 16777421, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Row.zIndex(2);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777431, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width({ "id": 16777364, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777364, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.margin({ top: { "id": 16777332, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, left: { "id": 16777328, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Image.onClick((event) => {
                router.pushUrl({
                    url: 'pages/HomePage'
                }).catch((error) => {
                    Logger.error('CommonUtils', 'replace url error ' + JSON.stringify(error));
                });
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.width('2%');
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777224, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            TextInput.maxLength(StyleConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Normal);
            TextInput.opacity({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            __TextInput__inputStyle();
            TextInput.layoutWeight(1);
            TextInput.onChange((value) => {
                this.account = value;
            });
            TextInput.backgroundColor(Color.White);
            TextInput.borderRadius({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777488, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width({ "id": 16777375, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777375, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.margin({ top: { "id": 16777332, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, right: { "id": 16777328, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Image.onClick((event) => {
                for (let item of this.listData1) {
                    if (this.account == item.title) {
                        this.isSearch = 1;
                        this.searchItem = item;
                    }
                }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isSearch == 1) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        __Common__.create();
                        __Common__.margin({ top: 10 });
                        __Common__.align(Alignment.TopStart);
                        if (!isInitialRender) {
                            __Common__.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new MovieItem(this, { movieItem: this.searchItem }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                    __Common__.pop();
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777451, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        Image.margin({ top: 7 });
                        Image.height('18');
                        Image.width('18');
                        Image.onClick((event) => {
                            router.pushUrl({
                                url: 'pages/MovieListPage'
                            }).catch((error) => {
                                Logger.error('CommonUtils', 'replace url error ' + JSON.stringify(error));
                            });
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Navigator.create({ target: 'pages/MovieListDetail' });
                        if (!isInitialRender) {
                            Navigator.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Flex.create({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center });
                        if (!isInitialRender) {
                            Flex.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Tabs.create({ barPosition: BarPosition.Start, controller: this.controller });
                        Tabs.vertical(false);
                        Tabs.barMode(BarMode.Fixed);
                        Tabs.barWidth("100%");
                        Tabs.barHeight(56);
                        Tabs.animationDuration(400);
                        Tabs.onChange((index) => {
                            this.currentIndex = index;
                        });
                        Tabs.margin({ top: 0 });
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
                                Scroll.create();
                                Scroll.scrollBar(BarState.Off);
                                Scroll.edgeEffect(EdgeEffect.Spring);
                                Scroll.width('100%');
                                Scroll.height('100%');
                                Scroll.backgroundColor("#ffffffff");
                                Scroll.onTouch((event) => {
                                    this.putDownRefresh(event);
                                });
                                if (!isInitialRender) {
                                    Scroll.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Column.create();
                                if (!isInitialRender) {
                                    Column.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (this.refreshStatus) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        {
                                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                if (isInitialRender) {
                                                    ViewPU.create(new PutDownRefresh(this, { refreshText: this.__refreshText }, undefined, elmtId));
                                                }
                                                else {
                                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                }
                                                ViewStackProcessor.StopGetAccessRecording();
                                            });
                                        }
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Swiper.create(this.swiperController);
                                Swiper.margin({ top: ('0') });
                                Swiper.autoPlay(true);
                                Swiper.width('90%');
                                Swiper.height('25%');
                                if (!isInitialRender) {
                                    Swiper.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                ForEach.create();
                                const forEachItemGenFunction = _item => {
                                    const item = _item;
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Stack.create();
                                        Stack.align(Alignment.End);
                                        Stack.onClick(() => {
                                            router.pushUrl({
                                                url: CommonConstants.SEE_BUTTON_PUSH,
                                                params: {
                                                    index: item.sort
                                                }
                                            }).catch((error) => {
                                                Logger.error(CommonConstants.TAG_MOVIE_ITEM, 'push error ' + JSON.stringify(error));
                                            });
                                        });
                                        if (!isInitialRender) {
                                            Stack.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Image.create(item.movieImage);
                                        Image.borderRadius('16vp');
                                        Image.autoResize(false);
                                        Image.sharedTransition(item.title, { duration: 1000, curve: Curves.cubicBezier(0.2, 0.2, 0.1, 1.0), delay: 100 });
                                        if (!isInitialRender) {
                                            Image.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(item.title);
                                        Text.width('100%');
                                        Text.fontColor('#ffffffff');
                                        Text.height('300vp');
                                        Text.fontWeight(FontWeight.Medium);
                                        Text.fontSize('24vp');
                                        Text.margin({ left: 10 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                    Stack.pop();
                                };
                                this.forEachUpdateFunction(elmtId, this.listData, forEachItemGenFunction);
                                if (!isInitialRender) {
                                    ForEach.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            ForEach.pop();
                            Swiper.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                List.create({ space: StyleConstants.LIST_COMPONENT_SPACE });
                                List.listDirection(Axis.Vertical);
                                List.edgeEffect(EdgeEffect.None);
                                List.width(StyleConstants.FULL_WIDTH);
                                List.lanes(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                                    CommonConstants.COL_TWO : CommonConstants.COL_ONE);
                                if (!isInitialRender) {
                                    List.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            {
                                const __lazyForEachItemGenFunction = _item => {
                                    const item = _item;
                                    {
                                        const isLazyCreate = (globalThis.__lazyForEachItemGenFunction !== undefined) && true;
                                        const itemCreation = (elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            ListItem.create(deepRenderFunction, isLazyCreate);
                                            if (!isInitialRender) {
                                                ListItem.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        };
                                        const observedShallowRender = () => {
                                            this.observeComponentCreation(itemCreation);
                                            ListItem.pop();
                                        };
                                        const observedDeepRender = () => {
                                            this.observeComponentCreation(itemCreation);
                                            {
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    if (isInitialRender) {
                                                        ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                            }
                                            ListItem.pop();
                                        };
                                        const deepRenderFunction = (elmtId, isInitialRender) => {
                                            itemCreation(elmtId, isInitialRender);
                                            this.updateFuncByElmtId.set(elmtId, itemCreation);
                                            {
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    if (isInitialRender) {
                                                        ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                            }
                                            ListItem.pop();
                                        };
                                        if (isLazyCreate) {
                                            observedShallowRender();
                                        }
                                        else {
                                            observedDeepRender();
                                        }
                                    }
                                };
                                const __lazyForEachItemIdFunc = item => JSON.stringify(item);
                                LazyForEach.create("1", this, this.dataSource, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
                                LazyForEach.pop();
                            }
                            List.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                //.height('70%')
                                //Column().width('100%').height('100%').backgroundColor('#00CB87')
                                Text.create({ "id": 16777274, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                                //.height('70%')
                                //Column().width('100%').height('100%').backgroundColor('#00CB87')
                                Text.fontSize(16);
                                //.height('70%')
                                //Column().width('100%').height('100%').backgroundColor('#00CB87')
                                Text.fontColor('#989A9C');
                                if (!isInitialRender) {
                                    //.height('70%')
                                    //Column().width('100%').height('100%').backgroundColor('#00CB87')
                                    Text.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            //.height('70%')
                            //Column().width('100%').height('100%').backgroundColor('#00CB87')
                            Text.pop();
                            Column.pop();
                            Scroll.pop();
                        });
                        TabContent.tabBar({ builder: () => {
                                this.TabBuilder.call(this, 0, '全部');
                            } });
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
                                List.create({ space: StyleConstants.LIST_COMPONENT_SPACE });
                                List.listDirection(Axis.Vertical);
                                List.edgeEffect(EdgeEffect.None);
                                List.layoutWeight(StyleConstants.WEIGHT_ONE);
                                List.width(StyleConstants.FULL_WIDTH);
                                List.height(StyleConstants.BIG_HEIGHT);
                                List.lanes(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                                    CommonConstants.COL_TWO : CommonConstants.COL_ONE);
                                if (!isInitialRender) {
                                    List.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            {
                                const __lazyForEachItemGenFunction = _item => {
                                    const item = _item;
                                    {
                                        const isLazyCreate = (globalThis.__lazyForEachItemGenFunction !== undefined) && true;
                                        const itemCreation = (elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            ListItem.create(deepRenderFunction, isLazyCreate);
                                            if (!isInitialRender) {
                                                ListItem.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        };
                                        const observedShallowRender = () => {
                                            this.observeComponentCreation(itemCreation);
                                            ListItem.pop();
                                        };
                                        const observedDeepRender = () => {
                                            this.observeComponentCreation(itemCreation);
                                            {
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    if (isInitialRender) {
                                                        ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                            }
                                            ListItem.pop();
                                        };
                                        const deepRenderFunction = (elmtId, isInitialRender) => {
                                            itemCreation(elmtId, isInitialRender);
                                            this.updateFuncByElmtId.set(elmtId, itemCreation);
                                            {
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    if (isInitialRender) {
                                                        ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                            }
                                            ListItem.pop();
                                        };
                                        if (isLazyCreate) {
                                            observedShallowRender();
                                        }
                                        else {
                                            observedDeepRender();
                                        }
                                    }
                                };
                                const __lazyForEachItemIdFunc = item => JSON.stringify(item);
                                LazyForEach.create("1", this, this.dataSource_1, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
                                LazyForEach.pop();
                            }
                            List.pop();
                        });
                        TabContent.tabBar({ builder: () => {
                                this.TabBuilder.call(this, 1, '科幻');
                            } });
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
                                List.create({ space: StyleConstants.LIST_COMPONENT_SPACE });
                                List.listDirection(Axis.Vertical);
                                List.edgeEffect(EdgeEffect.None);
                                List.layoutWeight(StyleConstants.WEIGHT_ONE);
                                List.width(StyleConstants.FULL_WIDTH);
                                List.height(StyleConstants.BIG_HEIGHT);
                                List.lanes(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                                    CommonConstants.COL_TWO : CommonConstants.COL_ONE);
                                if (!isInitialRender) {
                                    List.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            {
                                const __lazyForEachItemGenFunction = _item => {
                                    const item = _item;
                                    {
                                        const isLazyCreate = (globalThis.__lazyForEachItemGenFunction !== undefined) && true;
                                        const itemCreation = (elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            ListItem.create(deepRenderFunction, isLazyCreate);
                                            if (!isInitialRender) {
                                                ListItem.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        };
                                        const observedShallowRender = () => {
                                            this.observeComponentCreation(itemCreation);
                                            ListItem.pop();
                                        };
                                        const observedDeepRender = () => {
                                            this.observeComponentCreation(itemCreation);
                                            {
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    if (isInitialRender) {
                                                        ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                            }
                                            ListItem.pop();
                                        };
                                        const deepRenderFunction = (elmtId, isInitialRender) => {
                                            itemCreation(elmtId, isInitialRender);
                                            this.updateFuncByElmtId.set(elmtId, itemCreation);
                                            {
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    if (isInitialRender) {
                                                        ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                            }
                                            ListItem.pop();
                                        };
                                        if (isLazyCreate) {
                                            observedShallowRender();
                                        }
                                        else {
                                            observedDeepRender();
                                        }
                                    }
                                };
                                const __lazyForEachItemIdFunc = item => JSON.stringify(item);
                                LazyForEach.create("1", this, this.dataSource, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
                                LazyForEach.pop();
                            }
                            List.pop();
                        });
                        TabContent.tabBar({ builder: () => {
                                this.TabBuilder.call(this, 2, '喜剧');
                            } });
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
                                List.create({ space: StyleConstants.LIST_COMPONENT_SPACE });
                                List.listDirection(Axis.Vertical);
                                List.edgeEffect(EdgeEffect.None);
                                List.layoutWeight(StyleConstants.WEIGHT_ONE);
                                List.width(StyleConstants.FULL_WIDTH);
                                List.height(StyleConstants.BIG_HEIGHT);
                                List.lanes(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ?
                                    CommonConstants.COL_TWO : CommonConstants.COL_ONE);
                                if (!isInitialRender) {
                                    List.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            {
                                const __lazyForEachItemGenFunction = _item => {
                                    const item = _item;
                                    {
                                        const isLazyCreate = (globalThis.__lazyForEachItemGenFunction !== undefined) && true;
                                        const itemCreation = (elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            ListItem.create(deepRenderFunction, isLazyCreate);
                                            if (!isInitialRender) {
                                                ListItem.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        };
                                        const observedShallowRender = () => {
                                            this.observeComponentCreation(itemCreation);
                                            ListItem.pop();
                                        };
                                        const observedDeepRender = () => {
                                            this.observeComponentCreation(itemCreation);
                                            {
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    if (isInitialRender) {
                                                        ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                            }
                                            ListItem.pop();
                                        };
                                        const deepRenderFunction = (elmtId, isInitialRender) => {
                                            itemCreation(elmtId, isInitialRender);
                                            this.updateFuncByElmtId.set(elmtId, itemCreation);
                                            {
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    if (isInitialRender) {
                                                        ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                                    }
                                                    else {
                                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                            }
                                            ListItem.pop();
                                        };
                                        if (isLazyCreate) {
                                            observedShallowRender();
                                        }
                                        else {
                                            observedDeepRender();
                                        }
                                    }
                                };
                                const __lazyForEachItemIdFunc = item => JSON.stringify(item);
                                LazyForEach.create("1", this, this.dataSource, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
                                LazyForEach.pop();
                            }
                            List.pop();
                        });
                        TabContent.tabBar({ builder: () => {
                                this.TabBuilder.call(this, 3, '悬疑');
                            } });
                        if (!isInitialRender) {
                            TabContent.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    TabContent.pop();
                    Tabs.pop();
                    Flex.pop();
                    Navigator.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777283, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.height({ "id": 16777355, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777386, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.backgroundColor(Color.White);
    TextInput.margin({ top: { "id": 16777332, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
    TextInput.padding({ left: StyleConstants.INPUT_LEFT });
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MovieListPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MovieListPage.js.map