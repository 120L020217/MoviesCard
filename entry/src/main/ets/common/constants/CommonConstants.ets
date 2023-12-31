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

import relationalStore from '@ohos.data.relationalStore';

/**
 * Common constants for all features.
 */
export default class CommonConstants {
  /**
   * The entry ability tag.
   */
  static readonly TAG_ABILITY: string = 'EntryAbility';

  static readonly TAG_LIST_ITEM: string = 'ListItem';

  static readonly BREAKPOINT_SM: string = 'sm';

  /**
   * Breakpoints that represent middle device types.
   */
  static readonly BREAKPOINT_MD: string = 'md';

  /**
   * Breakpoints that represent large device types.
   */
  static readonly BREAKPOINT_LG: string = 'lg';

  static readonly COL_TWO: number = 2;

  static readonly COL_ONE: number = 1;

  /**
   * Current breakpoints that to query the device types.
   */
  static readonly CURRENT_BREAKPOINT: string = 'currentBreakpoint';

  /**
   * Font size of the current device types.
   */
  static readonly FONT_SIZE: string = 'fontSize';

  /**
   * Album cover margin

   /**
   * The entry details ability tag.
   */
  static readonly TAG_DETAILS: string = 'EntryDetailsAbility';

  static readonly TOAST_DURATION: number = 3000;

  /**
   * The movie list page tag.
   */
  static readonly TAG_MOVIE_LIST: string = 'MovieListPage';

  static readonly TYPE_FONT_WEIGHT: number = 700;

  static readonly DESC_FONT_WEIGHT: number = 400;

  static readonly FULL_PERCENT: string = '100%';

  /**
   * The movie details page tag.
   */
  static readonly TAG_DETAILS_PAGE: string = 'MovieDetailsPage';

  /**
   * The entry form ability tag.
   */
  static readonly TAG_FORM_ABILITY: string = 'EntryFormAbility';

  /**
   * The movie item component tag.
   */
  static readonly TAG_MOVIE_ITEM: string = 'MovieItem';

  /**
   * The movie details item component tag.
   */
  static readonly TAG_DETAILS_COMPONENT: string = 'MovieDetailTitle';

  /**
   *  The common utils tag.
   */
  static readonly TAG_COMMON_UTILS: string = 'CommonUtils';

  /**
   * Database store configuration.
   */
  static readonly STORE_CONFIG: relationalStore.StoreConfig = {
    name: 'FormDatabase.db', securityLevel: relationalStore.SecurityLevel.S1, encrypt: false
  };

  /**
   * SQL statement for creating a form.
   */
  static readonly CREATE_TABLE_FORM: string = 'CREATE TABLE IF NOT EXISTS Form ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, formId TEXT NOT NULL, formName TEXT NOT NULL, dimension INTEGER)';

  /**
   * ID parameter for creating a form.
   */
  static readonly IDENTITY_KEY: string = 'ohos.extra.param.key.form_identity';

  /**
   * Name parameter for creating a form.
   */
  static readonly NAME_KEY: string = 'ohos.extra.param.key.form_name';

  /**
   * Dimension parameter for creating a form.
   */
  static readonly DIMENSION_KEY: string = 'ohos.extra.param.key.form_dimension';

  /**
   * Table name
   */
  static readonly TABLE_NAME: string = 'Form';

  /**
   * Refresh time in 5 minute.
   */
  static readonly FIVE_MINUTES: number = 5;

  /**
   * Form ID field in the database table.
   */
  static readonly FORM_ID: string = 'formId';

  /**
   * Time interval of the 300000.
   */
  static readonly INTERVAL_DELAY_TIME: number = 300000;

  /**
   * Notification id of the 1008.
   */
  static readonly NOTIFICATIONS_ID: number = 1008;

  /**
   * Random multiply ten.
   */
  static readonly MULTIPLY_TEN: number = 10;

  /**
   * Random minus two.
   */
  static readonly MINUS_TWO: number = 2;

  /**
   * Default lines of the 5.
   */
  static readonly DEFAULT_LINES: number = 5;

  /**
   * Max lines of the 10.
   */
  static readonly MAX_LINES: number = 10;

  /**
   * Index key
   */
  static readonly INDEX_KEY: string = 'index';

  /**
   * See button push page url.
   */
  static readonly SEE_BUTTON_PUSH: string = 'pages/MovieDetailsPage';
}