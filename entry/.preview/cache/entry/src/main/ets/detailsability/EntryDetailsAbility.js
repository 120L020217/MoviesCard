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
import UIAbility from '@ohos:app.ability.UIAbility';
import CommonConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
/**
 * Lift cycle management of Ability.
 */
export default class EntryDetailsAbility extends UIAbility {
    onCreate(want, launchParam) {
        var _a;
        Logger.info(CommonConstants.TAG_DETAILS, 'want =' + JSON.stringify(want));
        Logger.info(CommonConstants.TAG_DETAILS, 'launchParam =' + JSON.stringify(launchParam));
        let params = (_a = want === null || want === void 0 ? void 0 : want.parameters) === null || _a === void 0 ? void 0 : _a.params;
        Logger.info(CommonConstants.TAG_DETAILS, 'params ' + params);
        let parseParams = JSON.parse(params);
        Logger.info(CommonConstants.TAG_DETAILS, 'parseParams ' + parseParams);
        let index = parseParams === null || parseParams === void 0 ? void 0 : parseParams.index;
        globalThis.position = index;
    }
    onNewWant(want, launchParam) {
        var _a;
        Logger.info(CommonConstants.TAG_DETAILS, 'onNewWant want =' + JSON.stringify(want));
        Logger.info(CommonConstants.TAG_DETAILS, 'onNewWant launchParam =' + JSON.stringify(launchParam));
        let params = (_a = want === null || want === void 0 ? void 0 : want.parameters) === null || _a === void 0 ? void 0 : _a.params;
        Logger.info(CommonConstants.TAG_DETAILS, 'onNewWant params ' + params);
        let parseParams = JSON.parse(params);
        Logger.info(CommonConstants.TAG_DETAILS, 'onNewWant parseParams ' + parseParams);
        let index = parseParams === null || parseParams === void 0 ? void 0 : parseParams.index;
        globalThis.position = index;
    }
    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability.
        windowStage.loadContent('pages/MovieDetailsPage', (err, data) => {
            if (err.code) {
                Logger.error(CommonConstants.TAG_DETAILS, 'Failed to load ' + JSON.stringify(err));
                return;
            }
            Logger.info(CommonConstants.TAG_DETAILS, 'Succeeded loading ' + JSON.stringify(data));
        });
    }
}
//# sourceMappingURL=EntryDetailsAbility.js.map