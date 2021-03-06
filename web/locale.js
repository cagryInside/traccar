/*
 * Copyright 2015 Anton Tananaev (anton.tananaev@gmail.com)
 *
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

var Locale = {};

Ext.Loader.setConfig({
    disableCaching: false
});

Locale.languages = {
    'ar': { name: 'العربية', code: 'en' },
    'bg': { name: 'Български', code: 'bg' },
    'cs': { name: 'Čeština', code: 'cs' },
    'de': { name: 'Deutsch', code: 'de' },
    'da': { name: 'Dansk', code: 'da' },
    'el': { name: 'Ελληνικά', code: 'el' },
    'en': { name: 'English', code: 'en' },
    'es': { name: 'Español', code: 'es' },
    'fr': { name: 'Français', code: 'fr' },
    'hu': { name: 'Magyar', code: 'hu' },
    'lt': { name: 'Lietuvių', code: 'lt' },
    'nl': { name: 'Nederlands', code: 'nl' },
    'no': { name: 'Norsk', code: 'no_NB' },
    'pl': { name: 'Polski', code: 'pl' },
    'pt': { name: 'Português', code: 'pt' },
    'pt_BR': { name: 'Português (Brasil)', code: 'pt_BR' },
    'ru': { name: 'Русский', code: 'ru' },
    'si': { name: 'සිංහල', code: 'en' },
    'sk': { name: 'Slovenčina', code: 'sk' },
    'sl': { name: 'Slovenščina', code: 'sl' },
    'sr': { name: 'Srpski', code: 'sr' },
    'th': { name: 'ไทย', code: 'th' },
    'uk': { name: 'Українська', code: 'ukr' },
    'zh': { name: '中文', code: 'zh_CN' }
};

Locale.language = Ext.Object.fromQueryString(window.location.search.substring(1)).locale;
if (Locale.language === undefined) {
    Locale.language = window.navigator.userLanguage || window.navigator.language;
    Locale.language = Locale.language.substr(0, 2);
}

if (!(Locale.language in Locale.languages)) {
    Locale.language = 'en'; // default
}

Ext.Ajax.request({
    url: '/l10n/' + Locale.language + '.json',
    callback: function (options, success, response) {
        Strings = Ext.decode(response.responseText);
    }
});

Ext.Loader.loadScript('//cdnjs.cloudflare.com/ajax/libs/extjs/6.0.0/classic/locale/locale-' + Locale.languages[Locale.language].code + '.js');
