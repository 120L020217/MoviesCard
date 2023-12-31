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
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
/**
 * Lift cycle management of Ability.
 */
export default class EntryAbility extends UIAbility {
    onCreate(want, launchParam) {
        Logger.info(CommonConstants.TAG_ABILITY, 'want = ' + JSON.stringify(want));
        Logger.info(CommonConstants.TAG_ABILITY, 'launchParam = ' + JSON.stringify(launchParam));
        CommonUtils.createRdbStore(this.context);
    }
    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability.
        windowStage.loadContent('pages/MovieListPage', (err, data) => {
            if (err.code) {
                Logger.error(CommonConstants.TAG_ABILITY, 'Failed to load ' + JSON.stringify(err));
                return;
            }
            Logger.info(CommonConstants.TAG_ABILITY, 'Succeeded loading ' + JSON.stringify(data));
        });
    }
}
//# sourceMappingURL=EntryAbility.js.map