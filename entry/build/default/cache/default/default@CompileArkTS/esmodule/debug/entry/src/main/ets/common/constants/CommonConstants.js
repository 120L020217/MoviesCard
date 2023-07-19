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
import relationalStore from '@ohos:data.relationalStore';
/**
 * Common constants for all features.
 */
export default class CommonConstants {
}
/**
 * The entry ability tag.
 */
CommonConstants.TAG_ABILITY = 'EntryAbility';
CommonConstants.TAG_LIST_ITEM = 'ListItem';
CommonConstants.BREAKPOINT_SM = 'sm';
/**
 * Breakpoints that represent middle device types.
 */
CommonConstants.BREAKPOINT_MD = 'md';
/**
 * Breakpoints that represent large device types.
 */
CommonConstants.BREAKPOINT_LG = 'lg';
CommonConstants.COL_TWO = 2;
CommonConstants.COL_ONE = 1;
/**
 * Current breakpoints that to query the device types.
 */
CommonConstants.CURRENT_BREAKPOINT = 'currentBreakpoint';
/**
 * Font size of the current device types.
 */
CommonConstants.FONT_SIZE = 'fontSize';
/**
 * Album cover margin

 /**
 * The entry details ability tag.
 */
CommonConstants.TAG_DETAILS = 'EntryDetailsAbility';
CommonConstants.TOAST_DURATION = 3000;
/**
 * The movie list page tag.
 */
CommonConstants.TAG_MOVIE_LIST = 'MovieListPage';
CommonConstants.TYPE_FONT_WEIGHT = 700;
CommonConstants.DESC_FONT_WEIGHT = 400;
CommonConstants.FULL_PERCENT = '100%';
/**
 * The movie details page tag.
 */
CommonConstants.TAG_DETAILS_PAGE = 'MovieDetailsPage';
/**
 * The entry form ability tag.
 */
CommonConstants.TAG_FORM_ABILITY = 'EntryFormAbility';
/**
 * The movie item component tag.
 */
CommonConstants.TAG_MOVIE_ITEM = 'MovieItem';
/**
 * The movie details item component tag.
 */
CommonConstants.TAG_DETAILS_COMPONENT = 'MovieDetailTitle';
/**
 *  The common utils tag.
 */
CommonConstants.TAG_COMMON_UTILS = 'CommonUtils';
/**
 * Database store configuration.
 */
CommonConstants.STORE_CONFIG = {
    name: 'FormDatabase.db', securityLevel: relationalStore.SecurityLevel.S1, encrypt: false
};
/**
 * SQL statement for creating a form.
 */
CommonConstants.CREATE_TABLE_FORM = 'CREATE TABLE IF NOT EXISTS Form ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, formId TEXT NOT NULL, formName TEXT NOT NULL, dimension INTEGER)';
/**
 * ID parameter for creating a form.
 */
CommonConstants.IDENTITY_KEY = 'ohos.extra.param.key.form_identity';
/**
 * Name parameter for creating a form.
 */
CommonConstants.NAME_KEY = 'ohos.extra.param.key.form_name';
/**
 * Dimension parameter for creating a form.
 */
CommonConstants.DIMENSION_KEY = 'ohos.extra.param.key.form_dimension';
/**
 * Table name
 */
CommonConstants.TABLE_NAME = 'Form';
/**
 * Refresh time in 5 minute.
 */
CommonConstants.FIVE_MINUTES = 5;
/**
 * Form ID field in the database table.
 */
CommonConstants.FORM_ID = 'formId';
/**
 * Time interval of the 300000.
 */
CommonConstants.INTERVAL_DELAY_TIME = 300000;
/**
 * Notification id of the 1008.
 */
CommonConstants.NOTIFICATIONS_ID = 1008;
/**
 * Random multiply ten.
 */
CommonConstants.MULTIPLY_TEN = 10;
/**
 * Random minus two.
 */
CommonConstants.MINUS_TWO = 2;
/**
 * Default lines of the 5.
 */
CommonConstants.DEFAULT_LINES = 5;
/**
 * Max lines of the 10.
 */
CommonConstants.MAX_LINES = 10;
/**
 * Index key
 */
CommonConstants.INDEX_KEY = 'index';
/**
 * See button push page url.
 */
CommonConstants.SEE_BUTTON_PUSH = 'pages/MovieDetailsPage';
//# sourceMappingURL=CommonConstants.js.map