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
import mediaQuery from '@ohos:mediaquery';
import { BreakpointConstants } from '@bundle:com.huawei.moviecard/entry/ets/common/constants/BreakpointConstants';
export class BreakpointSystem {
    constructor() {
        this.currentBreakpoint = BreakpointConstants.BREAKPOINT_SM;
        this.isBreakpointSM = (mediaQueryResult) => {
            if (mediaQueryResult.matches) {
                this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_SM);
                AppStorage.Set(BreakpointConstants.FONT_SIZE, BreakpointConstants.FONT_SIZE_SM);
                AppStorage.Set(BreakpointConstants.COVER_MARGIN, BreakpointConstants.COVER_MARGIN_SM);
            }
        };
        this.isBreakpointMD = (mediaQueryResult) => {
            if (mediaQueryResult.matches) {
                this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_MD);
                AppStorage.Set(BreakpointConstants.FONT_SIZE, BreakpointConstants.FONT_SIZE_MD);
                AppStorage.Set(BreakpointConstants.COVER_MARGIN, BreakpointConstants.COVER_MARGIN_MD);
            }
        };
        this.isBreakpointLG = (mediaQueryResult) => {
            if (mediaQueryResult.matches) {
                this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_LG);
                AppStorage.Set(BreakpointConstants.FONT_SIZE, BreakpointConstants.FONT_SIZE_LG);
                AppStorage.Set(BreakpointConstants.COVER_MARGIN, BreakpointConstants.COVER_MARGIN_LG);
            }
        };
    }
    updateCurrentBreakpoint(breakpoint) {
        if (this.currentBreakpoint !== breakpoint) {
            this.currentBreakpoint = breakpoint;
            AppStorage.Set(BreakpointConstants.CURRENT_BREAKPOINT, this.currentBreakpoint);
        }
    }
    register() {
        this.smListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_SM);
        this.smListener.on('change', this.isBreakpointSM);
        this.mdListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_MD);
        this.mdListener.on('change', this.isBreakpointMD);
        this.lgListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_LG);
        this.lgListener.on('change', this.isBreakpointLG);
    }
    unregister() {
        this.smListener.off('change', this.isBreakpointSM);
        this.mdListener.off('change', this.isBreakpointMD);
        this.lgListener.off('change', this.isBreakpointLG);
    }
}
//# sourceMappingURL=BreakpointSystem.js.map